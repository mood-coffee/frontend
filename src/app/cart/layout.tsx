export const metadata = {
  title: 'Shopping Cart | Mood Coffee',
  description: 'Review and manage your coffee selections in your shopping cart.',
}

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
