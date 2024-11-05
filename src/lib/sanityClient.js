import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'lxrdcccy',
  dataset: 'production',
  apiVersion: '2024-05-03', // Use today's date or your preferred version
  useCdn: true
});
