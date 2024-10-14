import { createClient } from '@sanity/client';
import  imageUrlBuilder  from '@sanity/image-url';

// Create a Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2024-10-01', // Use the latest API version
  useCdn: false, // `false` if you want to ensure fresh data
});

// Set up the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

// Function to fetch a single course by ID
export async function getCourse(id) {
  return await client.fetch(`*[_type == "course" && _id == $id][0]`, { id });
}

// Function to fetch all courses
export async function getAllCourses() {
  return await client.fetch(`*[_type == "course"]`);
}

// Function to fetch courses with pagination
export async function getPaginatedCourses(start = 0, end = 10) {
  return await client.fetch(`*[_type == "course"] | order(_createdAt desc) [${start}...${end}]`);
}

// Function to search courses
export async function searchCourses(query) {
  return await client.fetch(
    `*[_type == "course" && (title match $query || description match $query)]`,
    { query: `*${query}*` }
  );
}

// Function to create a new course
export async function createCourse(courseData) {
  return await client.create({
    _type: 'course',
    ...courseData
  });
}

// Function to update an existing course
export async function updateCourse(id, courseData) {
  return await client.patch(id).set(courseData).commit();
}

// Function to delete a course
export async function deleteCourse(id) {
  return await client.delete(id);
}