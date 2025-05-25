export const metadata = {
  title: 'Alışveriş Sepeti | Mood Coffee',
  description: 'Alışveriş sepetinizdeki kahve seçimlerinizi inceleyin ve yönetin.',
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
