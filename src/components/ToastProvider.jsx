import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
import { ToastContext } from './toastContext'
import '../styles/components/Toast.css'

const DURASI = 3000

export function ToastProvider({ children }) {
  const [daftarToast, setDaftarToast] = useState([])
  const urutan = useRef(0)
  const timer = useRef([])

  const tampilkan = useCallback((tipe, pesan) => {
    urutan.current += 1
    const id = urutan.current

    setDaftarToast((sebelumnya) => [...sebelumnya, { id, tipe, pesan }])

    timer.current.push(
      setTimeout(() => {
        setDaftarToast((sebelumnya) =>
          sebelumnya.filter((toast) => toast.id !== id)
        )
      }, DURASI)
    )
  }, [])

  useEffect(() => {
    const semuaTimer = timer.current

    return () => {
      semuaTimer.forEach(clearTimeout)
    }
  }, [])

  const nilai = useMemo(
    () => ({
      sukses: (pesan) => tampilkan('sukses', pesan),
      gagal: (pesan) => tampilkan('gagal', pesan)
    }),
    [tampilkan]
  )

  return (
    <ToastContext.Provider value={nilai}>
      {children}

      {daftarToast.length > 0 && (
        <div className="toast-wadah">
          {daftarToast.map((toast) => {
            const Ikon = toast.tipe === 'sukses' ? CheckCircle2 : XCircle

            return (
              <div className={`toast toast-${toast.tipe}`} key={toast.id} role="status">
                <Ikon size={18} />
                <span>{toast.pesan}</span>
              </div>
            )
          })}
        </div>
      )}
    </ToastContext.Provider>
  )
}
