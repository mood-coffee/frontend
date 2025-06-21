import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Mesafeli Satış Sözleşmesi | Mood Coffee Roastery',
  description: 'Mood Coffee Roastery mesafeli satış sözleşmesi ve şartları.',
};

export default function MesafeliSatisSozlesmesiPage() {
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-primary">
          MOOD COFFEE ROASTERY MESAFELİ SATIŞ SÖZLEŞMESİ
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 1: TARAFLAR VE ÜRÜN/HİZMET(LER)</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary">1.1 SATICI:</h3>
            <p><strong>Ünvanı:</strong> Moodcoffee Gıda Üretim ve Danışmanlık Limited Şirketi</p>
            <p><strong>Ticari Adı:</strong> Mood Coffee Roastery</p>
            <p><strong>Adres:</strong> Feyzullah Mahallesi Serap Caddesi No:9/B, Güneş Apartmanı, Maltepe, İstanbul</p>
            <p><strong>Telefon:</strong> 0541 594 58 34</p>
            <p><strong>E‑posta:</strong> info@moodcoffee.tr</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary">1.2 ALICI:</h3>
            <p>Teslim Edilecek Kişi</p>
            <p>Ad / Soyad / Unvan :</p>
            <p>T.C. Kimlik Numarası :</p>
            <p>Adres :</p>
            <p>Cep Telefonu :</p>
            <p>E‑posta :</p>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 2: ÜRÜN/HİZMET(LER) VE ÖZELLİKLERİ</h2>
          <p className="mb-6">
            ALICI, aşağıda işaretlemek suretiyle onayladığı, işbu sözleşme ve ön bilgilendirme formunda özellikleri belirtilen ürünleri satın almıştır. Satın alınan ve Ürün//Hizmetin türü, miktarı, marka, KDV dahil satış bedeli, ödeme şekli, alternatif ürün tercihi aşağıda belirtildiği gibidir.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 3: KONU</h2>
          <p className="mb-6">
            İşbu Sözleşme&apos;nin konusu; ALICI&apos;nın Mood Coffee Roastery web-sitesinden elektronik ortamda satın aldığı, işbu Sözleşme&apos;de ve ön bilgilendirme formunda bahsi geçen nitelikleri haiz, madde 2&apos;de belirtilen, ürünlerin/hizmetlerin satışı ve ifası ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.
          </p>
          <p className="mb-6">
            ALICI, satışa konu ürünlerin temel nitelikleri, satış fiyatı, ödeme şekli vs. satışa konu ürün ile ilgili tüm ön bilgiler konusunda bilgi sahibi olduğunu, bu ön bilgileri elektronik ortamda onayladığını ve sonrasında elektronik ortamda ürünü satın aldığını işbu Sözleşme hükümlerince kabul ve beyan eder. Ön bilgilendirme formu ve ALICI adına gönderilecek ürünlerin/hizmetlerin ücretlerini içerir fatura işbu Sözleşme&apos;nin ayrılmaz parçasıdır.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 4: SÖZLEŞME KONUSU ÜRÜNE/HİZMETE, BEDELİNE, ÖDEME VE TESLİMATA İLİŞKİN HÜKÜMLER</h2>
          
          <div className="mb-4">
            <p><strong>4.1.</strong> ALICI Sözleşme konusu ürün/hizmetler için, toplam sipariş tutarı üzerinden belirtilen bedelleri ödemekle yükümlüdür.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p>Ürünün Adı: […]</p>
            <p>Ürünün Markası: […]</p>
            <p>Ürünün Miktarı/Adedi: […]</p>
            <p>Ürünün Fiyatı: […]</p>
            <p>Ürünün Vergisi: […]</p>
            <p>Sipariş tarihi: […]</p>
            <p>Ödeme Şekli : Kredi Kartı</p>
            <p>Teslim Edilecek Kişi : […]</p>
            <p>Telefon numarası : […]</p>
            <p>Teslim Edilecek Adres : […]</p>
            <p>Fatura Edilecek Kişi/Kurum : […]</p>
            <p>Fatura Adresi : […]</p>
            <p>Vergi Dairesi : […]</p>
            <p>Vergi Sicil Numarası : […]</p>
            <p>Kargo Ücreti : […]</p>
          </div>

          <div className="space-y-4 mb-6">
            <p><strong>4.2.</strong> Sözleşme&apos;nin akdedilmesi için, işbu Sözleşme&apos;nin ALICI tarafından elektronik olarak onaylanması gerekmektedir.</p>
            
            <p><strong>4.3.</strong> Sözleşme konusu ürün/hizmetler, her bir sipariş için ALICI&apos;nın yerleşim yerinin uzaklığına ve ürün/hizmetin mevsimsel ve hava koşullarına bağlı olarak ürün/hizmet bedellerin ödenmesini müteakip en geç 10 gün içerisinde sipariş ALICI&apos;nın gösterdiği adresteki kişi/kuruluşa teslim/ifa edilir.</p>
            
            <p><strong>4.4.</strong> Sözleşme konusu ürün/hizmetin teslimatı için işbu Sözleşme&apos;nin elektronik ortamda onaylanarak SATICI&apos;ya ulaştırılmış olması ve bedelinin ALICI&apos;nın tercih ettiği ödeme şekli ile SATICI&apos;nın hesabına aktarılmış olması şarttır. Ürün bedeli SATICI&apos;nın hesabına aktarılmaz veya banka kayıtlarında iptal edilir ise SATICI ürün teslimi yükümlülüğünden kurtulmuş kabul edilir.</p>
            
            <p><strong>4.5.</strong> ALICI, Sözleşme konusu ürün/hizmetin temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin tüm bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul ve beyan eder.</p>
            
            <p><strong>4.6.</strong> Sözleşme konusu ürün/hizmet, ALICI&apos;dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun teslimatı kabul etmemesinden SATICI sorumlu tutulamaz. Bu durumda tüm sorumluluk ALICI&apos;ya aittir.</p>
            
            <p><strong>4.7.</strong> Ürün/hizmet teslimi sırasında istenildiği takdirde geçerli bir kimlik kartı göstermek, ilgili kimlik bilgilerinin kaydedilmesine izin vermek ve ilgili yerlere imza atmak zorunda olduğunu; aksi takdirde ürün/hizmetin teslim edilmeyeceğini,</p>
            
            <p><strong>4.8.</strong> SATICI, Sözleşme konusu ürün/hizmetin sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</p>
            
            <p><strong>4.9.</strong> Kargo firmasının, ürünü ALICI&apos;ya teslimi aşamasında karşılaşacağı her türlü sorun nedeniyle, siparişi verilen ürünün ALICI&apos;ya teslim edilememesinden dolayı SATICI sorumlu tutulamaz.</p>
            
            <p><strong>4.10.</strong> SATICI, haklı bir sebebe dayanmak şartıyla, sipariş konusu ürün/hizmetin yerine getirilmesinin imkânsızlaşması ve/veya Sözleşme&apos;den doğan ifa yükümlülüğünün süresi dolmadan SATICI ALICI&apos;ya durumu bildirerek, sorumluluğundan kurtulacaktır. Böyle bir durumda ALICI tarafından ödeme yapılmış ise; ALICI&apos;ya ödeme iadesi yapılacaktır.</p>
            
            <p><strong>4.11.</strong> Ürünün tesliminden sonra ALICI&apos;ya ait kredi kartının ALICI&apos;nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeniyle ilgili banka veya finans kuruluşun ürün bedelini SATICI&apos;ya ödememesi halinde, ALICI&apos;nın kendisine teslim edilmiş olması kaydıyla ürünün 3 gün içinde SATICI&apos;ya gönderilmesi zorunludur. Bu takdirde nakliye giderleri ALICI&apos;ya aittir. Ürün/hizmetin ALICI tarafından kullanılması veya başka bir gerekçe ile iadesinin mümkün olmaması halinde yine aynı süre içerisinde ALICI tarafından SATICI&apos;ya ürün/hizmet bedeli ödenecektir.</p>
            
            <p><strong>4.12.</strong> SATICI mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeniyle sözleşme konusu ürünü/hizmeti süresi içinde teslim edemez ise, durumu ALICI&apos;ya bildirmekle yükümlüdür. Bu takdirde ALICI siparişin iptal edilmesini, sözleşme konusu ürünün varsa emsali ile değiştirilmesini ve/veya teslimat süresinin engelleyici durumun ortadan kalkmasına kadar ertelenmesini talep etme seçeneklerinden birini kullanabilir. ALICI&apos;nın siparişi iptal etmesi halinde, ödediği tutar 10 gün içinde kendisine nakden ve defaten ödenir.</p>
            
            <p><strong>4.13.</strong> Sözleşme konusu ürün/hizmetin stokta bulunmadığı ve/veya mevsim ve hava şartları değişikliği nedeniyle ürün/hizmetin yetişmemesi, bozulması hallerinde SATICI&apos;nın ALICI&apos;yı durumdan haberdar etmesi ve ALICI&apos;nın ödemiş olduğu toplam bedelin en geç 10 gün içinde ALICI&apos;ya iade edilmesi şartıyla SATICI&apos;nın sözleşme konusu ürün/hizmeti teslim etmeme hakkı bulunmaktadır.</p>
            
            <p><strong>4.14.</strong> 18 yaşından küçük kişiler Mood Coffee Roastery internet sitesinden, çocuklara yönelik ürün/hizmetlerin satışa sunulması durumunda dahi alışveriş yapamaz.</p>
            
            <p><strong>4.15.</strong> Ürün/hizmetlerin fiyatları, katma değer vergisi ilave edilmiş Türk Lirası cinsinden sitede yer almaktadır. ALICI Mood Coffee Roastery internet sitesinden kredi kartı, havale veya EFT ile alışveriş yapabilir. Kredi kartı ile verilen siparişler, karttan meblağın blokesinin yapıldığı veya havale/EFT bedelinin Mood Coffee Roastery hesabına geçtiği anda işleme alınır. Havale veya EFT ile ödeme yapılması halinde, SATICI hesabına iki gün içinde ALICI ödemesinin geçmemesi durumunda siparişler iptal edilir.</p>
            
            <p><strong>4.16.</strong> ALICI, sözleşme konusu ürün/hizmeti teslim almadan önce muayene edecek; ezik, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı ürün/hizmeti kargo şirketinden teslim almayacaktır. Teslim alınan ürün/hizmetin hasarsız ve sağlam olduğu kabul edilecektir. Teslimden sonra ürün/hizmetin özenle korunması borcu, ALICI&apos;ya aittir.</p>
            
            <p><strong>4.17.</strong> Kargo ücreti ürün bedeline dahil değildir. Kargo bedeli, ALICI&apos;ya ait olup, ürün/hizmet meblağına göre belirlenecektir. Ancak her bir sipariş bedelinin 1.000 TL&apos;yi aşması halinde kargo ücreti ALICI&apos;ya ait olmayacak, Mood Coffee Roastery tarafından karşılanacaktır.</p>
            
            <p><strong>4.18.</strong> Bankaların ödemeler esnasında havale masrafı veya sair isimler altında yapacakları kesintilerden Mood Coffee Roastery sorumlu değildir. Bu çerçevede ALICI vadeli alımlarda faiz oranı, havale masrafı, temerrüt faizi hükümleri gibi bilgileri Bankası ile teyit edeceğini ve söz konusu hükümlerin Bankası ile arasındaki sözleşme esaslarına göre belirleneceğini kabul eder.</p>
            
            <p><strong>4.19.</strong> Kredi kartına iade talebi bulunması halinde, ALICI&apos;ya nakit iadesi yapılması mümkün değildir. Mood Coffee Roastery yükümlülüğü, kart ile alışveriş yapılan tutarı bankaya ödemekten ibarettir. Kredi kartı iadeleri, Bankaların mevcut iade prosedürleri çerçevesinde ve Mood Coffee Roastery&apos;ın Bankalar ile yapmış olduğu sözleşmeler dâhilinde yapılmaktadır. Bu çerçevede taksitli alışveriş iadelerinde ALICI şimdiden, ürünü kaç taksit ile aldı ise Bankanın kendisine ödemeyi de taksitle yapabileceğini bildiğini ve buna muvafakati olduğunu kabul etmektedir. Mood Coffee Roastery&apos;nın bankaya tek seferde iade talimatı vermesi durumunda dahi, kredi kartlarına iadeyi her ay karta bir taksit iadesi şeklinde Banka tarafından aktarılabilmektedir. ALICI işbu maddeyi okumuş ve kabul etmiş olduğunu taahhüt eder.</p>
            
            <p><strong>4.20.</strong> Bu hizmet yalnızca perakende satışa ve nihai kullanımına yöneliktir. Toptan ve/veya yeniden satış amaçlı siparişler için ön bilgi formu ve/veya satış sözleşmesi oluşmuş olsa dahi Mood Coffee Roastery siparişi iptal ederek teslim etmeme hakkına sahiptir. Toptan satış ve/veya yeniden satışlar için Mood Coffee Roastery ile ayrıca info@moodcoffee.tr adresi veya web sitesinde belirtilen telefon numarası üzerinden iletişime geçilebilir.</p>
            
            <p><strong>4.21.</strong> Hizmete ilişkin hususlarda değişiklik olması durumunda SATICI tarafından Site&apos;de ifa edilecektir. Site&apos;de yer alan Ön Bilgilendirme Formu ve satışa ilişkin fatura işbu Sözleşmenin ayrılmaz parçalarıdır.</p>
            
            <p><strong>4.22.</strong> Ürün/hizmet alımının eksiksiz olarak gerçekleşmesi halinde söz konusu ürün ve hizmete ait e-fatura ya da e-arşiv faturası üyenin Sözleşme&apos;de belirtilen adresine gönderilecektir.</p>
            
            <p><strong>4.23.</strong> Sistem hatalarından dolayı ve/veya kötü niyetli kişilerin müdahalelerinden dolayı meydana gelen fiyat, tanım vb. yanlışlıklarından SATICI sorumlu değildir. Sistem hatalarına dayalı olarak ALICI, SATICI&apos;dan hak iddiasında bulunamaz. SATICI, Site&apos;nin hatasız ve kesintisiz çalışacağını garanti etmez. Site&apos;nin kullanılmasından dolayı ALICI&apos;nın donanım veya verilerinin bakım/onarım görmesi ya da değiştirilmesi gerektiği ya da bu konuda herhangi bir zarar oluştuğu takdirde ilgili harcamalardan SATICI sorumlu tutulamaz.</p>
            
            <p><strong>4.24.</strong> İşbu Sözleşme, ALICI tarafından elektronik ortamda onaylanıp SATICI&apos;ya ulaşmasından sonra geçerlilik kazanır.</p>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 5: CAYMA HAKKI</h2>
          <p className="mb-6">
            ALICI; mal satışına ilişkin mesafeli sözleşmelerde, ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren 14 (ondört) gün içerisinde hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkına sahiptir. ALICI, işbu Sözleşme&apos;nin 4.1. maddesinde ve Ön Bilgilendirme Formu&apos;nda belirtilen, ürünün teslim masraflarını geçmemek üzere iade masrafını karşılamakla yükümlüdür. Cayma hakkının kullanılması için 14 günlük süre içinde SATICI&apos; nın yukarıda bildirilen adresine iadeli taahhütlü posta, faks, telefon veya eposta ile bildirimde bulunulması ve ürünün/ürünlerin ALICI&apos;ya ulaştığı şekilde hasarsız olması gerekmektedir. Cayma hakkının kullanılması halinde, ALICI&apos;ya teslim edilen ürün/ürünlerin SATICI&apos;ya gönderildiğine ilişkin kargo teslim tutanağı örneği ile fatura aslının SATICI&apos; ya iadesi zorunludur. Bu belgelerin ulaşmasını takip eden 10 gün içinde ürün/ürünlerin bedeli ALICI&apos;ya iade edilir. Cayma hakkının 14 gün içinde kullanılması halinde ürün/ürünler SATICI&apos;ya, ALICI tarafından kargo ile iade edilir ve bu durumda kargo ücreti ALICI&apos;ya aittir. Ancak, ALICI&apos;ya teslim edilen ürünün ilgili mevzuat kapsamında ayıplı olması durumunda ALICI iadeye ilişkin masraflardan sorumlu tutulmayacak, iade masrafları SATICI tarafından karşılanacaktır.
          </p>
          
          <p className="mb-4">Bu hakkın kullanılması halinde;</p>
          <ul className="list-disc pl-6 mb-6">
            <li>3. kişiye veya ALICI&apos;ya teslim edilen ürünün faturası,</li>
            <li>İade formu,</li>
            <li>İade edilecek ürünlerin kutusu, ambalajı, varsa standart aksesuarları ile birlikte eksiksiz ve hasarsız olarak teslim edilmesi gerekmektedir.</li>
            <li>SATICI, cayma bildiriminin kendisine ulaşmasında itibaren en geç 10 günlük süre içerisinde toplam bedeli ve alıcıyı borç altına sokan belgeleri ALICI&apos;ya iade etmekle yükümlüdür.</li>
            <li>ALICI&apos;nın kusurundan kaynaklanan bir nedenle malın değerinde bir azalma olursa veya iade imkânsızlaşırsa ALICI kusuru oranında SATICI&apos; nın zararlarını tazmin etmekle yükümlüdür.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 6: CAYMA HAKKININ KULLANILMASI</h2>
          <div className="space-y-4 mb-6">
            <p><strong>6.1.</strong> ALICI, www.moodcoffee.tr internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri ve mesafeli satış sözleşmesini okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder. ALICI; bu Ön Bilgilendirmeyi ve Mesafeli Satış Sözleşmesini elektronik ortamda teyit etmekle, SATICI tarafından ALICI&apos;ya verilmesi gereken adres, siparişi verilen ürünlere ait temel özellikler, ürünlerin vergiler dâhil fiyatı, ödeme ve teslimat bilgilerini de doğru ve eksiksiz olarak edindiğini teyit etmiş olur.</p>
            
            <p><strong>6.2.</strong> Mesafeli sözleşmelerde tüketici, 14 (ondört) gün içerisinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir. Cayma hakkının kullanıldığına dair bildirimin bu süre içinde yazılı olarak veya bir sürekli veri taşıyıcısıyla bildirilmesi yeterlidir. Cayma hakkı süresi, malın teslimine ilişkin sözleşmelerde, tüketicinin malı teslim aldığı günden itibaren, diğer sözleşmelerde ise sözleşmenin akdedildiği günden itibaren işlemeye başlar.</p>
            
            <p><strong>6.3.</strong> Ürünün teslimatı için işbu Ön Bilgilendirme Formunun elektronik ortamda teyid edilmesi şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilir ise, SATICI ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</p>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 7: CAYMA HAKKININ KULLANILAMAYACAĞI HALLER</h2>
          <p className="mb-4">Taraflarca aksi kararlaştırılmadıkça tüketici, aşağıdaki sözleşmelerde cayma hakkını kullanamaz.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>27.11.2014 tarih 29188 sayılı Resmi Gazetede yayınlanarak yürürlüğe giren &quot;Mesafeli Sözleşmeler Yönetmeliği&quot;nin 2. Maddesinin 2/ğ nolu bendi gereği &quot;Yiyecek ve içecekler gibi günlük tüketim maddelerinin, satıcının düzenli teslimatları çerçevesinde tüketicinin meskenine veya işyerine götürülmesine ilişkin Mesafeli Sözleşmelerde cayma hakkı bulunmamaktadır.&quot;</li>
            <li>27.11.2014 tarih ve 29188 sayılı Resmi Gazetede yayınlanarak yürürlüğe giren Mesafeli Sözleşmeler Yönetmelik&apos;in 15. Maddesinde sayılan sözleşmeler/mal ve hizmetlerde cayma hakkı kullanılamaz.</li>
            <li>ALICI tarafından teslim alınmış olan malın değerinin azalması veya iadeyi imkânsız kılan bir nedenin varlığı cayma hakkının kullanılmasına engel değildir. Ancak SİPARİŞ VEREN/ALICI kendi kusurundan kaynaklanan, malın değerindeki azalmayı SATICI&apos;ya tazmin etmeyi kabul ve beyan eder</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 8: TEMERRÜT HALİ</h2>
          <p className="mb-6">
            ALICI&apos;nın temerrüde düşmesi halinde, ALICI, borcun gecikmeli ifasından dolayı SATICI&apos; nın oluşan zarar ve ziyanını ödemeyi kabul eder. ALICI&apos;nın temerrüdünün SATICI&apos; nın kusurundan kaynaklandığı hallerde ALICI herhangi bir zarar ve ziyan talebini karşılamak mecburiyetinde olmayacaktır.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 9: SÖZLEŞMENİN SONA ERMESİ, FESHİ VE İADE</h2>
          <p className="mb-4">
            SATICI, ALICI&apos;nın iş bu Sözleşme&apos;den doğan yükümlülüklerini işbu Sözleşme, ön bilgilendirme formu ve Mood Coffee Roastery Web Üyelik Sözleşmesinde belirtilen şekilde yerine getirmediği takdirde süre vermeksizin Sözleşmeyi feshedebilir. Ayrıca SATICI, iş modellerindeki değişikliklere bağlı olarak ve tamamen tek taraflı kararı ile işbu Sözleşme konusu ürün/hizmeti sunmaktan vazgeçebilir ve hizmet sunumunu sona erdirebilir.
          </p>
          <p className="mb-4">
            Bununla birlikte SATICI, ALICI&apos;nın siparişinin kendisine ulaştığı tarihten itibaren taahhüt ettiği süre içinde edimini yerine getirmek zorundadır. Mal satışlarında bu süre her halükarda otuz günü geçemez. Bu halde ALICI Sözleşme&apos;yi feshedebilir.
          </p>
          <p className="mb-4">
            Sözleşme&apos;nin sona ermesi ve feshi durumunda iade, SATICI, varsa teslimat masrafları da dâhil olmak üzere tahsil edilen tüm ödemeleri fesih bildiriminin kendisine ulaştığı tarihten itibaren on dört gün içinde ALICI&apos;ya 4/12/1984 tarihli ve 3095 sayılı Kanuni Faiz ve Temerrüt Faizine İlişkin Kanunun 1 inci maddesine göre belirlenen kanuni faiziyle birlikte geri ödemek ve varsa tüketiciyi borç altına sokan tüm kıymetli evrak ve benzeri belgeleri iade etmek zorundadır.
          </p>
          <p className="mb-6">
            Sipariş konusu mal ya da hizmet ediminin yerine getirilmesinin imkansızlaştığı hallerde SATICI bu durumu öğrendiği tarihten itibaren üç gün içinde ALICI&apos;ya yazılı olarak veya kalıcı veri saklayıcısı ile bildirmesi ve varsa teslimat masrafları da dâhil olmak üzere tahsil edilen tüm ödemeleri bildirim tarihinden itibaren en geç on dört gün içinde iade etmesi zorunludur. Malın stokta bulunmaması durumu, mal ediminin yerine getirilmesinin imkânsızlaşması olarak kabul edilmez.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-primary">MADDE 10: ŞİKAYETLERİN ÇÖZÜMLENMESİ VE YETKİLİ MAHKEME</h2>
          <p className="mb-4">
            Tüketici şikayet ve itirazlar SATICI&apos;nın info@moodcoffee.tr adresine elektronik ortamdan yapılabilir veya 0541 594 58 34 telefon numarası aranmak suretiyle iletilebilir.
          </p>
          <p className="mb-4">
            Bunun yanı sıra tüketici şikâyet ve itirazları konusunda başvurular, Bakanlıkça her yıl Aralık ayında belirlenen parasal sınırlar dâhilinde tüketicinin mal veya hizmeti satın aldığı veya ikametgâhının bulunduğu yerdeki tüketici sorunları hakem heyetine veya tüketici mahkemesine yapılabilmektedir.
          </p>
          <p className="mb-4">
            Sözleşmenin bir örneği ALICI tarafından belirtilen işbu Sözleşme&apos;nin madde 1.2&apos;sinde yer alan e-posta adresine ALICI tarafından muhafaza edilmek üzere otomotik olarak gönderilmiştir.
          </p>
          <p className="mb-6">
            Siparişin işbu Sözleşme&apos;yi onaylamak suretiyle satınalma işleminin gerçekleşmesi ile birlikte ALICI işbu Sözleşmenin tüm koşullarını kabul etmiş sayılır.
          </p>
        </div>
      </div>
    </Container>
  );
} 