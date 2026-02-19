import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 1,
    name: 'Es Kuwut Bali Segar',
    slug: 'es-kuwut-bali-segar',
    price: 12000,
    seller: 'Warung Bu Rini',
    category: 'minuman-segar',
    categoryName: 'Minuman Segar',
    imageUrl:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    description: `<p>Es Kuwut Bali Segar ini diracik dari kelapa muda, serutan melon, biji selasih, dan perasan jeruk nipis yang memberi rasa segar di setiap tegukan. Karakter rasanya ringan, manisnya pas, dan tetap nyaman diminum saat perut baru berbuka.</p>
<p>Kami menggunakan bahan harian yang selalu fresh agar aroma buah tetap keluar dan teksturnya tidak berubah. Minuman ini jadi favorit pengunjung yang ingin opsi takjil cair tanpa rasa terlalu berat, terutama saat cuaca panas menjelang maghrib.</p>
<p>Tersedia dalam ukuran reguler dan jumbo untuk berbagi bersama keluarga. Jika kamu ingin level manis lebih rendah atau tambahan es batu, tim kami bisa sesuaikan langsung saat pemesanan di stand.</p>`,
    whatsappNumber: '6281211112001',
    location: 'Zona Tengah, Blok A, No. 03',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Paket Nasi Kebuli Kambing',
    slug: 'paket-nasi-kebuli-kambing',
    price: 35000,
    seller: 'Dapur Timur Tengah Al-Hijrah',
    category: 'makanan-berat',
    categoryName: 'Makanan Berat',
    imageUrl:
      'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80',
    description: `<p>Paket Nasi Kebuli Kambing ini dimasak dengan beras premium dan campuran rempah khas Timur Tengah yang harum. Daging kambing kami olah perlahan hingga empuk, sehingga bumbunya meresap tanpa meninggalkan aroma prengus berlebihan.</p>
<p>Setiap porsi dilengkapi acar segar dan sambal kurma homemade yang menjadi ciri khas menu ini. Kombinasi rasa gurih, sedikit manis, dan rempah hangat membuat menu ini cocok untuk santap berbuka maupun makan malam setelah tarawih.</p>
<p>Kami menyediakan opsi porsi personal dan paket keluarga untuk acara buka bersama. Pemesanan dalam jumlah banyak disarankan H-1 agar proses penyajian lebih cepat dan kualitas tetap optimal.</p>`,
    whatsappNumber: '6281311112002',
    location: 'Zona Barat, Blok B, No. 11',
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Kurma Cokelat Isi Almond',
    slug: 'kurma-cokelat-isi-almond',
    price: 45000,
    seller: 'Sweet Date Corner',
    category: 'kue-kering-lebaran',
    categoryName: 'Kue Kering Lebaran',
    imageUrl:
      'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80',
    description: `<p>Kurma Cokelat Isi Almond dibuat dari kurma pilihan dengan tingkat kemanisan alami yang stabil. Bagian luar dilapisi cokelat hitam berkualitas, lalu diisi almond panggang untuk memberi tekstur renyah yang kontras.</p>
<p>Produk ini cocok sebagai camilan setelah berbuka, teman minum teh, atau suguhan tamu saat momen silaturahmi Ramadhan. Rasa cokelatnya tidak terlalu pahit, jadi tetap ramah untuk semua umur termasuk anak-anak.</p>
<p>Kami menyediakan kemasan reguler dan gift box yang siap dijadikan hampers. Untuk pemesanan custom kartu ucapan, kamu bisa konfirmasi tema dan nama penerima melalui WhatsApp penjual.</p>`,
    whatsappNumber: '6281411112003',
    location: 'Zona Tengah, Blok C, No. 07',
    isFeatured: true,
  },
  {
    id: 4,
    name: 'Kolak Pisang Ubi Family Pack',
    slug: 'kolak-pisang-ubi-family-pack',
    price: 28000,
    seller: 'Takjil Nenek Sari',
    category: 'takjil-manis',
    categoryName: 'Takjil Manis',
    imageUrl:
      'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800&q=80',
    description: `<p>Kolak Pisang Ubi Family Pack menggunakan santan segar dan gula aren asli untuk menghasilkan kuah yang legit serta creamy. Isian pisang kepok dan ubi merah dipilih dengan tingkat kematangan ideal agar teksturnya lembut namun tidak hancur.</p>
<p>Rasanya dirancang seimbang, tidak terlalu manis, sehingga tetap nyaman dinikmati oleh seluruh anggota keluarga. Banyak pelanggan memilih menu ini sebagai takjil utama karena porsinya pas untuk dinikmati bersama di rumah.</p>
<p>Tersedia pilihan tambahan topping kolang-kaling dan roti tawar jika ingin sensasi lebih variatif. Kami juga menerima pre-order untuk paket takjil komunitas atau kantor selama bulan Ramadhan.</p>`,
    whatsappNumber: '6281511112004',
    location: 'Zona Timur, Blok D, No. 02',
    isFeatured: true,
  },
  {
    id: 5,
    name: 'Gamis Linen Earth Tone',
    slug: 'gamis-linen-earth-tone',
    price: 189000,
    seller: 'Rumah Muslimah Aila',
    category: 'fashion-muslim',
    categoryName: 'Fashion Muslim',
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    description: `<p>Gamis Linen Earth Tone dirancang dengan bahan linen yang ringan, adem, dan tetap jatuh saat dipakai seharian. Potongan longgar membuatnya nyaman untuk aktivitas Ramadhan seperti bekerja, menghadiri kajian, atau berbuka bersama keluarga.</p>
<p>Warna earth tone yang kami pilih memberi kesan elegan dan mudah dipadukan dengan hijab warna netral maupun bold. Jahitan bagian pundak dan lengan dibuat rapi agar siluet tetap cantik meski modelnya sederhana.</p>
<p>Tersedia beberapa ukuran dari S hingga XXL serta opsi penyesuaian panjang lengan. Kamu bisa mencoba langsung di stand atau konsultasi ukuran via WhatsApp sebelum checkout.</p>`,
    whatsappNumber: '6281611112005',
    location: 'Zona Selatan, Blok F, No. 09',
  },
  {
    id: 6,
    name: 'Hampers Eid Delight',
    slug: 'hampers-eid-delight',
    price: 250000,
    seller: 'Kado Kita Studio',
    category: 'aksesoris-hampers',
    categoryName: 'Aksesoris & Hampers',
    imageUrl:
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
    description: `<p>Hampers Eid Delight adalah paket bingkisan premium yang disusun dengan tema hangat dan elegan untuk momen Ramadhan hingga Idulfitri. Dalam satu box, kamu akan mendapatkan kurma pilihan, teh premium, tasbih kayu, dan kartu ucapan personal.</p>
<p>Setiap item dikurasi agar memiliki kualitas bagus sekaligus tampilan yang rapi ketika diterima penerima hadiah. Desain kemasan menggunakan kombinasi warna lembut sehingga cocok untuk keluarga, rekan kerja, maupun relasi bisnis.</p>
<p>Kami menerima pesanan satuan maupun korporat dengan opsi branding nama pengirim. Untuk jumlah besar, silakan lakukan konfirmasi lebih awal agar proses produksi dan pengemasan dapat terjadwal dengan baik.</p>`,
    whatsappNumber: '6281711112006',
    location: 'Zona Selatan, Blok G, No. 05',
  },
  {
    id: 7,
    name: 'Dimsum Ayam Udang Kukus',
    slug: 'dimsum-ayam-udang-kukus',
    price: 30000,
    seller: 'Dimsum Pojok Raya',
    category: 'makanan-berat',
    categoryName: 'Makanan Berat',
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: `<p>Dimsum Ayam Udang Kukus ini berisi 10 potong dimsum dengan komposisi daging ayam dan udang yang padat. Tekstur kulitnya lembut, sementara isiannya juicy dan terasa gurih sejak gigitan pertama.</p>
<p>Kami mengukus dimsum dalam batch kecil agar suhu dan kualitas tetap terjaga saat disajikan. Menu ini sangat cocok untuk berbuka ringan sebelum lanjut ke menu utama, atau sebagai camilan malam setelah ibadah tarawih.</p>
<p>Setiap pembelian sudah termasuk chili oil rumahan yang pedas aromatik dan saus pendamping. Jika kamu tidak suka pedas, tersedia juga varian saus original yang lebih ramah untuk anak-anak.</p>`,
    whatsappNumber: '6281811112007',
    location: 'Zona Barat, Blok B, No. 14',
  },
  {
    id: 8,
    name: 'Es Timun Serut Mint',
    slug: 'es-timun-serut-mint',
    price: 10000,
    seller: 'Segar Maksimal',
    category: 'minuman-segar',
    categoryName: 'Minuman Segar',
    imageUrl:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    description: `<p>Es Timun Serut Mint adalah minuman sederhana dengan sensasi super segar berkat timun serut pilihan, daun mint, dan perasan lemon. Rasanya ringan dan bersih di mulut, cocok diminum saat tubuh membutuhkan hidrasi cepat setelah puasa.</p>
<p>Manisnya menggunakan takaran yang seimbang supaya tidak berlebihan dan tetap menyegarkan. Minuman ini banyak dipilih pengunjung yang ingin alternatif selain sirup atau minuman creamy saat iftar.</p>
<p>Tersedia opsi less sugar, tanpa mint, atau tambahan chia seed sesuai preferensi. Kamu juga bisa pesan dalam jumlah banyak untuk acara buka bersama komunitas maupun keluarga besar.</p>`,
    whatsappNumber: '6281911112008',
    location: 'Zona Tengah, Blok A, No. 08',
  },
]
