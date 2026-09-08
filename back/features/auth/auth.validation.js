import { ApiError } from '../../utils/apiError.js';

export const validateRegister = (data) => {
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new ApiError(400, 'Please provide name, email, and password');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new ApiError(400, 'Please provide a valid email address');
  }

  if (password.length < 6) {
    throw new ApiError(400, 'Password must be at least 6 characters long');
  }
};

export const validateLogin = (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new ApiError(400, 'Please provide email and password');
  }
};