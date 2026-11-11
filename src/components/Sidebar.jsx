import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, LogOut } from 'lucide-react'
import '../styles/components/Sidebar.css'

function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <img
              src="/images/logo-panti.png"
              alt="Logo Panti Asuhan Amal Mulia Qurani"
            />
          </div>

          <h2>SIPANTI</h2>
          <p>Sistem Informasi Pengelolaan Panti</p>
        </div>


        <nav className="sidebar-menu">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-menu-item ${isActive ? 'active' : ''}`
            }
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>


          <NavLink
            to="/data-anak"
            className={({ isActive }) =>
              `sidebar-menu-item ${isActive ? 'active' : ''}`
            }
          >
            <Users size={19} />
            <span>Data Anak</span>
          </NavLink>

        </nav>

      </div>


      <div className="sidebar-bottom">

        <button
          type="button"
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  )
}

export default Sidebar