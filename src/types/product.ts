/**
 * Product type definition
 */

export interface PriceWeight {
  weight: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  priceWeight: PriceWeight[];
  currency: string;
  inStock: boolean;
  isActive: boolean;
  category: string;
  origin: string;
  acidity: number | null;
  intensity: number | null;
  processing: string;
  growingAltitude: string | null;
  roastLevel: string | null;
  flavorNotes: string[] | null;
  images: string[];
  featured: boolean;
  grindType?: string; // Optional grinding type for cart items
  availableGrindOptions: string[] | null; // Available grinding options for this product
}
