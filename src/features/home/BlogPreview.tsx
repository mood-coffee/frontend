import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Post } from '@/types/post';
import { convertGoogleDriveUrl } from '@/lib/utils/imageUtils';

interface BlogPreviewProps {
  posts: Post[];
}

/**
 * Blog preview section for the home page
 */
export function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="py-16 sm:py-24 bg-primary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-with-shadow">
            Blogumuzdan
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            Kahve dünyasından görüşler, ipuçları ve hikayeler.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            // Process Google Drive URL for blog image
            const processedImage = convertGoogleDriveUrl(post.image);
            
            return (
              <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0 relative">
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={processedImage}
                      alt={post.title}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 card-text-overlay">
                    <p className="text-sm font-medium text-secondary">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={`/blog/${post.slug}`} className="mt-2 block">
                      <h3 className="text-xl font-semibold text-primary hover:text-accent transition-colors">{post.title}</h3>
                      <p className="mt-3 text-base text-neutral">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      Devamını oku →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline">
            Tüm Yazıları Görüntüle
          </Button>
        </div>
      </Container>
    </section>
  );
}
