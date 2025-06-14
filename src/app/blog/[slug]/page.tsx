import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { Container } from '@/components/ui/Container';
import { fetchPostBySlug, fetchPosts } from '@/lib/api';
import { convertGoogleDriveUrl } from '@/lib/utils/imageUtils';

// Blog içeriğini formatlamak için yardımcı fonksiyon
function formatBlogContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let currentList: React.ReactElement[] = [];
  let currentTable: React.ReactElement[] = [];
  let inTable = false;
  
  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 ml-4">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };
  
  const flushTable = () => {
    if (currentTable.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              {currentTable}
            </tbody>
          </table>
        </div>
      );
      currentTable = [];
      inTable = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Boş satırları atla
    if (!trimmedLine) {
      flushList();
      if (!inTable) {
        elements.push(<br key={`br-${index}`} />);
      }
      return;
    }
    
    // Ana başlıklar (##)
    if (trimmedLine.startsWith('## ')) {
      flushList();
      flushTable();
      elements.push(
        <h2 key={`h2-${index}`} className="text-2xl font-bold text-primary mt-8 mb-4">
          {trimmedLine.replace('## ', '')}
        </h2>
      );
      return;
    }
    
    // Alt başlıklar (###)
    if (trimmedLine.startsWith('### ')) {
      flushList();
      flushTable();
      elements.push(
        <h3 key={`h3-${index}`} className="text-xl font-semibold text-primary mt-6 mb-3">
          {trimmedLine.replace('### ', '')}
        </h3>
      );
      return;
    }
    
    // Kalın yazı (**text**)
    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
      flushList();
      flushTable();
      elements.push(
        <p key={`bold-${index}`} className="font-bold text-primary mb-2">
          {trimmedLine.replace(/\*\*/g, '')}
        </p>
      );
      return;
    }
    
    // Madde işaretleri (-)
    if (trimmedLine.startsWith('- ')) {
      flushTable();
      currentList.push(
        <li key={`li-${index}`} className="text-neutral">
          {trimmedLine.replace('- ', '')}
        </li>
      );
      return;
    }
    
    // Tablo satırları (|)
    if (trimmedLine.includes('|') && trimmedLine.startsWith('|')) {
      flushList();
      inTable = true;
      const cells = trimmedLine.split('|').filter(cell => cell.trim());
      currentTable.push(
        <tr key={`tr-${index}`}>
          {cells.map((cell, cellIndex) => (
            <td key={`td-${index}-${cellIndex}`} className="border border-gray-300 px-4 py-2 text-neutral">
              {cell.trim()}
            </td>
          ))}
        </tr>
      );
      return;
    }
    
    // Emoji ile başlayan özel paragraflar
    if (trimmedLine.startsWith('🔍')) {
      flushList();
      flushTable();
      elements.push(
        <div key={`highlight-${index}`} className="bg-secondary p-4 rounded-lg mt-6 mb-4">
          <p className="text-primary font-medium">{trimmedLine}</p>
        </div>
      );
      return;
    }
    
    // Normal paragraflar
    flushList();
    if (inTable) {
      flushTable();
    }
    
    // Parantez içindeki telaffuz bilgilerini özel stil ile göster
    if (trimmedLine.includes('(Okunuşu:')) {
      const parts = trimmedLine.split('(Okunuşu:');
      elements.push(
        <p key={`pronunciation-${index}`} className="mb-3 text-neutral leading-relaxed">
          <span className="font-medium">{parts[0].trim()}</span>
          {parts[1] && (
            <span className="text-accent text-sm ml-2">
              (Okunuşu: {parts[1].replace(')', '')}
            </span>
          )}
        </p>
      );
    } else {
      elements.push(
        <p key={`p-${index}`} className="mb-3 text-neutral leading-relaxed">
          {trimmedLine}
        </p>
      );
    }
  });
  
  // Son kalan liste veya tabloyu ekle
  flushList();
  flushTable();
  
  return elements;
}

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

  // Process Google Drive URL for blog image
  const processedImage = convertGoogleDriveUrl(post.image);

  return (
    <Container className="py-16 max-w-4xl">
      <article>
        <div className="mb-8">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={processedImage}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-neutral">
            <time dateTime={post.publishedAt} className="text-accent font-medium">
              {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span className="text-primary font-medium">{post.author}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-2">
            {formatBlogContent(post.content)}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-natural">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary border border-natural"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Container>
  );
}
