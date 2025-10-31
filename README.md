🌐 Komutla Çalışan Çeviri Botu Altyapısı - [Noise Development]
Bu proje, Discord sunucularınızda üyelerin yazdığı metinleri anlık olarak farklı dillere çevirmesini sağlayan, Discord.js tabanlı basit ve etkili bir bot altyapısıdır.
🌟 Özellikler
 * Anlık Çeviri: Popüler Google Translate hizmetini kullanarak hızlı çeviri yapar.
 * Embed Sunumu: Çeviri sonucunu, kaynak dil ve hedef dil bilgileriyle birlikte temiz bir Embed mesajında gösterir.
 * Kolay Kullanım: Sadece hedef dil kodunu ve çevrilecek metni girmeniz yeterlidir.
 * Temiz Kod: Yorumsuz, sade ve okunması kolay bir kod yapısına sahiptir.
🛠️ Kurulum
Adım 1: Dosyaları Hazırlama
 * Bu projenin dosyalarını indirin veya kopyalayın.
 * Proje klasörünüzde terminali açın ve gerekli kütüphaneleri yükleyin:
   npm install discord.js @iamtraction/google-translate

Adım 2: Yapılandırma (config.json)
config.json dosyasını açın ve bot tokeniniz ile ön ekinizi girin. Tüm mesajları kendi sunucu dilinize göre özelleştirebilirsiniz.
{
  "TOKEN": "tokeniniz",
  "PREFIX": "!",
  "KOMUTLAR": {
    "YARDIM": "yardim",
    "CEVIRI": "ceviri"
  },
  "MESAJLAR": {
    "YETKI_YOK": "Bu komutu kullanmak icin Yonetici yetkisine sahip olmalisiniz.",
    "CEVIRI_KULLANIM": "Eksik kullanim! Lutfen dogru formatta girin: `{prefix}{komut} <hedef_dil_kodu> <metin>` (Ornek: `!ceviri en merhaba dunya`)",
    "HATA_GENEL": "Ceviri yapilirken bir hata olustu. Lutfen tekrar deneyin veya komutu kontrol edin.",
    "HATA_API": "Ceviri servisine baglanilamadi. Lutfen API durumunu kontrol edin."
  },
  "EMBEDS": {
    "YARDIM_BASLIK": "Ceviri Botu Komutlari",
    "YARDIM_ACIKLAMA": "Bu bot, girilen metinleri farkli dillere hizlica cevirir.",
    "YARDIM_KULLANIM_BASLIK": "Kullanim"
  }
}

Adım 3: Botu Çalıştırma
Terminalde botunuzu başlatın:
node index.js

🚀 Kullanım (Discord Üzerinden Komutlar)
Botunuz çalışmaya başladıktan sonra, sunucunuzdaki herhangi bir metin kanalında aşağıdaki komutları kullanabilirsiniz.
1. Çeviri Komutu
Çeviri yapmak için kullanılan ana komut. Hedef dil kodu ilk parametre olmalıdır.
| Komut | Açıklama |
|---|---|
| !ceviri <hedef_dil_kodu> <metin> | Belirtilen metni, hedef dil koduna çevirir. |
Örnek Kullanım:
!ceviri en Bu harika bir Discord sunucusu.

(Sonuç: "This is a wonderful Discord server.")
2. Yardım Komutu
Botun komutlarını ve dil kodları hakkında bilgi verir.
| Komut | Açıklama |
|---|---|
| !yardim | Botun tüm komutlarını ve kullanım formatını gösterir. |
Popüler Dil Kodları (ISO 639-1)
Çeviri komutunu kullanırken kullanabileceğiniz bazı yaygın dil kodları:
| Dil | Kod | Dil | Kod |
|---|---|---|---|
| Türkçe | tr | İngilizce | en |
| Almanca | de | Fransızca | fr |
| İspanyolca | es | Rusça | ru |
| Japonca | ja | Çince | zh |
👤 Geliştirici
Bu altyapı bexA tarafından Noise Development topluluğu için hazırlanmıştır.
