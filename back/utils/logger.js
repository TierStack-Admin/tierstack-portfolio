import { config } from '../config/env.js';

export const logger = {
  info: (msg) => console.log(`[INFO]: ${msg}`),
  warn: (msg) => console.warn(`[WARN]: ${msg}`),
  error: (msg, err) => {
    console.error(`[ERROR]: ${msg}`);
    if (err && config.nodeEnv === 'development') {
      console.error(err);
    }
  },
};