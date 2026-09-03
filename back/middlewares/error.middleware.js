import { ApiError } from '../utils/apiError.js';
import { logger } from '../utils/logger.js';
import { config } from '../config/env.js';

export const errorHandler = (err, req, res, next) => {
  let error = err;

  // If the thrown error isn't an instance of our custom ApiError, wrap it
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, false, err.stack);
  }

  // Log error message
  logger.error(`${req.method} ${req.originalUrl} - ${error.message}`, error);

  // Return formatted JSON response
  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    ...(config.nodeEnv === 'development' && { stack: error.stack }),
  });
};