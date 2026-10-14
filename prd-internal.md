# Product Requirements Document (PRD) — Internal

| Item                    | Detail                                    |
| ----------------------- | ----------------------------------------- | --------------------------------- | --- |
| **Nama Produk**         | SUVIFOR UNNES — UAV Research Team Website |
| **Versi Dokumen**       | v1.0                                      |
| **Status**              | Draft                                     |
| <!--                    | **Penulis**                               | **[Nama Anda]**                   | --> |
| <!--                    | **Product Owner**                         | **[Ketua UKM RIPTEK]**            | --> |
| **Project Manager**     | **[Galang Radit Perdana]**                |
| **Tanggal Dibuat**      | **[09-10-2026]**                          |
| **Terakhir Diperbarui** | **[14-10-2026]**                          |
| <!--                    | **Dokumen Terkait**                       | PRD Eksternal — [tautan jika ada] | --> |

<!-- ### Riwayat Perubahan

| Versi | Tanggal          | Penulis         | Perubahan  |
| ----- | ---------------- | --------------- | ---------- |
| v1.0  | **[09-10-2026]** | **[Makiv]** | Draft awal | -->

---

## 1. Ringkasan Produk

SUVIFOR UNNES (Semarang State University Flying Object Research) adalah tim riset UAV di bawah UKM RIPTEK UNNES. Website ini dibangun untuk menampilkan identitas tim, program kerja, prestasi KRTI/TEKNOFEST, serta menjadi saluran rekrutmen anggota baru. Masalah: minimnya vitrin digital membuat tim sulit dikenal mahasiswa & sponsor. Solusi: landing page single-page dengan desain aerospace brutalism, hash routing, dan performa tinggi.

---

## 2. Tujuan Bisnis

### 2.1 Tujuan dan KPI Bisnis

| No  | Tujuan                         | Indikator Keberhasilan (KPI)       | Target               | Tenggat          |
| --- | ------------------------------ | ---------------------------------- | -------------------- | ---------------- |
| 1   | Meningkatkan rekrutmen anggota | Jumlah pendaftar form rekrutmen    | > 50/semester        | **[DD-MM-YYYY]** |
| 2   | Meningkatkan visibilitas tim   | Unique visitors bulanan            | > 1.000              | **[DD-MM-YYYY]** |
| 3   | Mendokumentasikan prestasi     | Halaman program & prestasi lengkap | 100% program termuat | **[DD-MM-YYYY]** |

### 2.2 Strategi dan Penyelarasan

Mendukung visibilitas UKM RIPTEK di tingkat universitas & nasional untuk menarik sponsor & kolaborasi.

### 2.3 Dampak Bisnis Jika Tidak Dikerjakan

Kehilangan calon anggota berkualitas, sulit mencari sponsor, kurang kompetitif di KRTI/TEKNOFEST.

---

## 3. Kebutuhan Teknis dan Non-Fungsional

### 3.1 Kebutuhan Non-Fungsional Detail

| Kategori       | Kebutuhan                       | Target Terukur                             | Cara Verifikasi            |
| -------------- | ------------------------------- | ------------------------------------------ | -------------------------- |
| Performa       | Load time halaman               | p95 < 3 detik                              | Lighthouse CI              |
| Keamanan       | HTTPS, CSP, no secrets in code  | Lulus security review                      | Manual audit + SAST        |
| Ketersediaan   | Static hosting (Vercel/Netlify) | 99.9% uptime                               | Provider monitoring        |
| Skalabilitas   | Static site, CDN global         | 10.000 pengguna bersamaan                  | Load test (opsional)       |
| Kompatibilitas | Modern browsers, mobile-first   | Chrome/FF/Safari/Edge latest + iOS/Android | BrowserStack / real device |
| Kepatuhan      | UU PDP (data kontak/form)       | Privacy policy & consent                   | Legal review               |

> Checklist keamanan lengkap dan **release gate** ada di bagian 4 (Security Check).

### 3.2 Dependensi dan Aturan Teknis per Fitur

| ID Fitur | Dependensi (sistem/API/tim)             | Catatan Teknis | Estimasi Effort |
| -------- | --------------------------------------- | -------------- | --------------- |
| F-01     | React Router (hash), design tokens      | **Done**       | S               |
| F-02     | Content dari design.md                  | **Done**       | S               |
| F-03     | Data program kerja (perlu input ORMAWA) | Placeholder    | M               |
| F-04     | Form handler (Formspree/Netlify Forms)  | Placeholder    | M               |
| F-05     | Map embed, social links                 | Placeholder    | S               |

### 3.3 Metrik MVP (Pengukuran Internal)

