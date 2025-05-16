import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, merging Tailwind classes properly
 * 
 * @param inputs Class names to combine
 * @returns Combined class name string
 * 
 * @example
 * ```tsx
 * <div className={cn('text-red-500', isActive && 'bg-blue-500')}>
 *   Hello world
 * </div>
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
