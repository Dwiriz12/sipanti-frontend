import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/components/PaginationAnak.css'

function PaginationAnak({
  halaman,
  totalHalaman,
  onPilihHalaman,
  perHalaman,
  onPerHalaman,
  total,
  mulai,
  akhir
}) {
  const daftarHalaman = Array.from({ length: totalHalaman }, (_, index) => index + 1)

  return (
    <div className="pagination-anak">
      <span className="pagination-info">
        Menampilkan {total === 0 ? 0 : mulai + 1}–{akhir} dari {total} anak
      </span>

      <div className="pagination-kontrol">
        <select
          value={perHalaman}
          onChange={(event) => onPerHalaman(Number(event.target.value))}
          aria-label="Jumlah data per halaman"
        >
          <option value={4}>4 per halaman</option>
          <option value={8}>8 per halaman</option>
          <option value={12}>12 per halaman</option>
        </select>

        <div className="pagination-tombol">
          <button
            type="button"
            onClick={() => onPilihHalaman(halaman - 1)}
            disabled={halaman <= 1}
            aria-label="Halaman sebelumnya"
          >
            <ChevronLeft size={16} />
          </button>

          {daftarHalaman.map((nomor) => (
            <button
              type="button"
              key={nomor}
              className={nomor === halaman ? 'active' : ''}
              onClick={() => onPilihHalaman(nomor)}
              aria-label={`Halaman ${nomor}`}
              aria-current={nomor === halaman ? 'page' : undefined}
            >
              {nomor}
            </button>
          ))}

          <button
            type="button"
            onClick={() => onPilihHalaman(halaman + 1)}
            disabled={halaman >= totalHalaman}
            aria-label="Halaman berikutnya"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaginationAnak
