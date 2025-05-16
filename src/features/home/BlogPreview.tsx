import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Post } from '@/types/post';

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
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            Insights, tips, and stories from the world of coffee.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0 relative">
                {/* Placeholder for post image - in a real project, you would use a real image */}
                <div className="h-48 w-full bg-secondary flex items-center justify-center text-neutral">
                  Blog Image Placeholder
                </div>
                <div className="absolute bottom-0 left-0 right-0 card-text-overlay">
                  <p className="text-sm font-medium text-secondary">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline">
            View All Posts
          </Button>
        </div>
      </Container>
    </section>
  );
}
