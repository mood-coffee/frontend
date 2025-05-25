import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Gizlilik Politikası - KVKK Aydınlatma Metni | Mood Coffee',
  description: 'Mood Coffee KVKK aydınlatma metni ve kişisel verilerin korunması politikası.',
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Gizlilik Politikası
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              KVKK Aydınlatma Metni ve Kişisel Verilerin Korunması
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-natural">
            <h2 className="text-2xl font-bold text-primary mb-6">
              KİŞİSEL VERİLERİN KORUNMASI KANUNU (KVKK) AYDINLATMA METNİ
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral">
              <p className="text-base leading-7 mb-6">
                Mood Coffee olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, 
                kişisel verilerinizin gizliliğini ve güvenliğini önemsiyoruz. Bu kapsamda, internet sitemizi 
                kullandığınızda tarafımıza ilettiğiniz kişisel verilerin hangi amaçlarla işlendiğini, nasıl 
                korunduğunu ve haklarınızı aşağıda bilgilerinize sunarız.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">1. Toplanan Kişisel Veriler</h3>
              <p className="mb-4">
                Sitemizi ziyaret ettiğinizde veya interaktif hizmetlerimizi kullandığınızda aşağıdaki kişisel 
                verileriniz toplanabilir:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Üyelik:</strong> Ad, soyad, e-posta adresi, kullanıcı adı, şifre.</li>
                <li><strong>Sipariş:</strong> Ad, soyad, telefon numarası, teslimat ve fatura adresi, ödeme bilgileri.</li>
                <li><strong>Yorumlar:</strong> Adınız, e-posta adresiniz ve yorum içeriğiniz.</li>
                <li><strong>Çerezler:</strong> IP adresi, tarayıcı ve cihaz bilgileri, oturum geçmişi, site kullanım tercihleri gibi teknik veriler.</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">2. Verilerin İşlenme Amaçları</h3>
              <p className="mb-4">Toplanan kişisel verileriniz şu amaçlarla işlenmektedir:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Sipariş ve üyelik işlemlerinin gerçekleştirilmesi,</li>
                <li>Teslimat ve ödeme süreçlerinin yürütülmesi,</li>
                <li>Müşteri destek hizmetlerinin sağlanması,</li>
                <li>Ürün ve hizmetlerimizle ilgili bilgi paylaşımı yapılması,</li>
                <li>Kullanıcı yorumlarının yayınlanması ve moderasyonu,</li>
                <li>Kullanıcı deneyimini geliştirmek amacıyla analiz yapılması,</li>
                <li>Kampanya, bülten ve promosyon duyurularının iletilmesi (onay vermeniz halinde).</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">3. Çerez (Cookie) Kullanımı</h3>
              <p className="mb-4">
                Web sitemizde kullanıcı deneyimini geliştirmek ve hizmetlerimizi daha iyi sunabilmek amacıyla 
                çerezler kullanılmaktadır.
              </p>
              <p className="mb-4">Kullandığımız çerez türleri:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Zorunlu Çerezler:</strong> Temel site işlevlerinin çalışmasını sağlar.</li>
                <li><strong>İşlevsel Çerezler:</strong> Site tercihlerinizi hatırlar.</li>
                <li><strong>Performans ve Analiz Çerezleri:</strong> Ziyaret ve trafik kaynaklarını analiz eder.</li>
                <li><strong>Reklam/Pazarlama Çerezleri:</strong> İlgi alanlarınıza göre içerik ve reklam sunulmasını sağlar.</li>
              </ul>
              <p className="mb-6">
                Çerezleri tarayıcı ayarlarınız üzerinden kontrol edebilir veya devre dışı bırakabilirsiniz. 
                Ancak bu durumda sitenin bazı bölümleri düzgün çalışmayabilir.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">4. Verilerin Aktarılması</h3>
              <p className="mb-6">
                Kişisel verileriniz; hizmet sağlayıcılarımız, ödeme altyapısı ortaklarımız ve yasal 
                yükümlülükler kapsamında yetkili kamu kurumları ile, sadece gerekli olduğu ölçüde paylaşılmaktadır.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">5. Verilerin Saklama Süresi</h3>
              <p className="mb-6">
                Kişisel verileriniz, ilgili mevzuatta öngörülen veya işleme amacına uygun olan süre boyunca saklanır. 
                Süre sonunda veriler güvenli bir şekilde silinir, yok edilir veya anonim hale getirilir.
              </p>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">6. KVKK Kapsamındaki Haklarınız</h3>
              <p className="mb-4">KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Verilerin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                <li>KVKK&apos;da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
                <li>Bu işlemlerin üçüncü kişilere bildirilmesini isteme,</li>
                <li>İşlenen verilerin yalnızca otomatik sistemler ile analiz edilmesi sonucunda aleyhe bir sonucun ortaya çıkmasına itiraz etme,</li>
                <li>Kanuna aykırı veri işlenmesi nedeniyle zarara uğramanız halinde tazminat talep etme</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mt-8 mb-4">7. İletişim</h3>
              <p className="mb-4">KVKK kapsamındaki haklarınızı kullanmak ve taleplerinizi iletmek için bizimle iletişime geçebilirsiniz:</p>
              <div className="bg-secondary p-4 rounded-lg mb-6">
                <p className="mb-2"><strong>📧 E-posta:</strong> info@moodcoffee.tr</p>
                <p><strong>📍 Adres:</strong> Feyzullah Mahallesi Serap Caddesi No:9/B Maltepe İstanbul</p>
              </div>

              <div className="border-t border-natural pt-6 mt-8">
                <p className="text-sm text-gray-600">
                  Bu aydınlatma metni en son 18 Ocak 2025 tarihinde güncellenmiştir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
} 