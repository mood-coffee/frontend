export const metadata = {
  title: 'Products | Mood Coffee',
  description: 'Explore our selection of premium coffee beans from around the world.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