| Metrik                   | Target      | Sumber Data     | Pemilik       |
| ------------------------ | ----------- | --------------- | ------------- |
| Unique visitors/bulan    | 1.000       | GA4 / Plausible | **[PM]**      |
| Recruitment form submits | 50/semester | Form analytics  | PIC Rekrutmen |
| Page load speed (p95)    | < 3s        | Lighthouse      | Frontend Dev  |
| NPS (survei internal)    | > 40        | Survei anggota  | Product Owner |

### 3.4 Batasan Internal

- Tim frontend only (1-2 orang), **no backend**
- Budget: **Rp 0** (static hosting gratis, font Google Fonts)
- Timeline: **2-3 minggu** untuk MVP
- Hosting: Vercel / Netlify / GitHub Pages (belum diputuskan)
- Domain: Belum diputuskan (suvifor.unnes.ac.id / custom / subdomain)

---

## 4. Security Check

> Checklist ini wajib diselesaikan sebelum rilis. Item berstatus **Gagal** atau **Belum** pada tingkat Kritis/Tinggi menghentikan peluncuran (_release gate_).

### 4.1 Klasifikasi Data

| Jenis Data              | Contoh                     | Klasifikasi | Perlindungan yang Diperlukan                                |
| ----------------------- | -------------------------- | ----------- | ----------------------------------------------------------- |
| Data kontak publik      | Email, WA, alamat kantor   | Publik      | Tidak perlu enkripsi                                        |
| Data formulir rekrutmen | Nama, NIM, prodi, motivasi | Terbatas    | HTTPS, tidak disimpan di server kami (ke Formspree/Netlify) |
| Kredensial admin        | Tidak ada (static site)    | -           | -                                                           |

### 4.2 Checklist Keamanan per Fase

| No   | Fase         | Pemeriksaan                                                                      | Tingkat | PIC                | Status | Bukti / Catatan |
| ---- | ------------ | -------------------------------------------------------------------------------- | ------- | ------------------ | ------ | --------------- |
| S-01 | Desain       | Threat modeling selesai (mis. STRIDE) dan ancaman utama terdokumentasi           | Tinggi  | **[Tech Lead]**    | Belum  | [Tautan]        |
| S-02 | Desain       | Alur autentikasi dan otorisasi (peran dan hak akses) ditinjau                    | Tinggi  | **[Tech Lead]**    | Belum  |                 |
| S-03 | Desain       | Prinsip least privilege diterapkan pada akun, layanan, dan database              | Sedang  | **[Tech Lead]**    | Belum  |                 |
| S-04 | Pengembangan | Validasi dan sanitasi input (cegah SQL injection, XSS, CSRF)                     | Kritis  | **[Frontend Dev]** | Belum  |                 |
| S-05 | Pengembangan | Rahasia (API key, password DB) tidak ada di kode; memakai secret manager         | Kritis  | **[Frontend Dev]** | Belum  |                 |
| S-06 | Pengembangan | Password di-hash dengan algoritma modern (bcrypt/argon2)                         | Kritis  | **Tidak Berlaku**  | -      |                 |
| S-07 | Pengembangan | Enkripsi data in-transit (TLS 1.2+) dan at-rest                                  | Kritis  | **[DevOps/PM]**    | Belum  |                 |
| S-08 | Pengembangan | Manajemen sesi/token aman (kedaluwarsa, revokasi, rate limiting login)           | Tinggi  | **Tidak Berlaku**  | -      |                 |
| S-09 | Pengembangan | Log aktivitas dan audit trail tanpa data sensitif                                | Sedang  | **Tidak Berlaku**  | -      |                 |
| S-10 | Pengujian    | SAST/analisis kode statis dijalankan, temuan Kritis/Tinggi ditutup               | Tinggi  | **[Frontend Dev]** | Belum  | [Laporan]       |
| S-11 | Pengujian    | Pemindaian dependensi/library (SCA) bebas kerentanan Kritis/Tinggi               | Tinggi  | **[Frontend Dev]** | Belum  | [Laporan]       |
| S-12 | Pengujian    | DAST atau penetration test dilakukan (minimal untuk alur utama MVP)              | Tinggi  | **[PM/QA]**        | Belum  | [Laporan]       |
| S-13 | Pengujian    | Pengujian hak akses (akses antarpengguna dan antarperan tidak bocor)             | Kritis  | **[QA]**           | Belum  |                 |
| S-14 | Pra-rilis    | Konfigurasi produksi aman (debug off, port tidak perlu ditutup, security header) | Tinggi  | **[Frontend Dev]** | Belum  |                 |
| S-15 | Pra-rilis    | Backup dan prosedur pemulihan diuji                                              | Tinggi  | **[PM]**           | Belum  |                 |
| S-16 | Pra-rilis    | Review kepatuhan privasi (UU PDP, persetujuan pengguna, kebijakan privasi)       | Tinggi  | **[Legal/PO]**     | Belum  | [Tautan legal]  |
| S-17 | Pasca-rilis  | Monitoring dan alerting keamanan aktif                                           | Sedang  | **[PM]**           | Belum  |                 |
| S-18 | Pasca-rilis  | Rencana respons insiden dan kontak darurat tersedia                              | Tinggi  | **[PM]**           | Belum  |                 |
| S-19 | Pasca-rilis  | Jadwal patching dan peninjauan keamanan berkala ditetapkan                       | Sedang  | **[Tech Lead]**    | Belum  |                 |

