import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
import { ApiError } from '../utils/apiError.js';

// Verify JWT token on protected routes
export const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new ApiError(401, 'Authentication token missing or invalid');
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach decoded user payload (id, role) to request
    req.user = decoded;
    next();
  } catch (error) {
    next(new ApiError(401, 'Unauthorized: Invalid or expired token'));
  }
};

// Enforce role permissions (e.g., authorize('admin'))
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(
        new ApiError(403, 'Forbidden: You do not have permission to access this resource')
      );
    }
    next();
  };
};