import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { fetchPostBySlug, fetchPosts } from '@/lib/api';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

// Doğrudan blog yazısını getirip metadata'yı oluşturan fonksiyon
export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Mood Coffee',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Mood Coffee Blog`,
    description: post.excerpt,
  };
}

// Statik sayfaları oluşturan fonksiyon
export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Ana sayfa bileşeni
export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="py-16 max-w-4xl">
      <article>
        <div className="mb-8">
          {/* Placeholder for post image - in a real project, you would use a real image */}
          <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            Blog Image Placeholder
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>{post.content}</p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Container>
  );
}
