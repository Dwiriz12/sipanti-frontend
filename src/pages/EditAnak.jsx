import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import PageShell from '../components/PageShell'
import PageHeader from '../components/PageHeader'
import FormAnak from '../components/FormAnak'
import { useToast } from '../components/toastContext'

function EditAnak({ daftarAnak, onUpdate }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useToast()
  const anak = daftarAnak.find((item) => item.id === id)

  if (!anak) {
    return (
      <PageShell>
        <PageHeader
          judul="Edit Data Anak Asuh"
          subjudul="Perbarui informasi anak asuh"
        />
        <div className="detail-kosong">
          <h2>Data anak asuh tidak ditemukan</h2>
          <p>Data dengan ID {id} tidak ada di daftar anak asuh.</p>
          <Link to="/data-anak" className="data-kosong-aksi">
            <ArrowLeft size={16} />
            Kembali ke Data Anak
          </Link>
        </div>
      </PageShell>
    )
  }

  function handleSubmit(data) {
    onUpdate(anak.id, data)
    toast.sukses('Perubahan data anak asuh berhasil disimpan.')
    navigate('/data-anak')
  }

  return (
    <PageShell>
      <PageHeader
        judul="Edit Data Anak Asuh"
        subjudul="Perbarui informasi anak asuh"
      />

      <FormAnak
        initialData={anak}
        onSubmit={handleSubmit}
        labelTombol="Simpan Perubahan"
      />
    </PageShell>
  )
}

export default EditAnak
