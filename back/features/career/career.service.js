import { Job, Application } from './career.model.js';
import { ApiError } from '../../utils/apiError.js';

// --- JOB OPERATIONS ---

export const getAllJobs = async (includeInactive = false) => {
  const query = includeInactive ? {} : { isActive: true };
  return await Job.find(query).sort({ createdAt: -1 });
};

export const getJobById = async (id) => {
  const job = await Job.findById(id);
  if (!job) {
    throw new ApiError(404, 'Job listing not found');
  }
  return job;
};

export const createJob = async (jobData) => {
  return await Job.create(jobData);
};

export const updateJob = async (id, updateData) => {
  const job = await Job.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!job) {
    throw new ApiError(404, 'Job listing not found');
  }
  return job;
};

export const deleteJob = async (id) => {
  const job = await Job.findByIdAndDelete(id);
  if (!job) {
    throw new ApiError(404, 'Job listing not found');
  }
  return job;
};

// --- APPLICATION OPERATIONS ---

export const submitApplication = async (applicationData) => {
  const jobExists = await Job.findById(applicationData.jobId);
  if (!jobExists || !jobExists.isActive) {
    throw new ApiError(400, 'Cannot apply to an inactive or non-existent job posting');
  }

  return await Application.create(applicationData);
};

export const getApplicationsForJob = async (jobId) => {
  return await Application.find({ jobId }).sort({ createdAt: -1 });
};