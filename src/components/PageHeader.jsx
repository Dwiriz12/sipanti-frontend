import '../styles/components/PageHeader.css'

function PageHeader({ judul, subjudul, aksi }) {
  return (
    <header className="page-header">
      <div className="page-header-text">
        <h1>{judul}</h1>
        {subjudul && <p>{subjudul}</p>}
      </div>
      {aksi && <div className="page-header-aksi">{aksi}</div>}
    </header>
  )
}

export default PageHeader
