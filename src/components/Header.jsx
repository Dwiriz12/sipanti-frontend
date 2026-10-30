import { Users } from 'lucide-react'

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="brand">
          <div className="brand-logo">
            AM
          </div>

          <div className="brand-text">
            <h1>SIPANTI</h1>
            <p>
              Sistem Informasi Pengelolaan<br />
              Panti Asuhan Amal Mulia Qurani
            </p>
          </div>
        </div>

        <nav className="nav-menu">
          <a href="#beranda" className="active">Beranda</a>
          <a href="#tentang">Tentang Panti</a>
          <a href="#informasi">Informasi</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <button className="login-button">
          <Users size={17} />
          Login Pengurus
        </button>

      </div>
    </header>
  )
}

export default Header