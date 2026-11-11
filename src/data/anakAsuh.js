const NAMA_BULAN = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
]

export function formatTanggal(tanggal) {
  if (!tanggal) return '-'

  const [tahun, bulan, hari] = tanggal.split('-')
  const namaBulan = NAMA_BULAN[Number(bulan) - 1]

  if (!tahun || !namaBulan || !hari) return tanggal

  return `${Number(hari)} ${namaBulan} ${tahun}`
}

export function hitungUsia(tanggalLahir) {
  if (!tanggalLahir) return ''

  const lahir = new Date(tanggalLahir)
  const sekarang = new Date()

  if (Number.isNaN(lahir.getTime())) return ''

  let usia = sekarang.getFullYear() - lahir.getFullYear()
  const selisihBulan = sekarang.getMonth() - lahir.getMonth()

  if (selisihBulan < 0 || (selisihBulan === 0 && sekarang.getDate() < lahir.getDate())) {
    usia -= 1
  }

  return usia > 0 ? `${usia} Tahun` : ''
}

export function buatIdAnak(daftar) {
  const tahun = new Date().getFullYear()

  const nomorTerbesar = daftar.reduce((maks, anak) => {
    const nomor = Number(String(anak.id ?? '').split('-').pop())

    return Number.isFinite(nomor) && nomor > maks ? nomor : maks
  }, 0)

  return `AA-${tahun}-${String(nomorTerbesar + 1).padStart(3, '0')}`
}

const dokumenDasar = (nama) => [
  {
    label: 'Akta Kelahiran',
    namaFile: `akta_${nama}.pdf`,
    wajib: true
  },
  {
    label: 'Kartu Keluarga',
    namaFile: `kk_${nama}.pdf`,
    wajib: true
  },
  {
    label: 'Surat Keterangan Sehat',
    namaFile: `sehat_${nama}.pdf`,
    wajib: true
  }
]

const kegiatanDasar = [
  { nama: 'Tahfidz Al-Quran', tanggal: '2026-05-01' },
  { nama: 'Santunan Bulanan', tanggal: '2026-05-07' },
  { nama: 'Kajian Mingguan', tanggal: '2026-05-15' },
  { nama: 'Kunjungan Donatur', tanggal: '2026-05-20' }
]

