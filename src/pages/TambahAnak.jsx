import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import PageHeader from '../components/PageHeader'
import FormAnak from '../components/FormAnak'
import { useToast } from '../components/toastContext'

function TambahAnak({ onTambah }) {
  const navigate = useNavigate()
  const toast = useToast()

  function handleSubmit(data) {
    onTambah(data)
    toast.sukses('Data anak asuh berhasil ditambahkan.')
    navigate('/data-anak')
  }

  return (
    <PageShell>
      <PageHeader
        judul="Form Anak Asuh"
        subjudul="Tambah data anak asuh baru"
      />

      <FormAnak onSubmit={handleSubmit} labelTombol="Tambah Anak" />
    </PageShell>
  )
}

export default TambahAnak
