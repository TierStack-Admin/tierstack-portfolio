import { Router } from 'express';
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from './portfolio.controller.js';
import { authenticate, authorize } from '../../middlewares/auth.middleware.js';
import { upload } from '../../middlewares/upload.middleware.js';

const portfolioRoutes = Router();

// Public routes
portfolioRoutes.get('/', getProjects);
portfolioRoutes.get('/:slug', getProject);

// Admin-protected routes
portfolioRoutes.post('/', authenticate, authorize('admin'), upload.single('coverImage'), createProject);
portfolioRoutes.put('/:id', authenticate, authorize('admin'), upload.single('coverImage'), updateProject);
portfolioRoutes.delete('/:id', authenticate, authorize('admin'), deleteProject);

export  {portfolioRoutes};