export const dataAnakAwal = [
  {
    id: 'AA-2024-001',
    nama: 'Ahmad Fauzi',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2014-06-03',
    usia: '12 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Negeri 1',
    kelas: '7',
    tahunMasuk: '2024',
    golonganDarah: 'O',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2024-01-15',
    asalDaerah: 'Bandung',
    namaWali: 'Bapak Budi Santoso',
    teleponWali: '0812-3456-7890',
    keterangan: 'Anak yang rajin, sopan, dan aktif dalam kegiatan.',
    foto: null,
    dokumen: dokumenDasar('ahmad_fauzi'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-002',
    nama: 'Aisyah Humaira',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Sumedang',
    tanggalLahir: '2013-02-20',
    usia: '13 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Islam Al-Falah',
    kelas: '8',
    tahunMasuk: '2024',
    golonganDarah: 'A',
    riwayatPenyakit: 'Asma ringan',
    alergi: 'Debu',
    tanggalMasukPanti: '2024-02-20',
    asalDaerah: 'Sumedang',
    namaWali: 'Ibu Rina Marlina',
    teleponWali: '0813-2211-4455',
    keterangan: 'Suka membaca dan membantu pengurus menyiapkan kegiatan.',
    foto: null,
    dokumen: dokumenDasar('aisyah_humaira'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-003',
    nama: 'Rizky Maulana',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Garut',
    tanggalLahir: '2015-03-10',
    usia: '11 Tahun',
    status: 'Aktif',
    sekolah: 'SD Islam Terpadu',
    kelas: '5',
    tahunMasuk: '2024',
    golonganDarah: 'B',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2024-03-10',
    asalDaerah: 'Garut',
    namaWali: 'Bapak Dedi Kurniawan',
    teleponWali: '0857-8899-1122',
    keterangan: 'Aktif dalam kegiatan olahraga dan senam bersama.',
    foto: null,
    dokumen: dokumenDasar('rizky_maulana'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-004',
    nama: 'Nabila Putri',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Cimahi',
    tanggalLahir: '2014-04-05',
    usia: '12 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Negeri 3',
    kelas: '7',
    tahunMasuk: '2024',
    golonganDarah: 'AB',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Seafood',
    tanggalMasukPanti: '2024-04-05',
    asalDaerah: 'Cimahi',
    namaWali: 'Ibu Siti Nurjanah',
    teleponWali: '0821-3344-5566',
    keterangan: 'Disiplin dan sering menjadi ketua kelompok belajar.',
    foto: null,
    dokumen: dokumenDasar('nabila_putri'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-005',
    nama: 'Muhammad Ali',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2016-01-12',
    usia: '10 Tahun',
    status: 'Aktif',
    sekolah: 'SD Islam Terpadu',
    kelas: '4',
    tahunMasuk: '2024',
    golonganDarah: 'O',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2024-05-12',
    asalDaerah: 'Bandung',
    namaWali: 'Bapak Hendra Gunawan',
    teleponWali: '0812-7788-9900',
    keterangan: 'Ceria dan mudah bergaul dengan teman-temannya.',
    foto: null,
    dokumen: dokumenDasar('muhammad_ali'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-006',
    nama: 'Fatimah Zahra',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Tasikmalaya',
    tanggalLahir: '2015-07-18',
    usia: '11 Tahun',
    status: 'Aktif',
    sekolah: 'SD Islam Al-Falah',
    kelas: '5',
    tahunMasuk: '2024',
    golonganDarah: 'A',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2024-05-18',
    asalDaerah: 'Tasikmalaya',
    namaWali: 'Ibu Lilis Suryani',
    teleponWali: '0856-2233-4411',
    keterangan: 'Rajin mengikuti kajian dan hafalan surat pendek.',
    foto: null,
    dokumen: dokumenDasar('fatimah_zahra'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-007',
    nama: 'Abdullah Hasan',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2013-09-22',
    usia: '13 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Negeri 3',
    kelas: '8',
    tahunMasuk: '2024',
    golonganDarah: 'B',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2024-05-22',
    asalDaerah: 'Bandung',
    namaWali: 'Bapak Ahmad Subarjo',
    teleponWali: '0813-5566-7788',
    keterangan: 'Suka membantu pengurus di bagian kebersihan panti.',
    foto: null,
    dokumen: dokumenDasar('abdullah_hasan'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2023-008',
    nama: 'Siti Nurhaliza',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Bogor',
    tanggalLahir: '2012-03-14',
    usia: '14 Tahun',
    status: 'Alumni',
    sekolah: 'SMA Negeri 1',
    kelas: '10',
    tahunMasuk: '2023',
    golonganDarah: 'O',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2023-10-10',
    asalDaerah: 'Bogor',
    namaWali: 'Ibu Nurhayati',
    teleponWali: '0812-1010-2020',
    keterangan: 'Lulus dan melanjutkan pendidikan di SMA Negeri 1.',
    foto: null,
    dokumen: dokumenDasar('siti_nurhaliza'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-009',
    nama: 'Zidan Malik',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2016-11-02',
    usia: '10 Tahun',
    status: 'Aktif',
    sekolah: 'SD Muhammadiyah',
    kelas: '4',
    tahunMasuk: '2024',
    golonganDarah: 'AB',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2024-03-25',
    asalDaerah: 'Bandung',
    namaWali: 'Bapak Iwan Setiawan',
    teleponWali: '0857-6060-7070',
    keterangan: 'Anak pendiam tetapi sangat teliti saat belajar.',
    foto: null,
    dokumen: dokumenDasar('zidan_malik'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-010',
    nama: 'Mutiara Ananda',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Subang',
    tanggalLahir: '2014-08-30',
    usia: '12 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Negeri 4',
    kelas: '7',
    tahunMasuk: '2024',
    golonganDarah: 'B',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Dingin',
    tanggalMasukPanti: '2024-04-30',
    asalDaerah: 'Subang',
    namaWali: 'Ibu Ani Suryani',
    teleponWali: '0813-9191-3131',
    keterangan: 'Senang menari dan tampil pada acara panti.',
    foto: null,
    dokumen: dokumenDasar('mutiara_ananda'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2023-011',
    nama: 'Hafidz Nur',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2011-05-07',
    usia: '15 Tahun',
    status: 'Alumni',
    sekolah: 'SMA Islam Terpadu',
    kelas: '11',
    tahunMasuk: '2023',
    golonganDarah: 'O',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2023-11-07',
    asalDaerah: 'Bandung',
    namaWali: 'Bapak Asep Saepudin',
    teleponWali: '0812-4040-5050',
    keterangan: 'Alumni yang masih aktif membantu kegiatan tahfidz.',
    foto: null,
    dokumen: dokumenDasar('hafidz_nur'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2024-012',
    nama: 'Khadijah Azzahra',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Bandung',
    tanggalLahir: '2013-12-18',
    usia: '13 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Islam Al-Azhar',
    kelas: '8',
    tahunMasuk: '2024',
    golonganDarah: 'A',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2024-01-18',
    asalDaerah: 'Bandung',
    namaWali: 'Ibu Fitri Handayani',
    teleponWali: '0856-8181-9292',
    keterangan: 'Aktif dalam kegiatan keputrian dan bimbingan belajar.',
    foto: null,
    dokumen: dokumenDasar('khadijah_azzahra'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2025-013',
    nama: 'Andi Prasetyo',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2014-02-11',
    usia: '12 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Negeri 2',
    kelas: '7',
    tahunMasuk: '2025',
    golonganDarah: 'O',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2025-07-14',
    asalDaerah: 'Bandung',
    namaWali: 'Bapak Rudi Prasetyo',
    teleponWali: '0812-2828-3838',
    keterangan: 'Gemar bermain sepak bola dan mengikuti kegiatan pramuka.',
    foto: '/images/anak/andi-prasetyo.png',
    dokumen: dokumenDasar('andi_prasetyo'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2025-014',
    nama: 'Dina April',
    jenisKelamin: 'Perempuan',
    tempatLahir: 'Cianjur',
    tanggalLahir: '2015-04-09',
    usia: '11 Tahun',
    status: 'Aktif',
    sekolah: 'SD Negeri 5',
    kelas: '5',
    tahunMasuk: '2025',
    golonganDarah: 'B',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2025-08-01',
    asalDaerah: 'Cianjur',
    namaWali: 'Ibu Dewi Aprilia',
    teleponWali: '0857-7373-8484',
    keterangan: 'Ceria dan senang mengikuti kegiatan kesenian.',
    foto: '/images/anak/dina-april.png',
    dokumen: dokumenDasar('dina_april'),
    riwayatKegiatan: kegiatanDasar
  },
  {
    id: 'AA-2025-015',
    nama: 'Farendra Alfiansyah',
    jenisKelamin: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2014-10-27',
    usia: '12 Tahun',
    status: 'Aktif',
    sekolah: 'SMP Negeri 5',
    kelas: '7',
    tahunMasuk: '2025',
    golonganDarah: 'A',
    riwayatPenyakit: 'Tidak ada riwayat penyakit',
    alergi: 'Tidak ada alergi',
    tanggalMasukPanti: '2025-09-09',
    asalDaerah: 'Bandung',
    namaWali: 'Bapak Alfian Nugraha',
    teleponWali: '0813-6363-7474',
    keterangan: 'Anak yang santun dan aktif dalam kegiatan keagamaan.',
    foto: '/images/anak/farendra-alfiansyah.png',
    dokumen: dokumenDasar('farendra_alfiansyah'),
    riwayatKegiatan: kegiatanDasar
  }
]
