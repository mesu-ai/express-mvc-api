export { config } from './environment';
export { databaseConfig, connectDatabase, checkDatabaseHealth } from './database';

import { config } from './environment';

// Re-export commonly used config values
export const {
  port,
  nodeEnv,
  apiPrefix,
  isDevelopment,
  isProduction,
  isTest
} = config;