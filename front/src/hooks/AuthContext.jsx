import { createContext, useState, useEffect, useCallback } from 'react';
import api from '../utils/api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(() => Boolean(localStorage.getItem('authToken')));

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) return;

    let isMounted = true;
    api.get('/auth/me')
      .then(({ data }) => {
        if (isMounted) setUser(data.data);
      })
      .catch(() => {
        if (isMounted) {
          localStorage.removeItem('authToken');
          setUser(null);
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('authToken', data.data.token);
    setUser(data.data.user);
    return data;
  };

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
