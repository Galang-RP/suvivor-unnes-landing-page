# SUVIFOR UNNES

Fondasi website tim UAV SUVIFOR UNNES menggunakan React, Vite, React Router, dan CSS biasa. Implementasi dikerjakan bertahap sesuai kanban dengan referensi Stitch.

## Menjalankan proyek

Gunakan Node.js 22.12+ yang memenuhi persyaratan Vite (setup diverifikasi dengan Node.js 26.3.1) dan npm.

```sh
npm ci
npm run dev
```

## Pemeriksaan

```sh
npm run lint
npm run build
npm run preview
```

## Struktur

- `src/components/`: komponen bersama.
- `src/pages/`: halaman dan route.
- `src/assets/`: gambar dan aset yang diproses Vite.
- `src/styles/`: token dan styling bersama.
- `public/`: aset statis.
- `design.md`: acuan slicing dari Stitch.
- `references/stitch-original.txt`: copy Stitch asli, disimpan utuh.

Route `/` menampilkan Navbar dan Hero; route lainnya menampilkan 404. Section lain menunggu kartu kanban berikutnya. Hosting produksi harus mengarahkan permintaan route aplikasi ke `index.html` agar BrowserRouter bekerja saat halaman dimuat langsung.

## Status kartu Setup React + Vite

- React + Vite diinisialisasi dari template resmi.
- React Router dan CSS dipasang.
- Acuan design.md dibuat dari sumber Stitch pengguna.
- Struktur folder modular tersedia.

File lock npm disertakan untuk instalasi konsisten. Referensi desain belum diubah menjadi seluruh halaman website pada tahap ini.

## Aset visual

Acuan desain dan aset visual: [Proyek SUVIFOR UNNES di Stitch](https://stitch.withgoogle.com/projects/8135422896203371150). Proyek ini sama dengan copy Stitch yang disimpan di [references/stitch-original.txt](references/stitch-original.txt) dan menjadi referensi implementasi bertahap sesuai kanban.

## Navbar dan navigasi section

Navbar terpisah tersedia di src/components/Navbar.jsx dengan menu layar penuh sesuai Stitch. React Router menangani tautan /#hero, /#about, /#programs, /#recruitment, dan /#contact. Navigasi mendukung smooth scroll, tautan langsung, Escape, fokus keyboard, serta preferensi reduced motion. Section selain hero masih berupa penanda sementara sampai kartu slicing masing-masing dikerjakan. Pada mobile, CTA header disembunyikan untuk memberi ruang logo dan tombol; Recruitment tetap tersedia dalam menu.

## Hero / Home

Hero tersedia di `src/components/Hero.jsx`: headline dan deskripsi mengikuti copy Stitch, CTA menuju Recruitment dan Programs, serta foto lokal `pendas-1` menampilkan tim bersama UAV. Foto ditambahkan di bawah copy sesuai kartu Hero yang meminta visual utama; referensi HTML aslinya berupa hero teks. Gambar mempertahankan proporsi asli dan diprioritaskan saat dimuat. Strip informasi di bawah hero dibuat statis agar tetap mudah dibaca.

Validasi: lint dan build berhasil; tampilan desktop dan mobile 375 px diperiksa, gambar termuat, serta kedua CTA berhasil menuju section terkait. Section lain tetap menunggu kartu berikutnya.


## About

`src/components/About.jsx` menggantikan penanda sementara About di bawah Hero. Visi, profil, dan tiga fokus kegiatan mengikuti copy Stitch. Foto lokal Grand Launching ditambahkan sebagai gambar pendukung sesuai kartu About, menggunakan lazy loading dan proporsi asli. Layout fokus kegiatan memakai tiga kolom pada desktop dan satu kolom pada mobile.
