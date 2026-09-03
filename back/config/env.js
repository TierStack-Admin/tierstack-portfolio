import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = ['PORT', 'MONGO_URI', 'JWT_SECRET'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing critical environment variable: ${envVar}`);
  }
}

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
  nodeEnv: process.env.NODE_ENV || 'development',
};