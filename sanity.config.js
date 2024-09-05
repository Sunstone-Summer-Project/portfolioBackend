import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import authorSchema from '/schemaTypes/authorSchema.js';
import blog from './schemaTypes/blog';


export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'viv3sflq',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [authorSchema, blog],  // Include both authorSchema and blog in the types array
  }
});