> **Status:** Belum, Berjalan, Lulus, Gagal, Tidak Berlaku (sertakan alasan).
> **Tingkat:** Kritis, Tinggi, Sedang.

### 4.3 Penanganan Temuan Keamanan

| Tingkat Keparahan | Batas Waktu Perbaikan                                    | Keputusan Rilis                              |
| ----------------- | -------------------------------------------------------- | -------------------------------------------- |
| Kritis            | [contoh: sebelum rilis]                                  | Rilis ditahan                                |
| Tinggi            | [contoh: sebelum rilis atau ada mitigasi yang disetujui] | Rilis ditahan kecuali ada persetujuan risiko |
| Sedang            | [contoh: 30 hari setelah rilis]                          | Boleh rilis dengan rencana perbaikan         |
| Rendah            | [contoh: backlog]                                        | Boleh rilis                                  |

### 4.4 Persetujuan Security Gate

| Nama                   | Peran                       | Keputusan (Lulus / Lulus dengan Catatan / Tidak Lulus) | Tanggal |
| ---------------------- | --------------------------- | ------------------------------------------------------ | ------- |
| **[Nama]**             | Tech Lead                   |                                                        |         |
| **[Nama]**             | Security Officer / Reviewer |                                                        |         |
| **[Ketua UKM RIPTEK]** | Product Owner               |                                                        |         |

---

## 5. Risiko dan Mitigasi

| Risiko                                      | Dampak | Probabilitas | Mitigasi                                    | Pemilik          |
| ------------------------------------------- | ------ | ------------ | ------------------------------------------- | ---------------- |
| Konten program tidak lengkap sebelum launch | Rendah | Tinggi       | Launch dengan placeholder, update bertahap  | **PIC ORMAWA**   |
| Form rekrutmen tidak terhubung              | Tinggi | Sedang       | Test form handler sebelum launch            | **Frontend Dev** |
| Performa buruk di mobile                    | Sedang | Rendah       | Mobile-first dev, test real device          | **Frontend Dev** |
| Domain/hosting belum siap                   | Tinggi | Sedang       | Siapkan fallback (Netlify/Vercel subdomain) | **PM**           |

---

## 6. Sumber Daya

### 6.1 Tim Proyek

| Peran               | Nama                    | Tanggung Jawab                      | Alokasi (%) |
| ------------------- | ----------------------- | ----------------------------------- | ----------- |
| Product Owner       | **[Ketua UKM RIPTEK]**  | Requirements, approval, konten      | 10%         |
| **Project Manager** | **[KOSONGKAN]**         | Scheduling, coordination, risiko    | -           |
| UI/UX Designer      | **[Nama Designer]**     | Design tokens, review, asset        | 20%         |
| Frontend Developer  | **[Nama Dev]**          | Implementasi React + CSS + deploy   | 100%        |
| **PIC ORMAWA**      | **[KOSONGKAN]**         | Konten program, validasi data, foto | -           |
| QA / Tester         | **[Frontend Dev / PM]** | Testing manual, a11y, cross-browser | 20%         |

### 6.2 Teknologi dan Tools

| Kategori        | Tools / Teknologi                                                    |
| --------------- | -------------------------------------------------------------------- |
| Frontend        | React 18, Vite, React Router (hash mode)                             |
| Styling         | Plain CSS, CSS Custom Properties (tokens.css)                        |
| Fonts           | Syne, Space Grotesk, JetBrains Mono (Google Fonts)                   |
| Hosting         | Vercel / Netlify / GitHub Pages (pilih 1)                            |
| Design Ref      | Figma (Stitch export), `design.md`, `references/stitch-original.txt` |
| Project Mgmt    | GitHub Projects / Trello / Notion                                    |
| Version Control | Git + GitHub                                                         |
| Linting         | oxlint (`.oxlintrc.json`)                                            |
| Analytics       | GA4 / Plausible / Umami (pilih 1)                                    |

### 6.3 Anggaran

