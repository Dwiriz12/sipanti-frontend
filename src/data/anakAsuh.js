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

export const OPSI_STATUS_PENDIDIKAN = [
  'Belum/Tidak Sekolah',
  'Sedang Sekolah',
  'Sedang Kuliah',
  'Sudah Lulus'
]

export function statusPendidikanAnak(anak) {
  if (anak.statusPendidikan) return anak.statusPendidikan

  return anak.sekolah ? 'Sedang Sekolah' : 'Belum/Tidak Sekolah'
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
