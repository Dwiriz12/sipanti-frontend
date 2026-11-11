import { Link } from 'react-router-dom'
import {
  Eye,
  Pencil,
  Trash2,
  UserRound,
  GraduationCap,
  CalendarDays,
  Venus,
  Mars
} from 'lucide-react'
import { formatTanggal } from '../data/anakAsuh'
import AvatarAnak from './AvatarAnak'
import '../styles/components/KartuAnak.css'

function BadgeStatus({ status }) {
  return (
    <span className={`badge-status ${status.toLowerCase()}`}>{status}</span>
  )
}

function AksiKartu({ anak, onHapus }) {
  return (
    <div className="kartu-anak-aksi">
      <Link to={`/data-anak/${anak.id}`} className="aksi-detail">
        <Eye size={15} />
        Detail
      </Link>
      <Link to={`/edit-anak/${anak.id}`} className="aksi-edit">
        <Pencil size={15} />
        Edit
      </Link>
      <button
        type="button"
        className="aksi-hapus"
        onClick={() => onHapus(anak)}
        aria-label={`Hapus data ${anak.nama}`}
      >
        <Trash2 size={15} />
        Hapus
      </button>
    </div>
  )
}

function KartuAnak({ anak, mode, onHapus }) {
  const IkonGender = anak.jenisKelamin === 'Perempuan' ? Venus : Mars

  const meta = (
    <div className="kartu-anak-meta">
      <span>
        <UserRound size={14} />
        {anak.usia}
      </span>
      <span>
        <IkonGender size={14} />
        {anak.jenisKelamin}
      </span>
      <span>
        <GraduationCap size={14} />
        {anak.sekolah}
      </span>
      <span>
        <CalendarDays size={14} />
        Masuk: {formatTanggal(anak.tanggalMasukPanti)}
      </span>
    </div>
  )

  if (mode === 'list') {
    return (
      <article className="kartu-anak kartu-anak-list">
        <AvatarAnak anak={anak} ukuran="sm" />

        <div className="kartu-anak-identitas">
          <div className="kartu-anak-judul">
            <h3>{anak.nama}</h3>
            <BadgeStatus status={anak.status} />
          </div>
          {meta}
        </div>

        <AksiKartu anak={anak} onHapus={onHapus} />
      </article>
    )
  }

  return (
    <article className="kartu-anak kartu-anak-grid">
      <div className="kartu-anak-atas">
        <AvatarAnak anak={anak} ukuran="md" />
        <BadgeStatus status={anak.status} />
      </div>

      <h3>{anak.nama}</h3>
      {meta}

      <AksiKartu anak={anak} onHapus={onHapus} />
    </article>
  )
}

export default KartuAnak
