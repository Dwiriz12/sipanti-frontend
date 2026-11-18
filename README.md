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

## Screenshot

Bukti tampilan tiap tahap ada di `docs/ss/week 6/`.
