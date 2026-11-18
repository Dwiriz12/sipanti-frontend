import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DataAnak from './pages/DataAnak'
import DetailAnak from './pages/DetailAnak'
import TambahAnak from './pages/TambahAnak'
import EditAnak from './pages/EditAnak'
import { ToastProvider } from './components/ToastProvider'
import { buatIdAnak } from './data/anakAsuh'
import { ambilDaftarAnak } from './services/anakAsuhApi'

function App() {
  const [daftarAnak, setDaftarAnak] = useState([])
  const [memuat, setMemuat] = useState(true)
  const [pesanError, setPesanError] = useState('')
  const [percobaan, setPercobaan] = useState(0)

  useEffect(() => {
    let dibatalkan = false

    ambilDaftarAnak()
      .then((data) => {
        if (dibatalkan) return
        setDaftarAnak(data)
      })
      .catch((error) => {
        if (dibatalkan) return
        setPesanError(error.message)
      })
      .finally(() => {
        if (dibatalkan) return
        setMemuat(false)
      })

    return () => {
      dibatalkan = true
    }
  }, [percobaan])

  function muatUlang() {
    setMemuat(true)
    setPesanError('')
    setPercobaan((sebelumnya) => sebelumnya + 1)
  }

  function tambahAnak(data) {
    setDaftarAnak((sebelumnya) => [
      { ...data, id: buatIdAnak(sebelumnya) },
      ...sebelumnya
    ])
  }

  function updateAnak(id, data) {
    setDaftarAnak((sebelumnya) =>
      sebelumnya.map((anak) => (anak.id === id ? { ...anak, ...data, id } : anak))
    )
  }

  function hapusAnak(id) {
    setDaftarAnak((sebelumnya) => sebelumnya.filter((anak) => anak.id !== id))
  }

  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/data-anak"
            element={
              <DataAnak
                daftarAnak={daftarAnak}
                onHapus={hapusAnak}
                memuat={memuat}
                pesanError={pesanError}
                onMuatUlang={muatUlang}
              />
            }
          />
          <Route
            path="/data-anak/:id"
            element={
              <DetailAnak
                daftarAnak={daftarAnak}
                memuat={memuat}
                pesanError={pesanError}
                onMuatUlang={muatUlang}
              />
            }
          />
          <Route
            path="/tambah-anak"
            element={<TambahAnak onTambah={tambahAnak} />}
          />
          <Route
            path="/edit-anak/:id"
            element={
              <EditAnak
                daftarAnak={daftarAnak}
                onUpdate={updateAnak}
                memuat={memuat}
                pesanError={pesanError}
                onMuatUlang={muatUlang}
              />
            }
          />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  )
}

export default App
