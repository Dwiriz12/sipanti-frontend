const URL_ANAK_ASUH = 'http://localhost:3000/anak-asuh'

    async function bacaJson(respon) {
      if (!respon.ok) {
        throw new Error(`Gagal mengakses server (HTTP 
  ${respon.status}).`)
      }

      return respon.json()
    }

    export async function ambilDaftarAnak() {
      const respon = await fetch(URL_ANAK_ASUH)
      return bacaJson(respon)
    }

    export async function tambahAnak(data) {
      const respon = await fetch(URL_ANAK_ASUH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rapikan(data)),
      })

      return bacaJson(respon)
    }

    export async function ubahAnak(id, data) {
      const respon = await fetch(`${URL_ANAK_ASUH}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rapikan(data)),
      })

      return bacaJson(respon)
    }

    export async function hapusAnak(id) {
      const respon = await fetch(`${URL_ANAK_ASUH}/${id}`, {
        method: 'DELETE',
      })

      return bacaJson(respon)
    }

    function rapikan(data) {
      const hasil = { ...data }

      delete hasil.usia
      delete hasil.foto

      Object.keys(hasil).forEach((kunci) => {
        if (hasil[kunci] === '' || hasil[kunci] === null) {
          delete hasil[kunci]
        }
      })

      return hasil
    }