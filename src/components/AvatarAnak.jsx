import '../styles/components/AvatarAnak.css'

function buatInisial(nama) {
  return nama
    .split(' ')
    .filter(Boolean)
    .map((kata) => kata[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function AvatarAnak({ anak, ukuran = 'md' }) {
  return (
    <div className={`avatar-anak avatar-anak-${ukuran}`}>
      {anak.foto ? (
        <img src={anak.foto} alt={`Foto ${anak.nama}`} />
      ) : (
        <span>{buatInisial(anak.nama)}</span>
      )}
    </div>
  )
}

export default AvatarAnak
