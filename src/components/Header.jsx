import { Users } from 'lucide-react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="brand">
          <div className="brand-logo">
            <img
              src="/materi/logo-panti.png"
              alt="Logo Panti Asuhan Amal Mulia Qurani"
            />
          </div>

        </div>

        <nav className="nav-menu">
          <a href="#beranda" className="active">Beranda</a>
          <a href="#tentang">Tentang Panti</a>
          <a href="#informasi">Informasi</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <Link to="/login" className="login-button">
          <Users size={17} />
          Login 
        </Link>

      </div>
    </header>
  )
}

export default Header
