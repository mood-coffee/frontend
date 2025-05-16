import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { fetchPosts } from '@/lib/api';

export const metadata = {
  title: 'Blog | Mood Coffee',
  description: 'Insights, tips, and stories from the world of coffee.',
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <>
      <div className="bg-primary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-with-shadow">
              Our Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary">
              Insights, tips, and stories from the world of coffee.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm border border-natural">
              <div className="md:w-1/3">
                {/* Placeholder for post image - in a real project, you would use a real image */}
                <div className="w-full h-48 bg-secondary rounded-lg flex items-center justify-center text-neutral overflow-hidden shadow-sm">
                  <div className="text-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-accent mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <p className="text-primary font-medium text-sm">Blog Image Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 text-sm text-neutral">
                  <time dateTime={post.publishedAt} className="text-accent font-medium">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
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
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
