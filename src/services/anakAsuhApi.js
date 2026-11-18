const URL_DAFTAR_ANAK = '/api/anak-asuh.json'

const JEDA_MINIMAL = 700

export async function ambilDaftarAnak() {
  const mulai = Date.now()

  let respon

  try {
    respon = await fetch(URL_DAFTAR_ANAK)
  } catch {
    throw new Error(
      'Tidak dapat terhubung ke server. Periksa koneksi Anda lalu coba lagi.'
    )
  }

  if (!respon.ok) {
    throw new Error(`Gagal memuat data anak asuh (HTTP ${respon.status}).`)
  }

  let data

  try {
    data = await respon.json()
  } catch {
    throw new Error('Format data anak asuh tidak valid.')
  }

  if (!Array.isArray(data)) {
    throw new Error('Format data anak asuh tidak valid.')
  }

  const sisaJeda = JEDA_MINIMAL - (Date.now() - mulai)

  if (sisaJeda > 0) {
    await new Promise((resolve) => setTimeout(resolve, sisaJeda))
  }

  return data
}
