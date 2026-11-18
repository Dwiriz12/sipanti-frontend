import { Info, RefreshCw } from 'lucide-react'
import '../styles/components/StatusData.css'

export function SkeletonDaftar() {
  return (
    <div className="status-memuat" aria-busy="true" aria-live="polite">
      <p className="status-teks">Memuat data anak asuh...</p>

      <div className="skeleton-grid">
        {Array.from({ length: 8 }, (_, index) => (
          <div className="skeleton-kartu" key={index}>
            <span className="skeleton-bulat" />
            <span className="skeleton-baris skeleton-baris-lebar" />
            <span className="skeleton-baris" />
            <span className="skeleton-baris skeleton-baris-pendek" />
            <span className="skeleton-baris skeleton-baris-pendek" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkeletonDetail() {
  return (
    <div className="status-memuat" aria-busy="true" aria-live="polite">
      <p className="status-teks">Memuat data anak asuh...</p>

      <div className="skeleton-kartu skeleton-kartu-detail">
        <span className="skeleton-bulat skeleton-bulat-besar" />

        <div className="skeleton-detail-teks">
          <span className="skeleton-baris skeleton-baris-lebar" />
          <span className="skeleton-baris" />
          <span className="skeleton-baris skeleton-baris-pendek" />
        </div>
      </div>
    </div>
  )
}

export function PeringatanError({ pesan, onMuatUlang }) {
  return (
    <div className="status-error" role="alert">
      <span className="status-error-ikon">
        <Info size={22} />
      </span>

      <div className="status-error-teks">
        <h2>Gagal memuat data anak asuh</h2>
        <p>{pesan}</p>
      </div>

      <button type="button" onClick={onMuatUlang}>
        <RefreshCw size={15} />
        Coba Lagi
      </button>
    </div>
  )
}
