'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled error:', error);
  }, [error]);

  return (
    <Container className="py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">500</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">Something went wrong</h2>
      <p className="text-gray-600 mb-12 max-w-md mx-auto">
        We apologize for the inconvenience. Our team has been notified of this issue.
      </p>
      <div className="flex justify-center gap-4">
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
        <Button href="/" variant="outline" size="lg">
          Return Home
        </Button>
      </div>
    </Container>
  );
} 