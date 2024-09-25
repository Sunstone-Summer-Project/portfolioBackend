import {defineCliConfig} from 'sanity/cli';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineCliConfig({
  api: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET
  }
});
