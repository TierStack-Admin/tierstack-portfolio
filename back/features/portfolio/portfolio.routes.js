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

const router = Router();

// Public routes
router.get('/', getProjects);
router.get('/:slug', getProject);

// Admin-protected routes
router.post('/', authenticate, authorize('admin'), upload.single('coverImage'), createProject);
router.put('/:id', authenticate, authorize('admin'), upload.single('coverImage'), updateProject);
router.delete('/:id', authenticate, authorize('admin'), deleteProject);

export default router;