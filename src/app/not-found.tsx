import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">Sayfa Bulunamadı</h2>
      <p className="text-gray-600 mb-12 max-w-md mx-auto">
        Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
      </p>
      <Button href="/" size="lg">
        Ana Sayfaya Dön
      </Button>
    </Container>
  );
}
