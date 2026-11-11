import Sidebar from './Sidebar'
import Footer from './Footer'
import '../styles/components/PageShell.css'
import '../styles/components/Umum.css'

function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Sidebar />
      <main className="page-shell-main">
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default PageShell
