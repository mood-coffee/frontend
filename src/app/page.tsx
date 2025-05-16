import { HeroSection } from '@/features/home/HeroSection';
import { FeaturedProducts } from '@/features/home/FeaturedProducts';
import { BlogPreview } from '@/features/home/BlogPreview';
import { fetchFeaturedProducts } from '@/lib/api';
import { fetchPosts } from '@/lib/api';

export default async function Home() {
  // Fetch data using the API client abstraction
  const featuredProducts = await fetchFeaturedProducts();
  const posts = await fetchPosts();

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <BlogPreview posts={posts.slice(0, 3)} />
    </>
  );
}
