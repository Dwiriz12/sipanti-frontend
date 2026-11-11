import KartuAnak from './KartuAnak'
import '../styles/components/KartuAnak.css'

function DaftarAnak({ daftarAnak, mode, onHapus }) {
  return (
    <section className={`daftar-anak daftar-anak-${mode}`}>
      {daftarAnak.map((anak) => (
        <KartuAnak
          key={anak.id}
          anak={anak}
          mode={mode}
          onHapus={onHapus}
        />
      ))}
    </section>
  )
}

export default DaftarAnak
