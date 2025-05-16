/**
 * Product type definition
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  weight: string;
  inStock: boolean;
  category: string;
  origin: string;
  roastLevel: string;
  flavorNotes: string[];
  images: string[];
  featured: boolean;
}
