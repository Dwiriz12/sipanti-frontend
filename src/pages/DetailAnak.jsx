import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarDays,
  FileText,
  GraduationCap,
  HeartPulse,
  Info,
  Pencil,
  UserRound
} from 'lucide-react'
import { formatTanggal, statusPendidikanAnak } from '../data/anakAsuh'
import PageShell from '../components/PageShell'
import PageHeader from '../components/PageHeader'
import AvatarAnak from '../components/AvatarAnak'
import SectionDetail from '../components/SectionDetail'
import '../styles/components/KartuAnak.css'
import '../styles/pages/DetailAnak.css'

function ItemDetail({ label, nilai }) {
  return (
    <div className="detail-item">
      <span>{label}</span>
      <strong>{nilai || '-'}</strong>
    </div>
  )
}

function DetailAnak({ daftarAnak }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const anak = daftarAnak.find((item) => item.id === id)

  if (!anak) {
    return (
      <PageShell>
        <PageHeader
          judul="Detail Anak Asuh"
          subjudul="Informasi lengkap data anak asuh"
        />
        <div className="detail-kosong">
          <h2>Data anak asuh tidak ditemukan</h2>
          <p>Data dengan ID {id} tidak ada di daftar anak asuh.</p>
          <button type="button" onClick={() => navigate('/data-anak')}>
            <ArrowLeft size={16} />
            Kembali ke Data Anak
          </button>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <PageHeader
        judul="Detail Anak Asuh"
        subjudul="Informasi lengkap data anak asuh"
      />

      <section className="detail-profil">
        <AvatarAnak anak={anak} ukuran="xl" />

        <div className="detail-profil-teks">
          <div className="detail-profil-judul">
            <h2>{anak.nama}</h2>
            <span className={`badge-status ${anak.status.toLowerCase()}`}>
              {anak.status}
            </span>
          </div>

          <div className="detail-profil-meta">
            <div>
              <span>ID Anak Asuh</span>
              <strong>{anak.id}</strong>
            </div>
            <div>
              <span>Tanggal Masuk Panti</span>
              <strong>{formatTanggal(anak.tanggalMasukPanti)}</strong>
            </div>
          </div>
        </div>
      </section>

      <SectionDetail Ikon={UserRound} judul="Data Pribadi">
        <div className="detail-grid tiga">
          <ItemDetail label="Nama Lengkap" nilai={anak.nama} />
          <ItemDetail label="Jenis Kelamin" nilai={anak.jenisKelamin} />
          <ItemDetail label="Tempat Lahir" nilai={anak.tempatLahir} />
          <ItemDetail label="Tanggal Lahir" nilai={formatTanggal(anak.tanggalLahir)} />
          <ItemDetail label="Usia" nilai={anak.usia} />
          <ItemDetail label="Status" nilai={anak.status} />
        </div>
      </SectionDetail>

      <SectionDetail Ikon={GraduationCap} judul="Informasi Pendidikan">
        <div className="detail-grid tiga">
          <ItemDetail
            label="Status Pendidikan"
            nilai={statusPendidikanAnak(anak)}
          />

          {statusPendidikanAnak(anak) === 'Sedang Sekolah' && (
            <>
              <ItemDetail label="Sekolah" nilai={anak.sekolah} />
              <ItemDetail label="Kelas" nilai={anak.kelas} />
              <ItemDetail label="Tahun Masuk Sekolah" nilai={anak.tahunMasuk} />
            </>
          )}

          {statusPendidikanAnak(anak) === 'Sedang Kuliah' && (
            <>
              <ItemDetail label="Kampus" nilai={anak.sekolah} />
              <ItemDetail label="Semester" nilai={anak.semester} />
              <ItemDetail label="Tahun Masuk Kuliah" nilai={anak.tahunMasuk} />
            </>
          )}

          {statusPendidikanAnak(anak) === 'Sudah Lulus' && (
            <>
              <ItemDetail label="Sekolah/Kampus Terakhir" nilai={anak.sekolah} />
              <ItemDetail label="Tahun Lulus" nilai={anak.tahunLulus} />
            </>
          )}
        </div>

        {statusPendidikanAnak(anak) === 'Belum/Tidak Sekolah' && (
          <p className="detail-kosong-teks">
            Anak belum atau tidak sedang bersekolah.
          </p>
        )}
      </SectionDetail>

      <SectionDetail Ikon={HeartPulse} judul="Informasi Kesehatan">
        <div className="detail-grid tiga">
          <ItemDetail label="Golongan Darah" nilai={anak.golonganDarah} />
          <ItemDetail label="Riwayat Penyakit" nilai={anak.riwayatPenyakit} />
          <ItemDetail label="Alergi" nilai={anak.alergi} />
        </div>
      </SectionDetail>

      <SectionDetail Ikon={Info} judul="Informasi Lainnya">
        <div className="detail-grid tiga">
          <ItemDetail label="Asal Daerah" nilai={anak.asalDaerah} />
          <ItemDetail label="Nama Wali" nilai={anak.namaWali} />
          <ItemDetail label="No. Telepon Wali" nilai={anak.teleponWali} />
          <ItemDetail
            label="Tanggal Masuk Panti"
            nilai={formatTanggal(anak.tanggalMasukPanti)}
          />
        </div>

        <div className="detail-keterangan">
          <span>Keterangan</span>
          <p>{anak.keterangan || '-'}</p>
        </div>
      </SectionDetail>

      <SectionDetail Ikon={FileText} judul="Dokumen Pendukung">
        {anak.dokumen.length === 0 ? (
          <p className="detail-kosong-teks">Belum ada dokumen pendukung.</p>
        ) : (
          <div className="detail-dokumen">
            {anak.dokumen.map((dokumen) => (
              <div className="dokumen-item" key={dokumen.label}>
                <span className="dokumen-item-icon">
                  <FileText size={16} />
                </span>
                <div className="dokumen-item-teks">
                  <strong>{dokumen.label}</strong>
                  <span>{dokumen.namaFile || 'Belum diunggah'}</span>
                </div>
                <FileText size={15} className="dokumen-item-unduh" />
              </div>
            ))}
          </div>
        )}
      </SectionDetail>

      <SectionDetail Ikon={CalendarDays} judul="Riwayat Kegiatan">
        {anak.riwayatKegiatan.length === 0 ? (
          <p className="detail-kosong-teks">Belum ada riwayat kegiatan.</p>
        ) : (
          <div className="detail-riwayat">
            {anak.riwayatKegiatan.map((kegiatan) => (
              <div className="riwayat-item" key={`${kegiatan.nama}-${kegiatan.tanggal}`}>
                <span>{kegiatan.nama}</span>
                <em>
                  <CalendarDays size={13} />
                  {formatTanggal(kegiatan.tanggal)}
                </em>
              </div>
            ))}
          </div>
        )}
      </SectionDetail>

      <div className="detail-aksi">
        <button type="button" className="tombol-batal" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} />
          Kembali
        </button>
        <Link to={`/edit-anak/${anak.id}`} className="tombol-simpan">
          <Pencil size={16} />
          Edit Data
        </Link>
      </div>
    </PageShell>
  )
}

export default DetailAnak
