# Product Requirements Document (PRD) — Internal

| Item                    | Detail                                    |
| ----------------------- | ----------------------------------------- |
| **Nama Produk**         | SUVIFOR UNNES — UAV Research Team Website |
| **Versi Dokumen**       | v1.0                                      |
| **Status**              | Draft                                     |
| **Project Manager**     | **[Galang Radit Perdana]**                |
| **Tanggal Dibuat**      | **[08-10-2026]**                          |
| **Terakhir Diperbarui** | **[14-10-2026]**                          |

---

## 1. Ringkasan Produk

SUVIFOR UNNES (Semarang State University Flying Object Research) adalah tim riset UAV di bawah UKM RIPTEK UNNES. Website ini dibangun untuk menampilkan identitas tim, program kerja, prestasi KRTI/TEKNOFEST, serta menjadi saluran rekrutmen anggota baru. Masalah: minimnya vitrin digital membuat tim sulit dikenal mahasiswa & sponsor. Solusi: landing page single-page dengan desain aerospace brutalism, hash routing, dan performa tinggi.

---

## 2. Tujuan Bisnis

### 2.1 Tujuan dan KPI Bisnis

| No  | Tujuan                         |
| --- | ------------------------------ |
| 1   | Meningkatkan rekrutmen anggota |
| 2   | Meningkatkan visibilitas tim   |
| 3   | Mendokumentasikan prestasi     |

### 2.2 Strategi dan Penyelarasan

Mendukung visibilitas UKM RIPTEK di tingkat universitas & nasional untuk menarik sponsor & kolaborasi.

---

## 3. Batasan Internal

- Tim frontend only (1-2 orang), **no backend**
- Budget: **Rp 0** (static hosting gratis, font Google Fonts)
- Timeline: **2 minggu** untuk MVP
- Hosting: Vercel
- Domain: Belum diputuskan (suvifor.unnes.ac.id / custom / subdomain)

---

## 5. Risiko dan Mitigasi

| Risiko                                      | Dampak | Probabilitas | Mitigasi                                   | Pemilik          |
| ------------------------------------------- | ------ | ------------ | ------------------------------------------ | ---------------- |
| Konten program tidak lengkap sebelum launch | Rendah | Tinggi       | Launch dengan placeholder, update bertahap | **PIC ORMAWA**   |
| Form rekrutmen tidak terhubung              | Tinggi | Sedang       | Test form handler sebelum launch           | **Frontend Dev** |
| Performa buruk di mobile                    | Sedang | Rendah       | Mobile-first dev, test real device         | **Frontend Dev** |

---

## 6. Sumber Daya

### 6.1 Teknologi dan Tools

| Kategori        | Tools / Teknologi                                  |
| --------------- | -------------------------------------------------- |
| Frontend        | React 18, Vite, React Router (hash mode)           |
| Styling         | Plain CSS, CSS Custom Properties (tokens.css)      |
| Fonts           | Syne, Space Grotesk, JetBrains Mono (Google Fonts) |
| Hosting         | Vercel                                             |
| Design Ref      | Figma (Stitch export)                              |
| Project Mgmt    | Trello                                             |
| Version Control | Git + GitHub                                       |
| Linting         | oxlint (`.oxlintrc.json`)                          |

### 6.3 Anggaran

| Komponen                  | Estimasi Biaya | Catatan                     |
| ------------------------- | -------------- | --------------------------- |
| Sumber daya manusia       | Rp 0           | Internal UKM                |
| Infrastruktur dan lisensi | Rp 0           | Hosting gratis, font gratis |
| Lain-lain                 | Rp 0           | -                           |
| **Total**                 | **Rp 0**       |                             |

---

## 7. Jadwal Proyek

| Fase            | Kegiatan                                       | Mulai            | Selesai          | PIC              | Status  |
| --------------- | ---------------------------------------------- | ---------------- | ---------------- | ---------------- | ------- |
| 1. Discovery    | Riset dan analisis kebutuhan                   | **[08-10-2026]** | **[09-10-2026]** | **PM**           | Selesai |
| 2. Desain       | Wireframe dan UI/UX                            | **[08-10-2026]** | **[10-10-2026]** | **Frontend Dev** | Selesai |
| 3. Pengembangan | Implementasi fitur MVP                         | **[10-10-2026]** | **[13-10-2026]** | **Frontend Dev** | Selesai |
| 4. Pengujian    | QA, UAT, dan security testing (lihat bagian 4) | **[13-10-2026]** | **[13-10-2026]** | **Seluruh Tim**  | Selesai |
| 5. Rilis        | Deployment dan peluncuran                      | **[14-10-2026]** | **[14-10-2026]** | **PM + Dev**     | Selesai |
| 6. Evaluasi     | Pengukuran dan retrospektif                    | **[14-10-2026]** | **[15-10-2026]** | **PM + PO**      | Selesai |

---

## Persetujuan Dokumen

| Nama                        | Peran           | Tanda Tangan / Persetujuan | Tanggal |
| --------------------------- | --------------- | -------------------------- | ------- |
| **[Galang Radit Perdana]**  | Project Manager |                            |         |
| **[Cycylia Kusumawardani]** | **PIC ORMAWA**  |                            |         |
| **[Nama]**                  | Tech Lead       |                            |         |
