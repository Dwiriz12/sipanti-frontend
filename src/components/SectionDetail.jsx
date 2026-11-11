import '../styles/components/SectionDetail.css'

function SectionDetail({ Ikon, judul, children }) {
  return (
    <section className="section-detail">
      <header className="section-detail-head">
        <span className="section-detail-icon">
          {Ikon && <Ikon size={18} />}
        </span>
        <h2>{judul}</h2>
      </header>
      <div className="section-detail-body">{children}</div>
    </section>
  )
}

export default SectionDetail
