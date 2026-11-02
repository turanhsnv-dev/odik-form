# 🔫 ODİK Qrupuna Qəbul və Reabilitasiya Portalı

Bu layihə **Odik** WhatsApp qrupundan *"Keyfim elə istədi"* deyib çıxan dostumuz **Elçin Əliyev** üçün hazırlanmış interaktiv zarafat/trol formudur.

## 👥 Ağsaqqallar Şurası
- **Turan Həsənov** (Veto Hüququ)
- **Ənvər Əliyev** (Təftiş Komissiyası)
- **Ülvi Abdullazadə** (Müdafiə Naziri)
- **Kamil Qədiməliyev** (Sədaqət Nəzarətçisi)
- **Cavid Həsənov** (Baş İntizam Hakimi)
- **Cavid Qəhrəmanov** (Arsenal və Cərimə Rəisi)

---

## 🚀 Necə İşə Salmaq Olar?

### 1. Lokal İşə Salma (Server + API):
```bash
npm install
npm start
```
Brauzerdə açın: `http://localhost:3005`

### 2. Sadə Rejim (Sadəcə UI / Brauzerdə birbaşa):
`public/index.html` faylını birbaşa istənilən brauzerdə iki dəfə klikləyərək aça bilərsiniz.

---

## 📂 Layihə Strukturu

```text
odik-form/
├── public/
│   ├── index.html        # Əsas HTML: 3D Qapı + Odik Qəbul Formu
│   ├── css/
│   │   └── style.css     # 3D Vault Qapı animasiyası, metal teksturalar, təhlükə zolaqları
│   ├── js/
│   │   ├── audio.js      # Web Audio API ilə pnevmatik fışıltı, sirena, metal kilid səsləri
│   │   ├── door.js       # 3D Qapının açılma ssenarisi və biometrik skaner idarəsi
│   │   └── form.js       # Qaçan düymələr, saxta AI analizi və WhatsApp üzrxahlıq inteqrasiyası
│   └── assets/           # Şəkillər və loqolar üçün qovluq
│       ├── images/
│       └── sounds/
├── server/
│   ├── server.js         # Express server (Müraciətləri yadda saxlayan API)
│   └── submissions.json  # Elçinin doldurduğu cavabların arxiv faylı
└── package.json
```

---

## 🎯 Hazır Trol Xüsusiyyətləri:
1. **3D Bunker / Vault Qapısı**:
   - Biometrik Barmaq İzi skaneri.
   - Pnevmatik fışıltı və metal kilid səsləri (heç bir mp3 fayla ehtiyac yoxdur, Web Audio API ilə canlı generasiya olunur).
   - Ağır zirehli qapıların 3D perspektivlə sağa-sola açılması və reabilitasiya portalının üzə çıxması.
2. **Qaçan "Keyfim elə istədi" Düyməsi**:
   - Mausu üstünə gətirəndə və ya toxunanda ekranda qaçır, seçməyə icazə vermir!
3. **Canlı Tövbə Analizatoru**:
   - Minimum 150 simvol yazmayana qədər Şura üzrxahlığı qəbul etmir.
4. **Qaçan "Formu Göndər" Düyməsi**:
   - İlk 3 klikdə sağa-sola qaçaraq Şuranın qəzəbini bildirir.
5. **Saxta AI Yüklənmə Ekranı**:
   - 6 Basdırma Dönər cəriməsi və qrupun çıxış loqlarının analizi.
6. **WhatsApp "Şuraya Yalvar" Düyməsi**:
   - Formu bitirəndə hazır üzrxahlıq mətni ilə birbaşa qrupa yönləndirir.
