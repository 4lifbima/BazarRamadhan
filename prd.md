Berikut adalah rencana PRD (Product Requirement Document) yang komprehensif untuk proyek landing page katalog bazar Ramadhan Anda, menggunakan stack Vue.js, Tailwind CSS, dan TypeScript dengan gaya Neobrutalism modern.

---

# Product Requirement Document (PRD)

**Nama Proyek:** Bazar Ramadhan Hub (Landing Page Katalog)
**Versi:** 1.0
**Status:** Draft
**Tech Stack:** Vue 3 (Composition API), TypeScript, Tailwind CSS, Vite
**Gaya Desain:** Neobrutalism Modern

---

## 1. Tujuan & Ringkasan Eksekutif

### 1.1. Ringkasan
Membangun sebuah landing page yang berfungsi sebagai katalog digital untuk para pedagang di bazar Ramadhan. Tujuan utamanya adalah untuk menampilkan produk-produk yang dijual, memberikan informasi detail, serta memudahkan pengunjung (calon pembeli) untuk mencari dan menemukan produk berdasarkan kategori.

### 1.2. Tujuan Bisnis & Produk
- **Meningkatkan Visibilitas:** Memperkenalkan produk-produk UMKM yang berpartisipasi dalam bazar kepada audiens yang lebih luas (offline-to-online).
- **Kemudahan Navigasi:** Menyediakan cara yang mudah dan cepat bagi pengguna untuk menjelajahi produk sebelum atau selama berkunjung ke lokasi bazar.
- **Branding:** Membangun identitas visual yang kuat dan modern (Neobrutalism) yang sesuai dengan semangat Ramadhan namun tetap terasa segar dan kontemporer.

---

## 2. Ruang Lingkup (Scope)

### 2.1. In Scope (Fitur Utama)
- **Halaman Beranda (Homepage):** Menampilkan hero section, daftar kategori unggulan, dan daftar produk terbaru/terpopuler.
- **Halaman Kategori (Category Page):** Menampilkan semua produk berdasarkan kategori yang dipilih (misal: Makanan Berat, Minuman, Takjil, Fashion, Aksesoris).
- **Halaman Detail Produk (Product Detail Page):** Menampilkan informasi lengkap dari satu produk (gambar, nama, harga, deskripsi, nama penjual, nomor kontak, dan lokasi stand di bazar).
- **Navigasi Sederhana:** Header dengan logo dan menu navigasi utama (Home, Kategori).

### 2.2. Out of Scope (Fitur yang TIDAK termasuk di rilis pertama)
- Sistem backend untuk manajemen konten (CMS). Data akan di-hardcode sementara atau diambil dari file JSON statis.
- Fitur pencarian (search) berbasis teks.
- Fitur keranjang belanja atau transaksi online (e-commerce penuh).
- Sistem login atau registrasi pengguna.
- Sistem ulasan dan rating produk.

---

## 3. Target Pengguna (User Persona)

- **Nama:** Andi
- **Demografi:** 25-40 tahun, tinggal di perkotaan, karyawan atau ibu rumah tangga.
- **Tujuan:** Mencari ide menu untuk berbuka puasa atau kebutuhan Lebaran. Ingin tahu produk apa saja yang tersedia di bazar sebelum datang langsung agar tidak kehabisan atau kebingungan saat di lokasi.
- **Pain Points:** Bazar terlalu ramai sehingga susah melihat semua stan dengan nyaman, tidak tahu stan mana yang menjual produk yang dicari.
- **Behavior:** Aktif di media sosial, suka hal-hal yang praktis dan visual, menggunakan smartphone untuk mencari informasi.

---

## 4. Spesifikasi Desain: Neobrutalism Modern

