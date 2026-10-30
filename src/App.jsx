import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DataAnak from './pages/DataAnak'
import DetailAnak from './pages/DetailAnak'
import TambahAnak from './pages/TambahAnak'
import EditAnak from './pages/EditAnak'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-anak" element={<DataAnak />} />
        <Route path="/data-anak/:id" element={<DetailAnak />} />
        <Route path="/tambah-anak" element={<TambahAnak />} />
        <Route path="/edit-anak/:id" element={<EditAnak />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App