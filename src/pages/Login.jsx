import { useState } from 'react'
import './Login.css'
import { Users, Lock, Mail, ShieldCheck, Headphones, Eye } from 'lucide-react'

function LoginPengurus() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = 'Email atau username wajib diisi'
    }

    if (!password.trim()) {
      newErrors.password = 'Password wajib diisi'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Login berhasil')
    }
  }

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-help">
          <Headphones size={16} />
          <span>Butuh bantuan?</span>
          <a href="#kontak">Hubungi Kami</a>
        </div>

        <div className="login-card">

          <div className="login-header">

            <div className="login-logo">
              <img
                src="/materi/logo-panti.png"
                alt="Logo Panti Asuhan Amal Mulia Qurani"
              />
            </div>

            <div className="login-heading">
              <h1>Selamat Datang Kembali</h1>

              <p>
                Silakan login untuk melanjutkan
                <br />
                ke sistem pengelolaan panti.
              </p>
            </div>

          </div>


          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="email">
                Email atau Username
              </label>

              <div className={`input-wrapper ${errors.email ? 'input-error-wrapper' : ''}`}>
                <div className="input-icon">
                  <Mail size={18} />
                </div>

                <input
                  type="text"
                  id="email"
                  placeholder="Masukkan email atau username Anda"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)

                    if (errors.email) {
                      setErrors({
                        ...errors,
                        email: ''
                      })
                    }
                  }}
                />
              </div>

              {errors.email && (
                <span className="input-error">
                  {errors.email}
                </span>
              )}
            </div>


            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">
                <div className="input-icon">
                  <Lock size={18} />
                </div>

                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan password Anda"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)

                    if (errors.password) {
                      setErrors({
                        ...errors,
                        password: ''
                      })
                    }
                  }}
                />

                <Eye size={18} className="password-eye" />
              </div>

              {errors.password && (
                <span className="input-error">
                  {errors.password}
                </span>
              )}
            </div>


            <div className="login-options">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Ingat saya</span>
              </label>

              <a href="#lupa-password">
                Lupa Password?
              </a>

            </div>


            <button
              type="submit"
              className="login-submit"
            >
              <Users size={18} />
              <span>Login</span>
            </button>

          </form>


          <div className="security-info">
            <div className="security-icon">
              <ShieldCheck size={17} />
            </div>

            <div>
              <strong>Login Aman</strong>
              <p>
                Data login hanya dapat diakses oleh
                pengurus yang memiliki izin.
              </p>
            </div>
          </div>


          <div className="login-footer">
            <a href="/">
              Kembali ke Homepage
            </a>
          </div>

        </div>


        <p className="login-copy">
          © 2026 Panti Asuhan Amal Mulia Qurani. Semua hak dilindungi.
        </p>

      </div>

    </div>
  )
}

export default LoginPengurus