/**
 * API client abstraction
 * 
 * This module provides functions to fetch data from the API.
 * In the initial phase, it returns stub data from JSON files.
 * Later, it will be updated to make real HTTP requests to the NestJS backend.
 */

import { Post } from '@/types/post';
import { User } from '@/types/user';
import { Product } from '@/types/product';

/**
 * Fetch all posts
 * @returns Array of posts
 */
export async function fetchPosts(): Promise<Post[]> {
  // In the initial phase, return stub data
  return await import('../../data/posts.json').then(m => m.default);
  
  // Later, when the NestJS API is ready:
  // const res = await fetch('https://api.example.com/posts');
  // return res.json();
}

/**
 * Fetch a single post by slug
 * @param slug Post slug
 * @returns Post or null if not found
 */
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const posts = await fetchPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Fetch all users
 * @returns Array of users
 */
export async function fetchUsers(): Promise<User[]> {
  // In the initial phase, return stub data
  return await import('../../data/users.json').then(m => m.default);
  
  // Later, when the NestJS API is ready:
  // const res = await fetch('https://api.example.com/users');
  // return res.json();
}

/**
 * Fetch a single user by ID
 * @param id User ID
 * @returns User or null if not found
 */
export async function fetchUserById(id: string): Promise<User | null> {
  const users = await fetchUsers();
  return users.find(user => user.id === id) || null;
}

/**
 * Fetch all products
 * @returns Array of products
 */
export async function fetchProducts(): Promise<Product[]> {
  // In the initial phase, return stub data
  return await import('../../data/products.json').then(m => m.default);
  
  // Later, when the NestJS API is ready:
  // const res = await fetch('https://api.example.com/products');
  // return res.json();
}

/**
 * Fetch a single product by slug
 * @param slug Product slug
 * @returns Product or null if not found
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const products = await fetchProducts();
  return products.find(product => product.slug === slug) || null;
}

/**
 * Fetch featured products
 * @returns Array of featured products
 */
export async function fetchFeaturedProducts(): Promise<Product[]> {
  const products = await fetchProducts();
  return products.filter(product => product.featured);
}
