# Katalog aset SUVIFOR

Sebelas gambar lokal telah disiapkan di `src/assets/images/`. Sumber asli tetap berada di folder aset yang diberikan pengguna dan tidak diubah. PDF pendamping disalin ke `references/assets/aset-suvifor.pdf` sebagai referensi, bukan bagian bundle halaman.

## Optimasi

- Foto: WebP kualitas 78–84, sisi terpanjang maksimal 1600 px, tanpa pembesaran atau pemotongan.
- Logo: WebP kualitas 78 pada ukuran asli 817 x 817; latar asli dipertahankan.
- Orientasi EXIF diterapkan sebelum encoding; metadata foto tidak disertakan.
- Total gambar: 11.691.809 byte menjadi 1,327,394 byte (88.6% lebih kecil).
- `manifest.json` mencatat nama sumber, nama hasil, dimensi, dan ukuran setiap gambar.

## Pemakaian React

```jsx
import { assets } from '../assets'

const photo = assets['robotic-school-1']
<img {...photo} loading="lazy" decoding="async" />
```

Gunakan `width` dan `height` untuk menjaga ruang gambar selama loading. Foto di bawah lipatan halaman memakai lazy loading; gambar hero jangan diberi lazy loading. Sesuaikan alt dengan konteks pemakaian; gambar dekoratif memakai alt kosong.

## Pemetaan

| Bagian | ID aset |
| --- | --- |
| Logo | suvifor-logo |
| Grand Launching | grand-launching-1, grand-launching-2, grand-launching-3 |
| KRTI | krti |
| Open Recruitment | open-recruitment-1, open-recruitment-2 |
| Pendidikan Dasar | pendas-1, pendas-3 |
| Robotic School | robotic-school-1, robotic-school-2 |

Foto TEKNOFEST khusus belum ada pada sumber yang diberikan. Jangan melabeli foto kegiatan lain sebagai TEKNOFEST. Integrasi foto ke bagian landing page mengikuti kartu slicing berikutnya. Logo sudah dipakai pada halaman sementara.
