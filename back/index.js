import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { logger } from './utils/logger.js';

const app = express();

// 1. Connect to Database
connectDB();

// 2. Global Middlewares
app.use(cors()); // Enables cross-origin requests from React
app.use(express.json()); // Parses incoming application/json body payloads
app.use(express.urlencoded({ extended: true }));

// 3. Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend server is active' });
});

// 4. Feature Routes (Mounted in Step 4)
// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/careers', careerRoutes);
// app.use('/api/v1/services', serviceRoutes);

// 5. Global Error Handling Middleware (MUST be last)
app.use(errorHandler);

// 6. Start Server
app.listen(config.port, () => {
  logger.info(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
});