# SIPANTI

Sistem Informasi Pengelolaan Panti Asuhan Amal Mulia Qurani. Aplikasi ini dipakai pengurus untuk mengelola data anak asuh, mulai dari melihat daftar, detail, menambah data, sampai edit dan hapus.

Project ini dibuat bertahap sebagai tugas Perancangan dan Pemrograman Web, mulai dari HTML/CSS, JavaScript, sampai React.

## Halaman yang ada

- `/` — homepage panti
- `/login` — form login pengurus
- `/dashboard` — ringkasan data panti
- `/data-anak` — daftar anak asuh, ada pencarian, filter, dan pagination
- `/data-anak/:id` — detail satu anak asuh
- `/tambah-anak` — form tambah anak asuh
- `/edit-anak/:id` — form edit anak asuh

## Week 6 — React Dasar

Pada week ini tampilan yang sebelumnya dibuat dengan HTML/CSS dipindahkan ke React.

- Routing pakai react-router-dom di `src/App.jsx`, tiap halaman punya route sendiri
- Data anak asuh disimpan di state pakai `useState` di `App.jsx`, lalu dikirim ke halaman daftar, detail, tambah, dan edit lewat props
- Menampilkan daftar pakai `.map()` dengan `key={anak.id}` di `DaftarAnak.jsx`
- Form tambah dan edit pakai controlled component, semua input punya `value` dan `onChange`, plus validasi field wajib sebelum disimpan (`FormAnak.jsx`)
- Conditional rendering di `DataAnak.jsx`, kalau datanya kosong muncul tulisan "Belum ada data Anak Asuh", kalau hasil filter kosong muncul pesan lain
- Bisa tambah, edit, dan hapus data. Untuk hapus dan logout ada dialog konfirmasi dulu, setelah itu muncul notifikasi
- CSS dipisah di folder `src/styles/`, jadi file komponen isinya hanya markup

Catatan: di week 6 datanya masih array statis di dalam kode, belum mengambil dari server.

## Week 7 — AJAX dan Konsumsi Mock API

Pada week ini data anak asuh tidak lagi ditulis langsung di dalam kode, tapi diambil dari mock API secara asinkron.

### Endpoint yang dipakai

Endpoint yang dipakai adalah /api/anak-asuh.json, yaitu file public/api/anak-asuh.json yang disajikan langsung oleh Vite. Mock API ini dipilih karena datanya sesuai dengan tema aplikasi (data anak asuh), tidak butuh database maupun API key, dan tidak bergantung pada layanan pihak lain sehingga tetap bisa dijalankan saat demo. Nanti di pekan 11 endpoint ini yang diganti dengan backend sungguhan.

### Cara pengambilan data

- Pengambilan data ada di fungsi ambilDaftarAnak() pada src/services/anakAsuhApi.js, memakai fetch()
- Setelah response diterima, status respon.ok diperiksa. Kalau gagal, fungsi melempar Error dengan pesan yang jelas, begitu juga kalau isi response bukan array
- Hasilnya berupa array data anak asuh yang siap dipakai halaman

### Penanganan loading, success, dan error

- src/App.jsx menyimpan state memuat, pesanError, dan percobaan
- useEffect memanggil ambilDaftarAnak(). Saat berhasil, data disimpan ke state daftarAnak; saat gagal, pesan error disimpan ke pesanError; setelah selesai, memuat diubah menjadi false
- Kondisi loading ditampilkan dengan SkeletonDaftar, kondisi error ditampilkan dengan PeringatanError beserta tombol "Coba Lagi"
- Tombol "Coba Lagi" memanggil muatUlang(), yang menaikkan nilai percobaan sehingga useEffect dijalankan ulang dan data diambil lagi
- Data hasil API ditampilkan sebagai list lewat DaftarAnak → KartuAnak dengan key={anak.id}
- Halaman detail dan edit juga menunggu data selesai dimuat, supaya tidak menampilkan "data anak asuh tidak ditemukan" saat data masih diambil

### Cara mengambil screenshot tiap kondisi

- Loading: nilai JEDA_MINIMAL di src/services/anakAsuhApi.js dinaikkan sementara (dari 700 ms), halaman di-refresh, lalu screenshot. Setelah itu nilainya dikembalikan
- Success: halaman daftar dibuka seperti biasa sampai data tampil
- Error: URL_DAFTAR_ANAK di src/services/anakAsuhApi.js diubah sementara ke alamat yang salah, halaman di-refresh sampai panel error dan tombol "Coba Lagi" muncul, lalu alamatnya dikembalikan seperti semula

Screenshot ketiga kondisi ada di docs/ss/week 7/.

Catatan: tambah, edit, dan hapus masih mengubah state di aplikasi, jadi perubahannya hilang saat halaman di-refresh.

## Screenshot

Bukti tampilan tiap tahap ada di docs/ss/week 6/ dan docs/ss/week 7/.
