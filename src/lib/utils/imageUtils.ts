/**
 * Converts Google Drive share URL to direct image URL
 * @param url Google Drive share URL
 * @returns Direct image URL or original URL if not a Google Drive link
 */
export function convertGoogleDriveUrl(url: string): string {
  // Check if it's a Google Drive share URL
  const driveMatch = url.match(/https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/);
  
  if (driveMatch) {
    const fileId = driveMatch[1];
    // Try the direct thumbnail format first, fallback to uc format
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
  }
  
  // Return original URL if not a Google Drive link
  return url;
}

/**
 * Processes product images and converts Google Drive URLs
 * @param images Array of image URLs
 * @returns Array of processed image URLs
 */
export function processProductImages(images: string[]): string[] {
  return images.map(convertGoogleDriveUrl);
} 