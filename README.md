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

Route `/` menampilkan halaman sementara; route lainnya menampilkan 404. Landing page lengkap menunggu kartu kanban berikutnya. Hosting produksi harus mengarahkan permintaan route aplikasi ke `index.html` agar BrowserRouter bekerja saat halaman dimuat langsung.

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
