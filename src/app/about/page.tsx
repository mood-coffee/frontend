import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Hakkımızda | Mood Coffee',
  description: 'Hikayemizi, misyonumuzu ve olağanüstü kahveye olan tutkumuzu öğrenin.',
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Mood Coffee Hakkında
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              Üçüncü nesil kahve kültürünü herkesle buluşturan sıcak bir topluluk.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-natural">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Hikayemiz</h2>
            <p className="mt-6 text-lg text-neutral">
              Mood Coffee, 2022 yılında üçüncü nesil kahve kültürünü herkesle buluşturmak amacıyla kuruldu. 
              Kurulduğumuz günden bu yana sadece kaliteli kahve sunmayı değil, aynı zamanda insanların 
              kendini güvende ve mutlu hissedeceği bir ortam oluşturmayı misyon edindik.
            </p>
            <p className="mt-4 text-lg text-neutral">
              Kahve bizim için yalnızca bir içecek değil; insanları bir araya getiren, sohbeti başlatan, 
              dostlukları güçlendiren bir deneyim. Bu anlayışla, müşterilerimizi sadece misafir değil, 
              aynı zamanda Mood Coffee ailesinin bir parçası olarak görüyoruz.
            </p>
            <p className="mt-4 text-lg text-neutral">
              2025 itibariyle, kahve tutkumuzu bir adım daha ileri taşıyarak kendi kahvemizi kavurmaya başlıyoruz. 
              Artık kahvelerimizi kendi kavurduğumuz özel tat profilleriyle sunacak, fincandan önceki her aşamada 
              da kaliteyi ve özeni sürdüreceğiz.
            </p>
          </div>
          <div className="bg-secondary h-96 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
            <Image
              src="/logo-black.png"
              alt="Mood Coffee Hikayemiz"
              width={400}
              height={300}
              className="object-contain max-w-full max-h-full p-8"
            />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-secondary h-96 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
            <Image
              src="/logo-black.png"
              alt="Mood Coffee Değerlerimiz"
              width={400}
              height={300}
              className="object-contain max-w-full max-h-full p-8"
            />
          </div>
          <div className="order-1 lg:order-2 bg-white p-6 rounded-lg shadow-sm border border-natural">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Değerlerimiz</h2>
            <div className="mt-6 space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Dayanışma</h3>
                  <p className="mt-2 text-neutral">
                    Müşterilerimizi ailemizin bir parçası olarak görüyor, birlikte güçlü bir topluluk oluşturmaya inanıyoruz.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Sevgi</h3>
                  <p className="mt-2 text-neutral">
                    Yaptığımız her işe sevgi katıyor, müşterilerimize samimi ve içten bir hizmet sunuyoruz.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">Samimiyet</h3>
                  <p className="mt-2 text-neutral">
                    İnsanların kendilerini güvende ve mutlu hissettikleri samimi bir ortam oluşturuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