### 4.1. Prinsip Desain
- **Bold & Berani:** Penggunaan warna-warna solid dan kontras tinggi.
- **Tipografi Ekspresif:** Font sans-serif yang tebal (bold) dan besar.
- **Elemen Geometris:** Penggunaan border yang tebal (2-4px), bayangan yang "keras" (tanpa blur), dan bentuk-bentuk geometris sederhana sebagai aksen.
- **Modern Touch:** Tidak terlalu "kotor" seperti brutalism murni. Tetap menjaga keterbacaan dan whitespace yang cukup agar tidak terlihat berantakan. Ada sentuhan warna pastel atau warna-warna hangat khas Ramadhan (misal: dusty rose, mustard, navy, cream) yang dipadukan dengan aksen hitam pekat.

### 4.2. Komponen Visual Utama (dengan Tailwind)
- **Warna:**
    - *Primary:* `#F4A261` (Warna hangat seperti kurma/pasir)
    - *Secondary:* `#2A9D8F` (Warna hijau teal yang segar)
    - *Background:* `#FDF0D5` (Cream) atau putih bersih.
    - *Accent/Text:* Hitam pekat (`#000000`) untuk teks utama dan border.
    - *Border:* `border-4` atau `border-2` dengan warna hitam.
- **Tipografi:** Gunakan font sans-serif seperti **Poppins**, **Inter**, atau **Manrope**. Pastikan weight 600-700 untuk judul, 400 untuk body teks.
- **Bayangan:** `box-shadow: 8px 8px 0px 0px #000000;` (atau variasi lainnya) untuk kartu produk, tombol, dan elemen interaktif lainnya.
- **Sudut:** Bisa menggunakan sudut yang sedikit membulat (`rounded-lg`) untuk memberikan sentuhan modern, atau sudut siku-siku (`rounded-none`) untuk brutalism yang lebih keras. Opsi: `rounded-xl` dengan border tebal.
- **Kartu Produk:** Background putih, border hitam tebal, bayangan hitam solid, gambar produk dengan sudut lancip, teks harga yang besar dan bold.

---

## 5. Struktur Halaman & Fungsionalitas

### 5.1. Halaman Home (`/`)
- **Header:** Logo "Bazar Ramadhan", navigasi (Home, Kategori). Background terang, border bawah hitam tebal.
- **Hero Section:**
    - Judul Besar: "Jelajahi Serunya Bazar Ramadhan".
    - Sub-judul: "Temukan hidden gem untuk buka puasa dan kebutuhan Lebaran dari para pedagang lokal terbaik."
    - Tombol CTA (Call-to-Action): "Lihat Katalog" (link ke halaman kategori atau produk terpopuler).
    - Ilustrasi atau foto collage bergaya neobrutalism.
- **Kategori Populer:**
    - Judul Section: "Kategori Pilihan" dengan border kiri tebal atau aksen garis bawah.
    - Menampilkan 4-6 kategori dalam bentuk badge atau kartu kecil.
    - Saat diklik, membawa pengguna ke halaman kategori yang sesuai.
- **Produk Unggulan:**
    - Judul Section: "Rekomendasi Spesial Ramadhan"
    - Menampilkan grid 2-4 kartu produk (menyesuaikan layar).
    - **Kartu Produk (Component):**
        - Gambar Produk (dengan rasio 1:1).
        - Nama Produk (teks tebal, terpotong jika terlalu panjang).
        - Harga (dengan simbol Rp, ukuran font besar).
        - Nama Penjual (font lebih kecil).
        - Tombol kecil "Lihat Detail" atau seluruh kartu bisa diklik menuju halaman detail produk.
- **Footer:** Informasi hak cipta, tautan media sosial (jika ada), lokasi bazar.

### 5.2. Halaman Kategori (`/kategori` atau `/kategori/[nama-kategori]`)
- **Judul Halaman:** "Kategori: [Nama Kategori]" (misal: Kategori: Takjil Manis).
- **Sidebar (Opsional untuk Desktop):** Daftar semua kategori yang bisa difilter. Di mobile bisa jadi dropdown.
- **Grid Produk:** Menampilkan semua produk yang termasuk dalam kategori tersebut, menggunakan komponen **Kartu Produk** yang sama seperti di Home.
- **Kondisi Kosong:** Jika tidak ada produk di kategori tersebut, tampilkan pesan "Belum ada produk di kategori ini".

