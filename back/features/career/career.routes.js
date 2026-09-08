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

const router = Router();

// Public routes
router.get('/', getJobs);
router.get('/:id', getJob);
router.post('/:id/apply', upload.single('resume'), applyForJob);

// Admin-protected routes
router.post('/', authenticate, authorize('admin'), createJob);
router.put('/:id', authenticate, authorize('admin'), updateJob);
router.delete('/:id', authenticate, authorize('admin'), deleteJob);
router.get('/:id/applications', authenticate, authorize('admin'), getJobApplications);

export default router;