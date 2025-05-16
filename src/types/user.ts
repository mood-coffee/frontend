/**
 * User type definition
 */
export interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  role: string;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    [key: string]: string | undefined;
  };
}
