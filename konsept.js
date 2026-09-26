/* Mehmet Yıldırım Digital — konsept e-ticaret şablonu */
(function(){
var IMG=function(id,w){return "https://images.unsplash.com/photo-"+id+"?w="+(w||700)+"&q=80&auto=format&fit=crop"};
var B={
kadin:{name:"Lune Atelier",sector:"Kadın Giyim",logo:"LUNE<em>atelier</em>",fonts:"Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600",disp:"'Cormorant Garamond',serif",body:"'Jost',sans-serif",
 c:{bg:"#F6F1EA",card:"#FFFFFF",ink:"#1C1A17",mut:"#7A6F66",line:"#E7DDD0",acc:"#A0673E",accInk:"#fff",bar:"#1C1A17",barInk:"#EADBC7"},hero:"split",
 bar:"Yeni sezon koleksiyonu yayında · 750 ₺ üzeri ücretsiz kargo",nav:["Yeni Gelenler","Elbise","Üst Giyim","Alt Giyim","Dış Giyim","İndirim"],
 eb:"Sonbahar / Kış 2026",h1:"Zamansız parçalar,<br><i>kendine ait</i> bir stil",sub:"Doğal kumaşlar ve sade kesimlerle, her gün giyebileceğin özenli bir gardırop.",cta:"Koleksiyonu Keşfet",cta2:"Yeni Gelenler",
 usp:["Ücretsiz kargo","14 gün kolay iade","Güvenli ödeme","Kapıda değişim"],cats:["Elbise","Bluz & Gömlek","Pantolon","Abiye"],
 hid:"1589734004980-8b9507b98604",
 p:[["1616313253719-c46514cddee1","Desenli Midi Elbise",1299,1599,"Yeni"],["1731911656286-92bf1ebc87f3","Gömlek Elbise",1149,0,""],["1657815929003-b97cc426cb3d","Geniş Paça Keten Pantolon",999,1299,"-%23"],["1612336307429-8a898d10e223","Drapeli Kırmızı Elbise",1499,0,"Çok satan"],["1568252542512-9fe8fe9c87bb","Tül Abiye Elbise",2299,2799,"-%18"],["1542295669297-4d352b042bca","Askılı Yazlık Elbise",899,0,""],["1496747611176-843222e1e57c","Çiçekli Şifon Elbise",1199,0,"Yeni"],["1631234764568-996fab371596","Beyaz Askılı Bluz",549,699,""]],
 promo:["Hafta sonuna özel","Tüm elbiselerde %20 indirim","LUNE20"]},
erkek:{name:"Norde Men",sector:"Erkek Giyim",logo:"NORDE<em>MEN</em>",fonts:"Archivo:wght@600;800;900&family=Inter:wght@400;500;600",disp:"'Archivo',sans-serif",body:"'Inter',sans-serif",
 c:{bg:"#F3F4F6",card:"#FFFFFF",ink:"#0F172A",mut:"#5B6576",line:"#E1E5EB",acc:"#1F3A5F",accInk:"#fff",bar:"#1F3A5F",barInk:"#fff"},hero:"full",
 bar:"Takım elbiselerde ücretsiz paça ve kol tadilatı",nav:["Yeni Sezon","Gömlek","Ceket & Blazer","Kaban","Ayakkabı","Outlet"],
 eb:"Yeni sezon",h1:"Şehrin ritmine<br>uygun şıklık",sub:"Ofisten akşam yemeğine; kaliteli kumaş, modern kalıp.",cta:"Alışverişe Başla",cta2:"Kombin Önerileri",
 usp:["Ücretsiz tadilat","Aynı gün kargo","30 gün iade","Taksit imkânı"],cats:["Gömlek","Blazer","Kaban","Ayakkabı"],
 hid:"1597092555685-41e4181d9a53",
 p:[["1523381294911-8d3cead13475","Keten Gömlek",799,999,"-%20"],["1479064555552-3ef4979f8908","Deri Chelsea Bot",2499,0,"Yeni"],["1559582798-678dfc71ccd8","Kaşe Kaban",3299,3999,"-%18"],["1624835567150-0c530a20d8cc","Oxford Gömlek",749,0,""],["1620012253295-c15cc3e65df4","Slim Fit Gömlek",699,0,"Çok satan"],["1561365452-adb940139ffa","Yün Blazer Ceket",2899,0,""],["1667284152861-36e03571486a","Bordo Takım Ceket",3499,4199,"-%17"],["1633655442432-620aa55d7ac1","Keten Ceket",2199,0,"Yeni"]],
 promo:["Kombin kampanyası","2. üründe %30 indirim","NORDE30"]},
ayakkabi:{name:"Solea Sneakers",sector:"Spor Ayakkabı",logo:"SOLEA<em>/</em>",fonts:"Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600",disp:"'Space Grotesk',sans-serif",body:"'Inter',sans-serif",
 c:{bg:"#0E0F11",card:"#17191D",ink:"#F4F5F7",mut:"#9097A3",line:"#262A31",acc:"#C6F432",accInk:"#0E0F11",bar:"#C6F432",barInk:"#0E0F11"},hero:"full",
 bar:"DROP 07 · Sınırlı sayıda · 23:59'a kadar siparişler aynı gün kargoda",nav:["Yeni Çıkanlar","Koşu","Günlük","Basketbol","Kadın","Outlet"],
 eb:"Drop 07",h1:"Hafif. Hızlı.<br><span>Senin tarzın.</span>",sub:"Günlük kullanım ve koşu için tasarlanmış yeni sneaker serisi.",cta:"Drop'u İncele",cta2:"Numara Rehberi",
 usp:["Orijinal ürün","Ücretsiz iade","Aynı gün kargo","Numara değişimi"],cats:["Koşu","Günlük","Retro","Outdoor"],
 hid:"1751326147342-42326374d334",
 p:[["1789520482092-bf7a66ef8281","Night Series High",2799,0,"Yeni"],["1744812441673-df2f1ce89854","Trail Runner Bej",2499,2999,"-%17"],["1662569147750-ef722928ce08","Air Lila",2299,0,""],["1491553895911-0055eca6402d","Siyah Hafif Koşu",1999,2399,"-%17"],["1742392787511-8158c243b772","Retro Pembe",2199,0,"Çok satan"],["1643148050791-00b51e46533c","Gri Günlük",1799,0,""],["1562333814-5890aad545c0","Beyaz Klasik",1899,0,"Yeni"],["1549091059-d49013e0f6b5","Weekend Runner",2099,2499,"-%16"]],
 promo:["Üyelere özel","Tüm koşu ayakkabılarında %15","SOLEA15"]},
av:{name:"Kuzey Outdoor",sector:"Av & Outdoor",logo:"KUZEY<em>OUTDOOR</em>",fonts:"Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600",disp:"'Barlow Condensed',sans-serif",body:"'Inter',sans-serif",
 c:{bg:"#F1EFE7",card:"#FFFFFF",ink:"#1E2A1F",mut:"#5E6A5C",line:"#DDD9CB",acc:"#D9661F",accInk:"#fff",bar:"#2F4A34",barInk:"#EDE7D5"},hero:"full",
 bar:"Av sezonu hazırlığı · Botlarda %25'e varan indirim",nav:["Av Giyim","Bot & Ayakkabı","Kamp","Trekking","Optik","Aksesuar"],
 eb:"Av & Kamp Sezonu",h1:"Doğaya hazır ol",sub:"Su geçirmez botlar, dayanıklı giyim ve kamp ekipmanları tek mağazada.",cta:"Sezon Ürünleri",cta2:"Kamp Ekipmanı",
 usp:["Su geçirmez garanti","Uzman desteği","Hızlı kargo","Mağazadan teslim"],cats:["Bot","Kamp","Çanta","Giyim"],
 hid:"1594608567319-b82072f72685",
 p:[["1642067846281-b1f1d8d3ce21","Su Geçirmez Trekking Botu",3299,3899,"-%15"],["1559826884-dbcc4a21caed","Deri Av Botu",3799,0,"Çok satan"],["1550998358-08b4f83dc345","Hafif Yürüyüş Botu",2599,0,""],["1639745157928-80f96af74090","Arazi Botu",2899,3399,"-%15"],["1573769811725-db9cf522e0f3","Kamp Ocağı Seti",1299,0,"Yeni"],["1755554257861-06dcf192493b","Trekking Sırt Çantası 60L",2199,0,""],["1559633546-cad69a6ba668","Kamuflaj Arazi Botu",3099,0,"Yeni"],["1574009709841-7e4781f5afef","Sonbahar Outdoor Bot",2799,3199,"-%13"]],
 promo:["Sezon açılışı","Kamp setlerinde 2 al 1 öde","KUZEY"]},
taki:{name:"Elva Takı",sector:"Takı & Aksesuar",logo:"ELVA<em>takı</em>",fonts:"Playfair+Display:wght@500;600;700&family=Manrope:wght@400;500;600;700",disp:"'Playfair Display',serif",body:"'Manrope',sans-serif",
 c:{bg:"#FBF8F3",card:"#FFFFFF",ink:"#2B2118",mut:"#7C6E60",line:"#EFE6D8",acc:"#B8924A",accInk:"#fff",bar:"#2B2118",barInk:"#E7D3A8"},hero:"split",
 bar:"14 ayar altın · Sertifikalı pırlanta · Ücretsiz hediye paketi",nav:["Kolye","Yüzük","Bileklik","Küpe","Pırlanta","Hediye"],
 eb:"Işıltılı koleksiyon",h1:"Her anı<br><i>değerli kılan</i> detaylar",sub:"El işçiliğiyle hazırlanan altın ve pırlanta takılar, özel kutusunda.",cta:"Koleksiyonu Gör",cta2:"Hediye Önerileri",
 usp:["Sertifikalı ürün","Ücretsiz gravür","Hediye paketi","Taksit imkânı"],cats:["Yüzük","Bileklik","Kolye","Küpe"],
 hid:"1531995811006-35cb42e1a022",
 p:[["1629118639934-2b241503956c","Taşlı Yüzük Seti",8990,0,"Yeni"],["1723149478783-924c6c3f85a1","Burgu Altın Bilezik",14990,0,""],["1705326452395-1d35e6add570","Yılan Kelepçe",11490,12990,"-%12"],["1647312281540-47455957ee2a","Pırlanta Tektaş",24990,0,"Çok satan"],["1563796088827-58211b3b520b","Ametist Kolye",6490,0,""],["1647312308499-791cf07d1b30","Taşlı Kolye & Bileklik",9990,11490,"-%13"],["1636291724540-401af374e56b","Çift Halka Yüzük",5990,0,"Yeni"],["1595956953691-2de908416c5a","Kalp Küpe Seti",4990,0,""]],
 promo:["Sevgililere özel","Tüm yüzüklerde ücretsiz gravür","ELVA"]},
pet:{name:"Patili Dostlar",sector:"Pet Shop",logo:"patili<em>dostlar</em>",fonts:"Nunito:wght@500;700;800;900",disp:"'Nunito',sans-serif",body:"'Nunito',sans-serif",
 c:{bg:"#FFF8EE",card:"#FFFFFF",ink:"#1F2937",mut:"#6B7280",line:"#F1E4CF",acc:"#FF7A45",accInk:"#fff",bar:"#14B8A6",barInk:"#fff"},hero:"split",
 bar:"🐾 500 ₺ üzeri ücretsiz kargo · Abonelikle mamada %10 indirim",nav:["Köpek","Kedi","Mama","Oyuncak","Yatak","Aksesuar"],
 eb:"Mutlu dostlar",h1:"Can dostun için<br>en iyisi burada",sub:"Mamadan oyuncağa, yataktan tasmaya; veteriner onaylı ürünler.",cta:"Alışverişe Başla",cta2:"Mama Aboneliği",
 usp:["Veteriner onaylı","Hızlı teslimat","Abonelik indirimi","Kolay iade"],cats:["Oyuncak","Yatak","Tasma","Aksesuar"],
 hid:"1579119134757-5c38803f34fc",
 p:[["1580597095981-8d21aa8cdfed","Renkli Oyuncak Seti",349,449,"-%22"],["1786861633877-a8895e1f0ab1","Diş Kaşıma Topu",149,0,""],["1681202200127-49eb9e02fa88","Ekose Köpek Minderi",599,0,"Çok satan"],["1628157062828-ec80d5179c45","Ayarlanabilir Tasma",279,0,""],["1723296014357-808b32c57d98","Halat Oyuncak",129,0,"Yeni"],["1710449086450-1303e6b62c76","Simit Peluş",199,249,"-%20"],["1596756492580-22e0c74be8c3","Kırmızı Bandana",99,0,""],["1764255281678-db10e34ff791","Peluş Ağaç Oyuncak",179,0,"Yeni"]],
 promo:["İlk siparişe özel","%15 indirim + ücretsiz kargo","PATI15"]},
bebek:{name:"Minik Adım",sector:"Anne & Bebek",logo:"minik<em>adım</em>",fonts:"Quicksand:wght@500;600;700",disp:"'Quicksand',sans-serif",body:"'Quicksand',sans-serif",
 c:{bg:"#FDF6F2",card:"#FFFFFF",ink:"#3A3A4A",mut:"#7B7A8A",line:"#F2E3DA",acc:"#E98AA3",accInk:"#fff",bar:"#8EC5E8",barInk:"#1F3444"},hero:"split",
 bar:"Organik pamuk · Bebek dostu boyalar · 400 ₺ üzeri ücretsiz kargo",nav:["Yenidoğan","Giyim","Oyuncak","Bakım","Uyku","Hediye Setleri"],
 eb:"Yumuşacık başlangıçlar",h1:"Minik adımlar için<br>güvenli seçimler",sub:"Organik pamuklu giyim, güvenli oyuncaklar ve bakım ürünleri.",cta:"Ürünleri Keşfet",cta2:"Hediye Setleri",
 usp:["Organik pamuk","Güvenli materyal","Hediye paketi","Kolay iade"],cats:["Peluş","Giyim","Bakım","Oyuncak"],
 hid:"1774578342155-8d7e44a18bfd",
 p:[["1559454403-b8fb88521f11","Peluş Ayı & Battaniye",549,0,"Çok satan"],["1777397660834-67c6d0eabe15","Organik Muslin Set",399,499,"-%20"],["1697751946232-8ad34bc4f0d8","Uyku Arkadaşı Peluş",299,0,""],["1544388405-6f0e0c3cdf54","Kırmızı Bebek Tulum",349,0,"Yeni"],["1731371630171-e834b48c2c14","Ayıcık Peluş Seti",649,0,""],["1676843546660-f502dfcea3f7","Tavşan Peluş",249,299,"-%17"],["1650964336589-96b3f1719a7b","Bebek Bakım Seti",459,0,"Yeni"],["1656599036673-73a13e8e6789","Ahşap Blok Seti",379,0,""]],
 promo:["Yenidoğan hediye seti","3 al 2 öde","MINIK"]},
kuru:{name:"Kavruk",sector:"Kuruyemiş & Kahve",logo:"KAVRUK<em>kuruyemiş & kahve</em>",fonts:"DM+Serif+Display&family=Inter:wght@400;500;600;700",disp:"'DM Serif Display',serif",body:"'Inter',sans-serif",
 c:{bg:"#F7F0E6",card:"#FFFFFF",ink:"#2A1A12",mut:"#7A6556",line:"#EADCC8",acc:"#8B4513",accInk:"#fff",bar:"#2A1A12",barInk:"#D4A24C"},hero:"full",
 bar:"Günlük taze kavrum · 300 ₺ üzeri ücretsiz kargo · Aynı gün kargo",nav:["Kuruyemiş","Kuru Meyve","Kahve","Lokum","Hediye Kutusu","Kampanya"],
 eb:"Günlük taze kavrum",h1:"Taze kavrulmuş,<br>kapına gelsin",sub:"Antep fıstığından çekirdek kahveye; her gün taze kavrulan ürünler.",cta:"Alışverişe Başla",cta2:"Hediye Kutuları",
 usp:["Günlük kavrum","Vakumlu paket","Aynı gün kargo","Toptan satış"],cats:["Fıstık","Badem","Kahve","Karışık"],
 hid:"1543158181-1274e5362710",
 p:[["1502825751399-28baa9b81efe","Antep Fıstığı 500 g",649,749,"-%13"],["1524593656068-fbac72624bb0","Ceviz İçi 500 g",329,0,""],["1726771517475-e7acdd34cd8a","Kaju 500 g",399,0,"Çok satan"],["1611774017274-ec655f187ef3","Çiğ Badem 500 g",349,0,""],["1671981200629-014c03829abb","Karışık Kuruyemiş",289,339,"-%15"],["1723466998040-78d7e2ef6d72","Kavrulmuş Kaju",419,0,"Yeni"],["1743356629215-abb470447e71","Türk Kahvesi 250 g",189,0,""],["1649777536625-8fe182eb37cb","Çekirdek Kahve 1 kg",749,899,"-%17"]],
 promo:["Bayram hediyesi","Hediye kutularında %20 indirim","KAVRUK20"]},
tekstil:{name:"Pamuk Ev",sector:"Ev Tekstili",logo:"Pamuk<em>ev</em>",fonts:"Fraunces:wght@500;600;700&family=Inter:wght@400;500;600",disp:"'Fraunces',serif",body:"'Inter',sans-serif",
 c:{bg:"#F5F3EE",card:"#FFFFFF",ink:"#2D2D2D",mut:"#6F6F6A",line:"#E4E0D6",acc:"#6E8468",accInk:"#fff",bar:"#6E8468",barInk:"#fff"},hero:"split",
 bar:"%100 pamuk · Denizli dokuması · 600 ₺ üzeri ücretsiz kargo",nav:["Nevresim","Havlu","Kırlent","Battaniye","Banyo","Outlet"],
 eb:"Yumuşak dokunuşlar",h1:"Evin en sıcak<br><i>köşesi</i> için",sub:"Denizli dokuması havlular, pamuk nevresimler ve dekoratif kırlentler.",cta:"Koleksiyonu Gör",cta2:"Çeyiz Setleri",
 usp:["%100 pamuk","Yerli üretim","Çeyiz paketleri","Kolay iade"],cats:["Havlu","Kırlent","Nevresim","Banyo"],
 hid:"1522444278776-b4adce133d57",
 p:[["1523471826770-c437b4636fe6","Bambu Havlu Seti",699,849,"-%18"],["1666934209606-a955a12edd63","Pamuk Havlu Seti",549,0,""],["1617811449482-31093c8cee16","Otel Tipi Havlu 6'lı",999,0,"Çok satan"],["1574421233376-06f2ccf017f7","Yeşil El Havlusu",179,0,""],["1639298109207-5a9ccc254481","Renkli Banyo Havlusu",299,349,"-%14"],["1629949009765-40fc74c9ec21","Beyaz Kırlent",249,0,"Yeni"],["1696774276390-6ce82111140f","Örgü Kırlent",329,0,""],["1575276510486-aa55619a8170","Hardal Kırlent",279,0,"Yeni"]],
 promo:["Çeyiz sezonu","Çeyiz setlerinde %25 indirim","CEYIZ25"]},
optik:{name:"Vizyon Optik",sector:"Optik & Gözlük",logo:"vizyon<em>optik</em>",fonts:"Outfit:wght@400;500;600;700;800",disp:"'Outfit',sans-serif",body:"'Outfit',sans-serif",
 c:{bg:"#F7F8FA",card:"#FFFFFF",ink:"#0B1220",mut:"#5C667A",line:"#E3E7EE",acc:"#2563EB",accInk:"#fff",bar:"#0B1220",barInk:"#fff"},hero:"split",
 bar:"Ücretsiz göz muayenesi randevusu · Numaralı camlar 3 günde hazır",nav:["Güneş Gözlüğü","Numaralı Gözlük","Lens","Çocuk","Mavi Işık","Kampanya"],
 eb:"2026 Koleksiyonu",h1:"Net görmenin<br>şık hali",sub:"Güneş gözlükleri, numaralı çerçeveler ve lens; sanal deneme ile.",cta:"Çerçeveleri Dene",cta2:"Randevu Al",
 usp:["Sanal deneme","Ücretsiz muayene","2 yıl garanti","Mağazadan teslim"],cats:["Güneş","Numaralı","Mavi Işık","Çocuk"],
 hid:"1610013598025-8e6562cefc4e",
 p:[["1508296695146-257a814070b4","Kedi Göz Güneş Gözlüğü",1499,1799,"-%17"],["1752127898590-49bdb53dc704","Pilot Güneş Gözlüğü",1799,0,"Çok satan"],["1749525694688-03217cfbc52e","Altıgen Metal Çerçeve",1299,0,"Yeni"],["1752128002864-ae2e798dade6","Mavi Pilot Gözlük",1599,0,""],["1649303922416-75f631e6ac8e","Klasik Siyah Çerçeve",999,1199,"-%17"],["1652749141477-9988a08f43b8","Kaplumbağa Çerçeve",1199,0,""],["1661248177025-f3983a470746","Mavi Transparan Güneş",1399,0,"Yeni"],["1717553558511-282b14f37dc3","İnce Metal Çerçeve",1099,0,""]],
 promo:["İkinci gözlük","2. gözlükte %50 indirim","VIZYON50"]}
};
var k=window.K||(new URLSearchParams(location.search).get("k"))||"kadin",b=B[k]||B.kadin,c=b.c;
var tl=function(n){return n.toLocaleString("tr-TR")+" ₺"};
document.title=b.name+" · "+b.sector+" konsept tasarımı | Mehmet Yıldırım Digital";
var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family="+b.fonts+"&display=swap";document.head.appendChild(l);
var css=`*{box-sizing:border-box;margin:0}html{overflow-x:clip}body{background:${c.bg};color:${c.ink};font:400 15px/1.55 ${b.body};-webkit-font-smoothing:antialiased;overflow-x:clip}
a{color:inherit;text-decoration:none}img{display:block;max-width:100%}button{font:inherit;cursor:pointer}
.w{max-width:1280px;margin:0 auto;padding:0 28px}
.cb{background:#0B1A33;color:#DDE8FF;font:500 12px/1.3 system-ui,sans-serif;text-align:center;padding:7px 12px;letter-spacing:.02em}.cb a{color:#6FB8FF;font-weight:700}
.bar{background:${c.bar};color:${c.barInk};font-size:12.5px;text-align:center;padding:8px 12px;letter-spacing:.04em;font-weight:500}
header{background:${c.bg};border-bottom:1px solid ${c.line};position:sticky;top:0;z-index:20}
.hd{display:flex;align-items:center;gap:28px;height:74px}
.logo{font:700 26px/1 ${b.disp};letter-spacing:.02em;white-space:nowrap}.logo em{font-style:normal;color:${c.acc};margin-left:6px;font-weight:600}
nav{display:flex;gap:22px;flex:1;font-size:14px;font-weight:500;color:${c.mut}}nav a:hover{color:${c.ink}}
.srch{display:flex;align-items:center;gap:8px;border:1px solid ${c.line};border-radius:999px;padding:9px 14px;color:${c.mut};font-size:13px;min-width:200px;background:${c.card}}
.ics{display:flex;gap:16px;align-items:center}.ic{width:22px;height:22px;position:relative;color:${c.ink}}.ic svg{width:22px;height:22px}
.cnt{position:absolute;top:-7px;right:-9px;background:${c.acc};color:${c.accInk};font-size:10px;font-weight:700;border-radius:99px;min-width:17px;height:17px;display:grid;place-items:center;padding:0 4px}
.hero{position:relative}
.hero.split .in{display:grid;grid-template-columns:1fr 1.05fr;gap:48px;align-items:center;padding:56px 0}
.hero.split .im{aspect-ratio:5/4;border-radius:22px;overflow:hidden}.hero.split .im img{width:100%;height:100%;object-fit:cover}
.hero.full{height:min(88vh,780px);min-height:540px;overflow:hidden}.hero.full>img{animation:kb 18s ease-out both}@keyframes kb{from{transform:scale(1.08)}to{transform:scale(1)}}.hero.full>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.hero.full::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.64),rgba(0,0,0,.22) 55%,rgba(0,0,0,.04)),linear-gradient(0deg,rgba(0,0,0,.35),transparent 40%)}
.hero.full .in{position:relative;z-index:2;height:100%;display:flex;align-items:center;color:#fff}.hero.full .tx{max-width:560px}
.eb{font-size:12.5px;letter-spacing:.24em;text-transform:uppercase;font-weight:600;color:${c.acc}}
.hero.full .eb{color:${k==="ayakkabi"?c.acc:"#fff"};opacity:.95}
h1{font:600 clamp(40px,5vw,66px)/1.02 ${b.disp};margin:16px 0 18px;letter-spacing:-.01em}h1 i{font-style:italic;color:${c.acc}}h1 span{color:${c.acc}}
.hero.full h1 i{color:#fff}
.sub{font-size:17px;color:${c.mut};max-width:46ch}.hero.full .sub{color:rgba(255,255,255,.9)}.hero.full h1 span{color:#fff;text-decoration:underline;text-decoration-color:${c.acc};text-decoration-thickness:6px;text-underline-offset:8px}
.btns{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;background:${c.acc};color:${c.accInk};border:0;border-radius:${k==="ayakkabi"||k==="erkek"||k==="av"?"4px":"999px"};padding:15px 26px;font-weight:600;font-size:15px}
.btn.o{background:transparent;color:inherit;box-shadow:inset 0 0 0 1.5px currentColor}
.usp{border-top:1px solid ${c.line};border-bottom:1px solid ${c.line};background:${c.card}}.usp .w{display:grid;grid-template-columns:repeat(4,1fr)}
.usp div{padding:18px 10px;text-align:center;font-size:13.5px;font-weight:600;border-left:1px solid ${c.line}}.usp div:first-child{border-left:0}.usp b{color:${c.acc};margin-right:8px}
section{padding:56px 0 8px}.sh{display:flex;justify-content:space-between;align-items:end;margin-bottom:24px;gap:16px}
.sh h2{font:600 clamp(26px,3vw,36px)/1.1 ${b.disp}}.sh a{font-size:14px;font-weight:600;color:${c.acc}}
.cats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.cat{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:4/5;background:${c.card}}.cat img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.cat:hover img{transform:scale(1.05)}
.cat span{position:absolute;left:14px;bottom:14px;background:${c.card};color:${c.ink};padding:9px 16px;border-radius:999px;font-weight:600;font-size:14px;box-shadow:0 6px 20px rgba(0,0,0,.12)}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.pc{background:${c.card};border-radius:16px;overflow:hidden;border:1px solid ${c.line};display:flex;flex-direction:column}
.pi{position:relative;aspect-ratio:4/5;overflow:hidden;background:${c.line}}.pi img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.pc:hover .pi img{transform:scale(1.05)}
.bd{position:absolute;left:12px;top:12px;background:${c.acc};color:${c.accInk};font-size:11.5px;font-weight:700;padding:4px 10px;border-radius:99px}
.fav{position:absolute;right:12px;top:12px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.92);display:grid;place-items:center;color:#222}.fav svg{width:17px;height:17px}
.pb{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}.pn{font-weight:600;font-size:15px}
.st{font-size:12.5px;color:${c.mut}}.st b{color:#F5A524;letter-spacing:1px}
.pr{display:flex;gap:8px;align-items:baseline;margin-top:auto}.pr b{font-size:18px;font-weight:700}.pr s{color:${c.mut};font-size:13px}
.add{margin-top:10px;width:100%;border:0;border-radius:10px;padding:11px;background:${c.ink};color:${c.bg};font-weight:600;font-size:14px}.add:hover{background:${c.acc};color:${c.accInk}}
.promo{position:relative;overflow:hidden;margin-top:64px;color:#fff;border-radius:24px;padding:64px 56px;min-height:340px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
.promo>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}.promo::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.2))}.promo>div{position:relative;z-index:2}.promo .code{background:rgba(255,255,255,.12);backdrop-filter:blur(6px)}
.lb{display:grid;grid-template-columns:1.35fr 1fr;grid-template-rows:1fr 1fr;gap:18px;height:680px}.lb a{position:relative;border-radius:22px;overflow:hidden;color:#fff}.lb a:first-child{grid-row:1/3}.lb img{width:100%;height:100%;object-fit:cover;transition:transform .7s}.lb a:hover img{transform:scale(1.04)}.lb a::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.6),transparent 55%)}.lb .t{position:absolute;left:26px;bottom:24px;z-index:2}.lb small{font-size:12px;letter-spacing:.22em;text-transform:uppercase;opacity:.9;font-weight:600}.lb h3{font:600 clamp(24px,2.6vw,38px)/1.1 ${b.disp};margin:6px 0 10px}.lb u{font-weight:600;font-size:14px;text-underline-offset:5px}
.ig{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:22px}.ig a{position:relative;aspect-ratio:1/1;overflow:hidden;border-radius:10px}.ig img{width:100%;height:100%;object-fit:cover;transition:transform .5s,filter .5s}.ig a:hover img{transform:scale(1.07);filter:brightness(.8)}
.promo small{font-size:13px;letter-spacing:.2em;text-transform:uppercase;opacity:.85;font-weight:600}.promo h3{font:600 clamp(26px,3vw,38px)/1.1 ${b.disp};margin-top:8px}
.code{border:2px dashed currentColor;border-radius:12px;padding:14px 22px;font-weight:800;letter-spacing:.12em;font-size:20px}
.nl{margin:56px 0 0;padding:44px 0;border-top:1px solid ${c.line};display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap}
.nl h4{font:600 26px/1.2 ${b.disp}}.nl p{color:${c.mut}}.nl form{display:flex;gap:10px}.nl input{border:1px solid ${c.line};background:${c.card};color:${c.ink};border-radius:999px;padding:13px 18px;font:inherit;min-width:260px}
footer{background:${k==="ayakkabi"?"#07080A":c.ink};color:${k==="ayakkabi"?c.mut:c.bg};padding:44px 0 26px;font-size:13.5px}
.ft{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:28px}.ft b{display:block;margin-bottom:10px;font-size:14px}.ft span{display:block;opacity:.72;margin:5px 0}
.fb{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.14);margin-top:30px;padding-top:18px;opacity:.75;font-size:12.5px}
.pay{display:flex;gap:8px}.pay i{font-style:normal;border:1px solid rgba(255,255,255,.3);border-radius:6px;padding:3px 8px;font-size:11px}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);background:${c.ink};color:${c.bg};padding:12px 20px;border-radius:12px;font-weight:600;z-index:50;box-shadow:0 12px 30px rgba(0,0,0,.25)}
@media(max-width:1100px){nav{display:none}.srch{display:none}.hd{justify-content:space-between}}
@media(max-width:860px){.lb{grid-template-columns:1fr;grid-template-rows:auto;height:auto}.lb a{aspect-ratio:4/5}.lb a:first-child{grid-row:auto}.ig{grid-template-columns:repeat(3,1fr)}.promo{padding:40px 28px}.hero.split .in{grid-template-columns:1fr;padding:32px 0}.grid,.cats{grid-template-columns:repeat(2,1fr);gap:14px}.usp .w{grid-template-columns:repeat(2,1fr)}.usp div:nth-child(3){border-left:0}.ft{grid-template-columns:1fr 1fr}.hero.full{height:480px}.w{padding:0 16px}}
@media(max-width:520px){h1{font-size:38px}.promo{padding:28px}.nl input{min-width:0;flex:1}.nl form{width:100%}.logo{font-size:22px}}`;
var s=document.createElement("style");s.textContent=css;document.head.appendChild(s);
var I={heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
bag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
srch:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>'};
var heroTx=`<div class="tx"><div class="eb">${b.eb}</div><h1>${b.h1}</h1><p class="sub">${b.sub}</p><div class="btns"><a class="btn" href="#urunler">${b.cta} →</a><a class="btn o" href="#kategoriler">${b.cta2}</a></div></div>`;
var hero=true?`<section class="hero full" style="padding:0"><img src="${IMG(b.hid,1800)}" alt=""><div class="w in">${heroTx}</div></section>`:`<section class="hero split" style="padding:0"><div class="w in">${heroTx}<div class="im"><img src="${IMG(b.hid,1200)}" alt=""></div></div></section>`;
var cats=b.cats.map(function(t,i){return `<a class="cat" href="#urunler"><img src="${IMG(b.p[[0,2,4,6][i]][0],600)}" alt="" loading="lazy"><span>${t}</span></a>`}).join("");
var prods=b.p.map(function(p,i){var r=(4.5+((i*37)%5)/10).toFixed(1),n=40+((i*53)%180);return `<div class="pc"><div class="pi"><img src="${IMG(p[0])}" alt="${p[1]}" loading="lazy">${p[4]?`<span class="bd">${p[4]}</span>`:""}<button class="fav" aria-label="Favori">${I.heart}</button></div><div class="pb"><div class="pn">${p[1]}</div><div class="st"><b>★★★★★</b> ${r} (${n})</div><div class="pr"><b>${tl(p[2])}</b>${p[3]?`<s>${tl(p[3])}</s>`:""}</div><button class="add" data-n="${p[1]}">Sepete Ekle</button></div></div>`}).join("");
document.body.innerHTML=`<div class="cb">Bu sayfa bir <b>konsept tasarımdır</b> · Tasarım: <a href="https://mydigital.net.tr/#referanslar">Mehmet Yıldırım Digital</a> · 0552 410 30 09</div>
<div class="bar">${b.bar}</div>
<header><div class="w hd"><a class="logo" href="#">${b.logo}</a><nav>${b.nav.map(function(n){return `<a href="#urunler">${n}</a>`}).join("")}</nav><div class="srch">${I.srch} Ürün, kategori ara…</div><div class="ics"><span class="ic">${I.user}</span><span class="ic">${I.heart}</span><span class="ic">${I.bag}<span class="cnt" id="cnt">0</span></span></div></div></header>
${hero}
<div class="usp"><div class="w">${b.usp.map(function(u){return `<div><b>✓</b>${u}</div>`}).join("")}</div></div>
<main class="w">
<section id="kategoriler"><div class="sh"><h2>Kategoriler</h2><a href="#urunler">Tümünü gör →</a></div><div class="cats">${cats}</div></section>
<section><div class="sh"><h2>Lookbook</h2><a href="#urunler">Hikâyeyi keşfet →</a></div><div class="lb"><a href="#urunler"><img src="${IMG(b.p[1][0],1400)}" alt="" loading="lazy"><div class="t"><small>${b.eb}</small><h3>${b.cats[0]} seçkisi</h3><u>Şimdi keşfet</u></div></a><a href="#urunler"><img src="${IMG(b.p[5][0],900)}" alt="" loading="lazy"><div class="t"><small>Editörün seçimi</small><h3>${b.p[5][1]}</h3><u>İncele</u></div></a><a href="#urunler"><img src="${IMG(b.p[7][0],900)}" alt="" loading="lazy"><div class="t"><small>Yeni gelen</small><h3>${b.p[7][1]}</h3><u>İncele</u></div></a></div></section>
<section id="urunler"><div class="sh"><h2>Öne çıkan ürünler</h2><a href="#urunler">Tüm ürünler →</a></div><div class="grid">${prods}</div></section>
<div class="promo"><img src="${IMG(b.p[3][0],1800)}" alt="" loading="lazy"><div><small>${b.promo[0]}</small><h3>${b.promo[1]}</h3></div><div class="code">${b.promo[2]}</div></div>
<section><div class="sh"><h2>@${b.name.toLowerCase().replace(/[^a-z0-9ıöüşçğ]/g,"")} Instagram'da</h2><a href="#">Takip et →</a></div><div class="ig">${[6,0,2,4,1,3].map(function(i){return `<a href="#"><img src="${IMG(b.p[i][0],500)}" alt="" loading="lazy"></a>`}).join("")}</div></section>
<div class="nl"><div><h4>Kampanyalardan ilk sen haberdar ol</h4><p>E-bültene kaydol, ilk siparişinde %10 indirim kazan.</p></div><form onsubmit="event.preventDefault();window.__t('Kaydınız alındı (demo)')"><input placeholder="E-posta adresin"><button class="btn" type="submit">Kaydol</button></form></div>
</main>
<footer><div class="w"><div class="ft"><div><div class="logo" style="color:inherit">${b.logo}</div><span style="margin-top:12px">${b.sector} için hazırlanmış örnek e-ticaret sitesi.</span></div><div><b>Kurumsal</b><span>Hakkımızda</span><span>Mağazalarımız</span><span>İletişim</span></div><div><b>Yardım</b><span>Sipariş takibi</span><span>İade & değişim</span><span>Sıkça sorulanlar</span></div><div><b>Tasarım</b><span>Mehmet Yıldırım Digital</span><span>mydigital.net.tr</span><span>0552 410 30 09</span></div></div>
<div class="fb"><span>© 2026 ${b.name} · Konsept tasarım · Görseller: Unsplash</span><span class="pay"><i>VISA</i><i>Mastercard</i><i>Troy</i><i>iyzico</i></span></div></div></footer>`;
var cnt=0;window.__t=function(m){var e=document.createElement("div");e.className="toast";e.textContent=m;document.body.appendChild(e);setTimeout(function(){e.remove()},2200)};
document.querySelectorAll(".add").forEach(function(x){x.onclick=function(){cnt++;document.getElementById("cnt").textContent=cnt;window.__t(x.dataset.n+" sepete eklendi")}});
})();
