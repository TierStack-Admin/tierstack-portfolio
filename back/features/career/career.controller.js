import * as careerService from './career.service.js';
import { ApiError } from '../../utils/apiError.js';

// --- JOBS CONTROLLERS ---

export const getJobs = async (req, res, next) => {
  try {
    const includeInactive = req.user?.role === 'admin';
    const jobs = await careerService.getAllJobs(includeInactive);
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    next(error);
  }
};

export const getJob = async (req, res, next) => {
  try {
    const job = await careerService.getJobById(req.params.id);
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
};

export const createJob = async (req, res, next) => {
  try {
    const job = await careerService.createJob(req.body);
    res.status(201).json({ success: true, message: 'Job created successfully', data: job });
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const job = await careerService.updateJob(req.params.id, req.body);
    res.status(200).json({ success: true, message: 'Job updated successfully', data: job });
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    await careerService.deleteJob(req.params.id);
    res.status(200).json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// --- APPLICATION CONTROLLERS ---

export const applyForJob = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new ApiError(400, 'Resume file is required');
    }

    const applicationData = {
      ...req.body,
      jobId: req.params.id,
      resumeUrl: req.file.path.replace(/\\/g, '/'),
    };

    const application = await careerService.submitApplication(applicationData);
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

export const getJobApplications = async (req, res, next) => {
  try {
    const applications = await careerService.getApplicationsForJob(req.params.id);
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    next(error);
  }
};