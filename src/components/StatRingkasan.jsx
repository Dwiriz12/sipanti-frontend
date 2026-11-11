import { Users, UserCheck, GraduationCap } from 'lucide-react'
import '../styles/components/StatRingkasan.css'

function StatRingkasan({ daftarAnak }) {
  const total = daftarAnak.length
  const aktif = daftarAnak.filter((anak) => anak.status === 'Aktif').length
  const alumni = daftarAnak.filter((anak) => anak.status === 'Alumni').length

  const ringkasan = [
    { label: 'Total Anak', nilai: total, keterangan: 'Anak', Ikon: Users, warna: 'green' },
    { label: 'Anak Aktif', nilai: aktif, keterangan: 'Anak', Ikon: UserCheck, warna: 'orange' },
    { label: 'Alumni', nilai: alumni, keterangan: 'Anak', Ikon: GraduationCap, warna: 'green' }
  ]

  return (
    <section className="stat-ringkasan">
      {ringkasan.map(({ label, nilai, keterangan, Ikon, warna }) => (
        <div className="ringkasan-card" key={label}>
          <div className={`ringkasan-icon ${warna}`}>
            <Ikon size={22} />
          </div>
          <div className="ringkasan-body">
            <span className="ringkasan-label">{label}</span>
            <strong className="ringkasan-nilai">{nilai}</strong>
            <span className="ringkasan-keterangan">{keterangan}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default StatRingkasan