### 5.3. Halaman Detail Produk pakai slug (`/produk/[nama-produk]`)
- **Breadcrumb:** Navigasi sederhana (Home > Kategori > Nama Produk).
- **Layout 2 Kolom (Desktop):**
    - **Kolom Kiri:** Gambar produk ukuran besar.
    - **Kolom Kanan:**
        - Nama Produk.
        - Harga (sangat besar dan bold).
        - Nama Penjual / Nama Stan.
        - **Informasi Kontak & Lokasi (Penting!):**
            - Nomor WhatsApp (dengan tombol yang bisa langsung membuka chat WA).
            - Lokasi Stand (misal: "Tengah, Blok A, No. 3").
        - **Deskripsi Produk:** Detail mengenai produk, varian, atau bahan.
        - (Opsional) Tombol "Simpan" atau "Bagikan".
- **Produk Terkait:** Di bagian bawah, tampilkan 2-4 produk lain dari kategori yang sama.

---

## 6. Data & API (Struktur Sementara)

Karena tidak ada backend, kita akan menggunakan file TypeScript (misal: `data/products.ts`) untuk menyimpan data.

**Struktur Tipe Data (TypeScript Interface):**

```typescript
// types/index.ts
export interface Product {
  id: string | number;
  name: string;
  price: number;
  seller: string;
  category: string; // ID atau slug kategori
  categoryName: string;
  imageUrl: string;
  description: string;
  whatsappNumber: string; // Format: 628xxxx
  location: string; // Deskripsi lokasi stan
  isFeatured?: boolean; // Untuk ditampilkan di homepage
}

export interface Category {
  id: string | number;
  name: string;
  slug: string; // Untuk URL, misal: 'makanan-berat'
  icon?: string; // Nama icon atau gambar kecil
}
```

---

## 7. Pertimbangan Teknis (Vue, TS, Tailwind)

- **Setup Project:** Menggunakan Vite untuk build tool yang cepat.
- **Routing:** Menggunakan Vue Router untuk menangani navigasi ke halaman Home, Kategori, dan Detail Produk.
    - *Contoh Route:* `/category/:slug` dan `/product/:id`.
- **State Management:**
    - Untuk skala sekecil ini, **Composition API dengan `ref` dan `reactive`** di dalam komponen sudah cukup.
    - Kita bisa membuat **Composables** (misal: `useProducts.ts`) untuk memisahkan logika pengambilan dan filtering data dari komponen UI.
- **TypeScript:**
    - Mendefinisikan `interface` untuk `Product` dan `Category`.
    - Menggunakan `defineProps` dengan tipe untuk komponen seperti `ProductCard.vue`.
- **Tailwind CSS:**
    - Membuat konfigurasi khusus di `tailwind.config.js` untuk mengatur warna tema dan mungkin menambahkan utility class untuk bayangan khas neobrutalism.
    - Contoh utility class di CSS global:
    ```css
    .shadow-neo {
      box-shadow: 6px 6px 0px 0px #000000;
    }
    .border-neo {
      @apply border-4 border-black;
    }
    ```
- **Komponen:**
    - Membuat komponen yang dapat digunakan ulang (reusable components) seperti `ProductCard.vue`, `CategoryBadge.vue`, `Button.vue`, `Container.vue` (untuk mengatur lebar konten).

---

## 8. Kriteria Sukses & Metrik (Draft)

- **Fungsionalitas:** Semua link dan navigasi berfungsi dengan baik. Tidak ada error di konsol JavaScript.
- **Kesesuaian Desain:** Halaman sudah sesuai dengan mockup desain Neobrutalism yang telah disepakati.
- **Kinerja:** Mendapatkan skor performa yang baik di Lighthouse, terutama untuk First Contentful Paint (FCP) dan Largest Contentful Paint (LCP). Karena statis, target >90.
- **User Testing (Sederhana):** Pengguna (teman/keluarga) dapat menemukan informasi kontak penjual dan lokasi stan dalam waktu kurang dari 30 detik.

---

PRD ini dapat digunakan sebagai acuan utama selama proses desain dan pengembangan. Semoga membantu dan sukses dengan proyeknya!