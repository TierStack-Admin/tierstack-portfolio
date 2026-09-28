import { Project } from './portfolio.model.js';
import { ApiError } from '../../utils/apiError.js';

export const getAllProjects = async (includeUnpublished = false) => {
  const query = includeUnpublished ? {} : { isPublished: true };
  return await Project.find(query).sort({ isFeatured: -1, createdAt: -1 });
};

export const getProjectBySlug = async (slug) => {
  const project = await Project.findOne({ slug });
  if (!project) {
    throw new ApiError(404, 'Project not found');
  }
  return project;
};

export const createProject = async (projectData) => {
  const existingProject = await Project.findOne({ slug: projectData.slug });
  if (existingProject) {
    throw new ApiError(400, 'A project with this slug already exists');
  }

  return await Project.create(projectData);
};

export const updateProject = async (id, updateData) => {
  const project = await Project.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }
  return project;
};

export const deleteProject = async (id) => {
  const project = await Project.findByIdAndDelete(id);
  if (!project) {
    throw new ApiError(404, 'Project not found');
  }
  return project;
};