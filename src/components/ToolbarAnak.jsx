import { Link } from 'react-router-dom'
import { LayoutGrid, List, Plus, Search } from 'lucide-react'
import '../styles/components/ToolbarAnak.css'

function ToolbarAnak({
  cari,
  onCari,
  status,
  onStatus,
  gender,
  onGender,
  urutan,
  onUrutan,
  mode,
  onMode
}) {
  return (
    <section className="toolbar-anak">
      <div className="toolbar-baris-utama">
        <label className="toolbar-cari">
          <Search size={17} />
          <input
            type="search"
            value={cari}
            onChange={(event) => onCari(event.target.value)}
            placeholder="Cari nama anak asuh..."
            aria-label="Cari nama anak asuh"
          />
        </label>

        <Link to="/tambah-anak" className="toolbar-tambah">
          <Plus size={17} />
          Tambah Anak
        </Link>
      </div>

      <div className="toolbar-baris-filter">
        <select
          value={status}
          onChange={(event) => onStatus(event.target.value)}
          aria-label="Filter status"
        >
          <option value="Semua">Semua Status</option>
          <option value="Aktif">Aktif</option>
          <option value="Alumni">Alumni</option>
          <option value="Nonaktif">Nonaktif</option>
        </select>

        <select
          value={gender}
          onChange={(event) => onGender(event.target.value)}
          aria-label="Filter jenis kelamin"
        >
          <option value="Semua">Semua Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <select
          value={urutan}
          onChange={(event) => onUrutan(event.target.value)}
          aria-label="Urutkan data"
        >
          <option value="terbaru">Urutkan: Terbaru</option>
          <option value="terlama">Urutkan: Terlama</option>
          <option value="nama">Urutkan: Nama A-Z</option>
        </select>

        <div className="toolbar-mode" role="group" aria-label="Mode tampilan">
          <button
            type="button"
            className={mode === 'grid' ? 'active' : ''}
            onClick={() => onMode('grid')}
            aria-label="Tampilan kartu"
            aria-pressed={mode === 'grid'}
          >
            <LayoutGrid size={17} />
          </button>
          <button
            type="button"
            className={mode === 'list' ? 'active' : ''}
            onClick={() => onMode('list')}
            aria-label="Tampilan daftar"
            aria-pressed={mode === 'list'}
          >
            <List size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ToolbarAnak
