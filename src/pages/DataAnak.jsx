import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Users } from 'lucide-react'
import PageShell from '../components/PageShell'
import PageHeader from '../components/PageHeader'
import StatRingkasan from '../components/StatRingkasan'
import ToolbarAnak from '../components/ToolbarAnak'
import DaftarAnak from '../components/DaftarAnak'
import PaginationAnak from '../components/PaginationAnak'
import ConfirmDialog from '../components/ConfirmDialog'
import { useToast } from '../components/toastContext'

const PER_HALAMAN_AWAL = 8

function DataAnak({ daftarAnak, onHapus }) {
  const toast = useToast()
  const [cari, setCari] = useState('')
  const [status, setStatus] = useState('Semua')
  const [gender, setGender] = useState('Semua')
  const [urutan, setUrutan] = useState('terbaru')
  const [mode, setMode] = useState('grid')
  const [halaman, setHalaman] = useState(1)
  const [perHalaman, setPerHalaman] = useState(PER_HALAMAN_AWAL)
  const [anakDihapus, setAnakDihapus] = useState(null)

  function ubahCari(nilai) {
    setCari(nilai)
    setHalaman(1)
  }

  function ubahStatus(nilai) {
    setStatus(nilai)
    setHalaman(1)
  }

  function ubahGender(nilai) {
    setGender(nilai)
    setHalaman(1)
  }

  function ubahUrutan(nilai) {
    setUrutan(nilai)
    setHalaman(1)
  }

  function ubahPerHalaman(nilai) {
    setPerHalaman(nilai)
    setHalaman(1)
  }

  const anakTersaring = useMemo(() => {
    const kataKunci = cari.trim().toLowerCase()

    const hasil = daftarAnak.filter((anak) => {
      const cocokCari =
        kataKunci === '' ||
        anak.nama.toLowerCase().includes(kataKunci) ||
        (anak.sekolah ?? '').toLowerCase().includes(kataKunci)

      const cocokStatus = status === 'Semua' || anak.status === status
      const cocokGender = gender === 'Semua' || anak.jenisKelamin === gender

      return cocokCari && cocokStatus && cocokGender
    })

    return [...hasil].sort((anakA, anakB) => {
      if (urutan === 'nama') {
        return anakA.nama.localeCompare(anakB.nama, 'id')
      }

      const tanggalA = new Date(anakA.tanggalMasukPanti).getTime()
      const tanggalB = new Date(anakB.tanggalMasukPanti).getTime()

      return urutan === 'terlama' ? tanggalA - tanggalB : tanggalB - tanggalA
    })
  }, [daftarAnak, cari, status, gender, urutan])

  const totalHalaman = Math.max(1, Math.ceil(anakTersaring.length / perHalaman))
  const halamanAktif = Math.min(halaman, totalHalaman)
  const mulai = (halamanAktif - 1) * perHalaman
  const akhir = Math.min(mulai + perHalaman, anakTersaring.length)
  const anakTampil = anakTersaring.slice(mulai, akhir)

  function handleHapus(anak) {
    setAnakDihapus(anak)
  }

  function konfirmasiHapus() {
    onHapus(anakDihapus.id)
    toast.sukses(`Data ${anakDihapus.nama} berhasil dihapus.`)
    setAnakDihapus(null)
  }

  return (
    <PageShell>
      <PageHeader
        judul="Data Anak Asuh"
        subjudul="Kelola data anak asuh Panti Asuhan Amal Mulia Qurani"
      />

      <StatRingkasan daftarAnak={daftarAnak} />

      <ToolbarAnak
        cari={cari}
        onCari={ubahCari}
        status={status}
        onStatus={ubahStatus}
        gender={gender}
        onGender={ubahGender}
        urutan={urutan}
        onUrutan={ubahUrutan}
        mode={mode}
        onMode={setMode}
      />

      {daftarAnak.length === 0 ? (
        <div className="data-kosong">
          <span className="data-kosong-icon">
            <Users size={26} />
          </span>
          <h2>Belum ada data Anak Asuh</h2>
          <p>
            Daftar anak asuh masih kosong. Tambahkan data anak asuh pertama
            untuk mulai mengelola.
          </p>
          <Link to="/tambah-anak" className="data-kosong-aksi">
            <Plus size={16} />
            Tambah Anak
          </Link>
        </div>
      ) : anakTersaring.length === 0 ? (
        <div className="data-kosong">
          <span className="data-kosong-icon">
            <Search size={26} />
          </span>
          <h2>Tidak ada anak asuh yang cocok</h2>
          <p>
            Coba ubah kata kunci pencarian atau filter status dan jenis kelamin.
          </p>
        </div>
      ) : (
        <>
          <DaftarAnak
            daftarAnak={anakTampil}
            mode={mode}
            onHapus={handleHapus}
          />

          <PaginationAnak
            halaman={halamanAktif}
            totalHalaman={totalHalaman}
            onPilihHalaman={setHalaman}
            perHalaman={perHalaman}
            onPerHalaman={ubahPerHalaman}
            total={anakTersaring.length}
            mulai={mulai}
            akhir={akhir}
          />
        </>
      )}

      <ConfirmDialog
        buka={Boolean(anakDihapus)}
        judul="Hapus data anak asuh?"
        pesan={`Data ${anakDihapus?.nama ?? ''} akan dihapus permanen dari daftar anak asuh.`}
        labelKonfirmasi="Ya, Hapus"
        tipe="bahaya"
        onKonfirmasi={konfirmasiHapus}
        onBatal={() => setAnakDihapus(null)}
      />
    </PageShell>
  )
}

export default DataAnak
