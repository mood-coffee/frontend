import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

/**
 * Button component
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button href="/about" variant="outline">About Page</Button>
 * ```
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
      'bg-accent text-white hover:bg-accent/90': variant === 'primary',
      'bg-secondary text-neutral hover:bg-secondary/90': variant === 'secondary',
      'border border-accent bg-transparent text-accent hover:bg-accent/10': variant === 'outline',
      'bg-transparent text-accent hover:bg-accent/10': variant === 'ghost',
      'h-9 px-4 text-sm': size === 'sm',
      'h-10 px-6 text-base': size === 'md',
      'h-12 px-8 text-lg': size === 'lg',
    },
    className
  );

  if (href) {
    // Remove button-specific props that shouldn't be passed to Link
    const { ...linkProps } = props;

    return (
      <Link 
        href={href} 
        className={buttonClasses} 
        {...(linkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}