| Komponen                  | Estimasi Biaya | Catatan                                                |
| ------------------------- | -------------- | ------------------------------------------------------ |
| Sumber daya manusia       | Rp 0           | Internal UKM                                           |
| Infrastruktur dan lisensi | Rp 0           | Hosting gratis, font gratis, domain gratis (subdomain) |
| Lain-lain                 | Rp 0           | -                                                      |
| **Total**                 | **Rp 0**       |                                                        |

---

## 7. Jadwal Proyek

### 7.1 Milestone

| Fase            | Kegiatan                                       | Mulai         | Selesai       | PIC              | Status      |
| --------------- | ---------------------------------------------- | ------------- | ------------- | ---------------- | ----------- |
| 1. Discovery    | Riset dan analisis kebutuhan                   | **[Tanggal]** | **[Tanggal]** | **PM**           | Belum mulai |
| 2. Desain       | Wireframe dan UI/UX                            | **[Tanggal]** | **[Tanggal]** | **Designer**     | Belum mulai |
| 3. Pengembangan | Implementasi fitur MVP                         | **[Tanggal]** | **[Tanggal]** | **Frontend Dev** | Belum mulai |
| 4. Pengujian    | QA, UAT, dan security testing (lihat bagian 4) | **[Tanggal]** | **[Tanggal]** | **QA**           | Belum mulai |
| 5. Rilis        | Deployment dan peluncuran                      | **[Tanggal]** | **[Tanggal]** | **PM + Dev**     | Belum mulai |
| 6. Evaluasi     | Pengukuran dan retrospektif                    | **[Tanggal]** | **[Tanggal]** | **PM + PO**      | Belum mulai |

### 7.2 Timeline

Untuk ilustrasi timeline dibebaskan memakai tools apa saja seperti Mermaid, SpreadSheet atau design gambar timline menggunakan canva.

## 8. Alur Komunikasi

### 8.1 Pemangku Kepentingan (Stakeholder)

| Stakeholder         | Peran           | Kepentingan          | Kontak         |
| ------------------- | --------------- | -------------------- | -------------- |
| Ketua UKM RIPTEK    | Sponsor / PO    | Visibilitas UKM      | **[Email/WA]** |
| **PIC ORMAWA**      | **[KOSONGKAN]** | Konten & validasi    | -              |
| **Project Manager** | **[KOSONGKAN]** | Eksekusi proyek      | -              |
| Anggota SUVIFOR     | User utama      | Informasi, rekrutmen | -              |
| Calon anggota       | Target user     | Info bergabung       | -              |
| Dosen Pembina       | Advisor         | Validasi akademik    | **[Email]**    |

### 8.2 Rutinitas Komunikasi

| Pertemuan / Laporan  | Frekuensi  | Peserta             | Media             | Tujuan               |
| -------------------- | ---------- | ------------------- | ----------------- | -------------------- |
| Daily stand-up       | Harian     | Tim pengembang      | [Slack / Meet]    | Sinkronisasi progres |
| Sprint planning      | Per sprint | Seluruh tim         | [..]              | Menentukan prioritas |
| Sprint review / demo | Per sprint | Tim dan stakeholder | [..]              | Demo hasil kerja     |
| Laporan progres      | Mingguan   | PM, Product Owner   | [Email / Dokumen] | Ringkasan status     |
| Retrospektif         | Per sprint | Tim                 | [..]              | Perbaikan proses     |

### 8.3 Jalur Eskalasi

1. Anggota tim → Project Manager
2. Project Manager → Product Owner
3. Product Owner → Sponsor / Manajemen

### 8.4 Pengelolaan Perubahan (Internal)

[Jelaskan bagaimana perubahan kebutuhan ditinjau dampaknya terhadap jadwal, biaya, dan ruang lingkup, serta siapa yang menyetujui sebelum diteruskan ke PRD Eksternal.]

---

## 9. Referensi Internal

| No  | Judul / Dokumen        | Deskripsi                               | Tautan                           |
| --- | ---------------------- | --------------------------------------- | -------------------------------- |
| 1   | Design System (Stitch) | Design tokens, components, 3 HTML specs | `references/stitch-original.txt` |
| 2   | design.md              | Acuan implementasi bertahap             | `design.md`                      |
| 3   | AGENTS.md              | Instruksi development untuk agent       | `AGENTS.md`                      |
| 4   | PRD Eksternal          | Versi publik (jika dipublikasikan)      | [URL]                            |

---

## Persetujuan Dokumen

| Nama            | Peran           | Tanda Tangan / Persetujuan | Tanggal |
| --------------- | --------------- | -------------------------- | ------- |
| **[Nama]**      | Project Manager |                            |         |
| **[KOSONGKAN]** | **PIC ORMAWA**  |                            |         |
| **[Nama]**      | Tech Lead       |                            |         |
