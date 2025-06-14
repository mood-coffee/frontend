/**
 * Post type definition
 */
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  coverImage: string;
  tags: string[];
}
