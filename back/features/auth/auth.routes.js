import { Router } from 'express';
import { register, login, getMe } from './auth.controller.js';
import { authenticate } from '../../middlewares/auth.middleware.js';

const authRoutes = Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.get('/me', authenticate, getMe);

export  {authRoutes};