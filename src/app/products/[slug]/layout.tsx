export const metadata = {
  title: 'Product Details | Mood Coffee',
  description: 'Detailed information about our premium coffee products.',
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
