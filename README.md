# Praktikum P04-P06

Starter: `kerangka-profil.html`. Berkas ini sudah lengkap dan sudah lolos
W3C Nu Html Checker serta Lighthouse Accessibility. Jangan mengubah
strukturnya — tampilan diubah dari berkas CSS.

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas | Isi | Lembar |
   |---|---|---|
   | `css/tokens.css` | dua lapis token: nilai mentah + peran | D |
   | `css/base.css` | reset ringan, box-sizing, tipografi | E |
   | `css/layout.css` | navbar flex, katalog kartu, footer | F |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah | G |
   | `css/tema.css` | tema gelap dan tombol pengalihnya | H |

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

- W3C — Nu Html Checker: jumlah error setelah penambahan (target 0)
- WCAG — kontras AA di tema terang dan gelap
- WCAG — seluruh bagian baru dapat dicapai dengan Tab
- WCAG — tetap dapat dipahami tanpa bantuan warna

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.

### Bagian Tambahan

**1. Minat Saya — `<aside>`**
Bagian ini menggunakan elemen `<aside>` untuk menampilkan informasi tambahan mengenai minat saya. Bagian ini ditujukan untuk pembaca yang ingin mengetahui bidang yang saya minati di luar informasi utama tentang profil. Isinya menjelaskan ketertarikan saya pada pengembangan web, pemrograman, teknologi informasi, serta pengembangan aplikasi.

**2. Pengalaman Belajar — `<article>`**
Bagian ini menggunakan elemen `<article>` untuk menjelaskan pengalaman belajar saya selama mempelajari Informatika. Bagian ini ditujukan untuk pembaca yang ingin mengetahui proses dan pengalaman belajar saya. Isinya menjelaskan pembelajaran dasar pengembangan perangkat lunak, HTML, CSS, HTML semantik, dan aksesibilitas web.

**3. Tujuan Belajar Saya — `<details>`**
Bagian ini menggunakan elemen `<details>` untuk menampilkan tujuan belajar yang dapat dibuka dan ditutup oleh pengguna. Bagian ini ditujukan untuk pembaca yang ingin mengetahui tujuan pengembangan kemampuan saya. Isinya menjelaskan tujuan meningkatkan kemampuan pengembangan web, khususnya HTML dan CSS, serta membuat aplikasi yang bermanfaat dan mudah digunakan.

### Evaluasi

**W3C — Nu Html Checker:**
Hasil evaluasi dilakukan menggunakan W3C Nu Html Checker setelah penambahan bagian baru. Jumlah error dicatat berdasarkan hasil pemeriksaan halaman akhir. Target evaluasi adalah **0 error**.

**WCAG — Kontras:**
Tampilan diperiksa pada tema terang dan tema gelap untuk memastikan teks dan elemen antarmuka tetap dapat dibaca dengan kontras yang sesuai.

**WCAG — Navigasi dengan Tab:**
Bagian baru diperiksa menggunakan keyboard untuk memastikan elemen yang dapat menerima fokus dapat dicapai menggunakan tombol Tab.

**WCAG — Tidak bergantung pada warna:**
Informasi pada halaman tetap disampaikan menggunakan teks, struktur HTML, heading, dan elemen semantik sehingga makna halaman tidak hanya bergantung pada perbedaan warna.
