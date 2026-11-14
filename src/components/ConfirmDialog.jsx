import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { LogOut, Trash2 } from 'lucide-react'
import '../styles/components/ConfirmDialog.css'

function ConfirmDialog({
  buka,
  judul,
  pesan,
  labelKonfirmasi = 'Ya, Lanjutkan',
  labelBatal = 'Batal',
  tipe = 'biasa',
  onKonfirmasi,
  onBatal
}) {
  const tombolBatal = useRef(null)
  const aksiBatal = useRef(onBatal)
  const idJudul = useId()

  useEffect(() => {
    aksiBatal.current = onBatal
  }, [onBatal])

  useEffect(() => {
    if (!buka) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') aksiBatal.current()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [buka])

  useEffect(() => {
    if (!buka) return

    document.body.style.overflow = 'hidden'
    tombolBatal.current?.focus()

    return () => {
      document.body.style.overflow = ''
    }
  }, [buka])

  if (!buka) return null

  const Ikon = tipe === 'bahaya' ? Trash2 : LogOut

  return createPortal(
    <div className="dialog-overlay" onClick={onBatal}>
      <div
        className="dialog-kartu"
        role="dialog"
        aria-modal="true"
        aria-labelledby={idJudul}
        onClick={(event) => event.stopPropagation()}
      >
        <span className={`dialog-ikon ${tipe}`}>
          <Ikon size={22} />
        </span>

        <h3 id={idJudul}>{judul}</h3>
        <p>{pesan}</p>

        <div className="dialog-aksi">
          <button
            type="button"
            className="dialog-batal"
            onClick={onBatal}
            ref={tombolBatal}
          >
            {labelBatal}
          </button>
          <button
            type="button"
            className={`dialog-konfirmasi ${tipe === 'bahaya' ? 'dialog-bahaya' : ''}`}
            onClick={onKonfirmasi}
          >
            {labelKonfirmasi}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ConfirmDialog
