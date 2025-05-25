import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Kullanım Şartları | Mood Coffee',
  description: 'Mood Coffee web sitesi kullanım şartları ve koşulları.',
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Kullanım Şartları
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              Web sitemizi kullanım şartları ve koşulları
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-natural">
            <div className="prose prose-lg max-w-none text-neutral">
              
              <h2 className="text-2xl font-bold text-primary mb-6">Kullanım Şartları</h2>
              
              <p className="text-base leading-7 mb-6">
                Bu web sitesini kullanmadan önce lütfen aşağıdaki kullanım şartlarını dikkatle okuyun. 
                Bu web sitesini kullanarak, bu şartları kabul etmiş sayılırsınız.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">1. Genel Hükümler</h3>
              <p className="mb-6">
                Bu web sitesi Mood Coffee tarafından işletilmektedir. Sitemizi kullanarak aşağıdaki 
                şart ve koşulları kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız lütfen sitemizi 
                kullanmayınız.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">2. Fikri Mülkiyet Hakları</h3>
              <p className="mb-6">
                Bu web sitesinde yer alan tüm içerik, tasarım, logo, metin, görsel ve diğer materyaller 
                Mood Coffee'nin fikri mülkiyetidir ve telif hakkı yasaları ile korunmaktadır. İzin 
                alınmadan kopyalanamaz, çoğaltılamaz veya dağıtılamaz.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">3. Kullanıcı Sorumlulukları</h3>
              <p className="mb-4">Web sitemizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Yasalara aykırı faaliyetlerde bulunmamak</li>
                <li>Diğer kullanıcıların haklarını ihlal etmemek</li>
                <li>Sahte bilgiler vermemek</li>
                <li>Sisteme zarar verecek faaliyetlerde bulunmamak</li>
                <li>Spam veya zararlı içerik paylaşmamak</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">4. Sipariş ve Ödeme</h3>
              <p className="mb-6">
                Sipariş verdiğinizde, ürünün fiyatı, teslimat koşulları ve ödeme şartlarını kabul etmiş 
                olursunuz. Fiyatlar KDV dahildir ve önceden haber verilmeksizin değiştirilebilir. 
                Ödeme işlemleri güvenli ödeme sistemleri üzerinden gerçekleştirilir.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">5. Teslimat</h3>
              <p className="mb-6">
                Ürünler belirtilen teslimat süresi içerisinde adresinize teslim edilir. Teslimat süreleri 
                tahmini olup, gecikmelerden dolayı sorumluluk kabul edilmez. Teslimat adresi eksik veya 
                hatalı olması durumunda ek masraflar müşteriye aittir.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">6. İade ve Değişim</h3>
              <p className="mb-6">
                Kahve ürünleri gıda mahiyetinde olduğundan, ambalaj açılmamış ve bozulmamış ürünler 
                14 gün içerisinde iade edilebilir. İade koşulları Tüketici Hakları Yönetmeliği 
                çerçevesinde belirlenir.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">7. Sorumluluk Sınırlaması</h3>
              <p className="mb-6">
                Mood Coffee, web sitesinin kesintisiz çalışacağını garanti etmez. Teknik arızalar, 
                kesintiler veya bunlardan kaynaklanan zararlardan sorumlu değildir. Kullanıcılar 
                siteyi kendi riskleri dahilinde kullanır.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">8. Değişiklikler</h3>
              <p className="mb-6">
                Mood Coffee bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar. 
                Değişiklikler web sitesinde yayınlandığı tarihten itibaren geçerli olur.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">9. Uyuşmazlıkların Çözümü</h3>
              <p className="mb-6">
                Bu kullanım şartlarından doğacak uyuşmazlıklarda Türkiye Cumhuriyeti yasaları geçerli olup, 
                İstanbul Mahkemeleri ve İcra Müdürlükleri yetkilidir.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">10. İletişim</h3>
              <p className="mb-4">Kullanım şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
              <div className="bg-secondary p-4 rounded-lg mb-6">
                <p className="mb-2"><strong>📧 E-posta:</strong> info@moodcoffee.tr</p>
                <p><strong>📍 Adres:</strong> Feyzullah Mahallesi Serap Caddesi No:9/B Maltepe İstanbul</p>
              </div>

              <div className="border-t border-natural pt-6 mt-8">
                <p className="text-sm text-gray-600">
                  Bu kullanım şartları en son 18 Ocak 2025 tarihinde güncellenmiştir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
} 