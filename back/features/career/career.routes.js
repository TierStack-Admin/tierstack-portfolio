import { Router } from 'express';
import {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  applyForJob,
  getJobApplications,
} from './career.controller.js';
import { authenticate, authorize } from '../../middlewares/auth.middleware.js';
import { upload } from '../../middlewares/upload.middleware.js';

const careerRoutes = Router();

// Public routes
careerRoutes.get('/', getJobs);
careerRoutes.get('/:id', getJob);
careerRoutes.post('/:id/apply', upload.single('resume'), applyForJob);

// Admin-protected routes
careerRoutes.post('/', authenticate, authorize('admin'), createJob);
careerRoutes.put('/:id', authenticate, authorize('admin'), updateJob);
careerRoutes.delete('/:id', authenticate, authorize('admin'), deleteJob);
careerRoutes.get('/:id/applications', authenticate, authorize('admin'), getJobApplications);

export  {careerRoutes};