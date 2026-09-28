import * as portfolioService from './portfolio.service.js';
import { ApiError } from '../../utils/apiError.js';

export const getProjects = async (req, res, next) => {
  try {
    const includeUnpublished = req.user?.role === 'admin';
    const projects = await portfolioService.getAllProjects(includeUnpublished);
    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const project = await portfolioService.getProjectBySlug(req.params.slug);
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new ApiError(400, 'Cover image is required');
    }

    let technologies = req.body.technologies;
    if (typeof technologies === 'string') {
      technologies = technologies.split(',').map((tech) => tech.trim());
    }

    const projectData = {
      ...req.body,
      technologies,
      coverImage: req.file.path.replace(/\\/g, '/'),
    };

    const project = await portfolioService.createProject(projectData);
    res.status(201).json({ success: true, message: 'Project created successfully', data: project });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    let updateData = { ...req.body };

    if (req.file) {
      updateData.coverImage = req.file.path.replace(/\\/g, '/');
    }

    if (typeof updateData.technologies === 'string') {
      updateData.technologies = updateData.technologies.split(',').map((tech) => tech.trim());
    }

    const project = await portfolioService.updateProject(req.params.id, updateData);
    res.status(200).json({ success: true, message: 'Project updated successfully', data: project });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    await portfolioService.deleteProject(req.params.id);
    res.status(200).json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};