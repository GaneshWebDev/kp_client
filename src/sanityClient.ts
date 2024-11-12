// src/sanityClient.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '711v0pvi', // Replace with your Sanity project ID
  dataset: 'details', // Replace with your dataset name
  apiVersion: '2024-11-11', // Use the latest version or the one you're using
  useCdn: true, // Use the CDN for faster reads
});

export default client;
