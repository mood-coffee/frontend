import { Container } from '@/components/ui/Container';
import { WholesaleForm } from '@/components/wholesale/WholesaleForm';

export const metadata = {
  title: 'Toptan Kahve | Mood Coffee',
  description: 'İşletmeniz için toptan kahve çözümlerimiz. Kafeniz, restoranınız veya ofisiniz için en kaliteli kahve çekirdekleri.',
};

export default function WholesalePage() {
  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Toptan Kahve
            </h1>
            <div className="mt-8 text-lg leading-8 text-neutral space-y-4">
              <p>
                Bizce kahve yalnızca bir içecek değil, unutulmaz bir deneyimdir.
              </p>
              <p>
                Kafeniz, restoranınız, ofisiniz veya kahve tutkusunu paylaştığınız herhangi bir mekân işletiyor olun, Mood Roastery olarak yanınızdayız. İhtiyacınıza özel toptan kahve çözümlerimizle, sizi desteklemeye hazırız.
              </p>
              <p>
                En yüksek kalitedeki çekirdekleri özenle seçiyor, kavurma sürecimizi titizlikle yönetiyoruz. Sonuçta her fincanınız; özen, lezzet ve kalite bakımından fark yaratıyor.
              </p>
              <p className="font-semibold text-accent">
                Haydi, birlikte kahve deneyiminizi bir adım öteye taşıyalım!
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Toptan Kahve Başvuru Formu</h2>
            <p className="text-lg text-neutral">
              Formu doldurarak bize ulaşın, size en uygun çözümü sunalım.
            </p>
          </div>
          <WholesaleForm />
        </div>
      </Container>
    </>
  );
} 