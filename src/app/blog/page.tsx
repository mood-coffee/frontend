import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { fetchPosts } from '@/lib/api';
import { convertGoogleDriveUrl } from '@/lib/utils/imageUtils';

export const metadata = {
  title: 'Blog | Mood Coffee',
  description: 'Insights, tips, and stories from the world of coffee.',
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              İçerikler, ipuçları ve kahve dünyasından hikayeler.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {posts.map((post) => {
            // Process Google Drive URL for blog image
            const processedImage = convertGoogleDriveUrl(post.image);
            
            return (
              <article key={post.id} className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm border border-natural">
                <div className="md:w-1/3">
                  <div className="w-full h-48 rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src={processedImage}
                      alt={post.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-neutral">
                    <time dateTime={post.publishedAt} className="text-accent font-medium">
                      {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <h2 className="text-2xl font-bold text-primary hover:text-accent transition-colors">{post.title}</h2>
                  </Link>
                  <p className="mt-3 text-neutral">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center"
                    >
                      Devamını oku
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </>
  );
}
