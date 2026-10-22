# SMART OPR GENERATOR — SEKOLAH KEBANGSAAN KOTA MASAI 3

Pakej sistem Jana OPR **PWA untuk GitHub Pages**, dengan header ilustrasi penuh dan tab kecil yang diwarisi daripada versi terkini.

## Konfigurasi

- **Nama sekolah:** SEKOLAH KEBANGSAAN KOTA MASAI 3
- **Google Sheet ID:** `1hzwCXFBHv34DQTk9fGc8mHuIvRX1aRHV5Hk`
- **URL Web App Apps Script:** https://script.google.com/macros/s/AKfycbzlhg4gTlwbKcyHC0qAPbK1TgQxUDXAXTxhzgM7YhmA54P-kLr6JHDAQSOjVujyGRZ_/exec
- **Folder Google Drive gambar:** `1ZNoId-SdoeY7aBAFFplJjLWiLLPzQ91Z`
- **Lencana sekolah:** https://iili.io/nOblZX9.md.png

Awalan `heets/d/` yang diberikan untuk Sheet ID telah digugurkan, kerana hanya bahagian ID digunakan oleh Apps Script.

## Cara terbit di GitHub Pages

1. **Ekstrak ZIP dan muat naik kandungannya**, bukan folder luaran, ke *root* repositori GitHub. Pastikan `index.html`, `manifest.webmanifest`, `sw.js`, `smart-opr-header.png`, `.nojekyll` dan `Code.gs` berada di lokasi yang betul.
2. Aktifkan GitHub Pages pada repositori (*Settings → Pages → Deploy from a branch → main / root*).
3. Salin `Code.gs` ke projek Google Apps Script yang bersambung dengan Google Sheet anda. Simpan, kemudian *Deploy → Manage deployments → Edit → New version → Deploy* dengan akses yang sesuai. Pastikan URL `/exec` sepadan dengan yang dimasukkan ke HTML.
4. Apps Script perlu mempunyai kebenaran mengakses Google Sheet dan folder Drive berkenaan.

**Penting:** GitHub Pages tidak menjalankan `Code.gs`. Fail tersebut perlu dipasang dan dideploy dalam Google Apps Script.

## PWA dan ikon

- Lencana rasmi yang anda beri digunakan untuk paparan sistem, favicon, Apple Touch Icon dan rujukan ikon pada `manifest.webmanifest`.
- **Fail asal lencana tidak boleh dimuat turun dalam sesi ini.** Oleh itu ikon PWA menggunakan URL luaran `https://iili.io/nOblZX9.md.png`, bukan ikon PNG 192×192 / 512×512 lokal yang telah disahkan. Kejayaan pemasangan dan paparan ikon bergantung pada kebolehcapaian dan dimensi imej di pelayan tersebut.
- `sw.js` menyediakan cache shell aplikasi; data laporan dan penyimpanan/imej Google kekal memerlukan sambungan internet. CSS Tailwind/font luaran juga memerlukan sambungan pada penggunaan pertama.
- `localStorage` menggunakan kekunci tersendiri untuk mengasingkan data sekolah ini.

Fungsi utama Bina Laporan, Lihat Laporan, Kalendar Program, ulasan templat pelbagai (tanpa AI), cetakan dan susunan tandatangan dikekalkan.
