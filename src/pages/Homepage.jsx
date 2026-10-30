import './Homepage.css'
import Header from '../components/Header'
import Footer from '../components/footer'

function Homepage() {
  return (
    <div className="homepage">


      <Header />

      <main>

        <section className="hero" id="beranda">

          <div className="hero-content">

            <div className="welcome-label">
              Selamat Datang di
            </div>

            <h2>SIPANTI</h2>

            <h3>
              Sistem Informasi Pengelolaan<br />
              Panti Asuhan Amal Mulia Qurani
            </h3>

            <p>
              Bersama membangun masa depan anak-anak yatim dan
              dhuafa melalui pendidikan, kasih sayang, dan nilai-nilai islami.
            </p>

          </div>

          <div className="hero-image">
            <img
              src="/materi/Foto bareng anak asuh3.jpeg"
              alt="Panti Asuhan Amal Mulia Qurani"
            />
          </div>

        </section>

        <section className="info-cards">

          <div className="info-card">
            <div className="info-icon">♡</div>
            <h3>Tentang Panti</h3>
            <p>
              Mengenal lebih dekat Panti Asuhan
              Amal Mulia Qurani dan lingkungan
              pengasuhan anak.
            </p>
            <a href="#tentang">Selengkapnya →</a>
          </div>


          <div className="info-card">
            <div className="info-icon gold">⌂</div>
            <h3>Informasi Panti</h3>
            <p>
              Dapatkan informasi mengenai profil,
              alamat, fasilitas, dan informasi
              penting lainnya.
            </p>
            <a href="#informasi">Selengkapnya →</a>
          </div>


          <div className="info-card">
            <div className="info-icon">⌖</div>
            <h3>Data Anak</h3>
            <p>
              Informasi pengelolaan data anak
              asuh dilakukan oleh pengurus
              panti secara terorganisir.
            </p>
            <a href="#informasi">Selengkapnya →</a>
          </div>


          <div className="info-card">
            <div className="info-icon gold">☎</div>
            <h3>Kontak</h3>
            <p>
              Hubungi Panti Asuhan Amal Mulia
              Qurani untuk informasi lebih lanjut.
            </p>
            <a href="#kontak">Selengkapnya →</a>
          </div>

        </section>

        <section className="about-section" id="tentang">

          <div className="about-content">

            <span className="section-label">
              Tentang Kami
            </span>

            <h2>
              Panti Asuhan Amal Mulia Qurani
            </h2>

            <p>
              Panti Asuhan Amal Mulia Qurani merupakan lembaga
              sosial yang bergerak dalam bidang pengasuhan dan
              pendidikan anak-anak yatim dan dhuafa.
            </p>

            <p>
              Kami berkomitmen untuk memberikan lingkungan yang
              aman, nyaman, dan penuh kasih sayang bagi anak-anak
              serta membantu mereka tumbuh menjadi pribadi yang
              mandiri dan berakhlak mulia.
            </p>

            <button className="outline-button">
              Selengkapnya →
            </button>

          </div>


          <div className="about-image">
            <div className="about-image-content">
              <span>AMQ</span>
              <p>Panti Asuhan<br />Amal Mulia Qurani</p>
            </div>
          </div>

        </section>

        <section className="information-section" id="informasi">

          <div className="section-heading">
            <span className="section-label">
              Informasi
            </span>

            <h2>
              Mengenal SIPANTI
            </h2>

            <p>
              SIPANTI membantu pengurus dalam mengelola
              informasi data anak asuh secara lebih terorganisir.
            </p>
          </div>


          <div className="stats">

            <div className="stat-card">
              <span className="stat-icon">♙</span>
              <div>
                <strong>Data Anak</strong>
                <p>Terorganisir</p>
              </div>
            </div>


            <div className="stat-card">
              <span className="stat-icon">✓</span>
              <div>
                <strong>Pengelolaan</strong>
                <p>Lebih mudah</p>
              </div>
            </div>


            <div className="stat-card">
              <span className="stat-icon">▣</span>
              <div>
                <strong>Informasi</strong>
                <p>Terpusat</p>
              </div>
            </div>

            <div className="stat-card">
              <span className="stat-icon">♡</span>
              <div>
                <strong>Donasi</strong>
                <p>Mandiri 130-00-1387135-8</p>
              </div>
            </div>

          </div>

        </section>

        <section className="contact-section" id="kontak">

          <div>
            <span className="section-label">
              Hubungi Kami
            </span>

            <h2>
              Panti Asuhan Amal Mulia Qurani
            </h2>

            <p>
              Untuk informasi lebih lanjut mengenai
              Panti Asuhan Amal Mulia Qurani,
              silakan menghubungi kami.
            </p>
          </div>


          <div className="contact-items">

            <div className="contact-item">
              <span>⌖</span>
              <div>
                <strong>Alamat</strong>
                <p>Bandung, Jawa Barat</p>
              </div>
            </div>

            <div className="contact-item">
              <span>◎</span>
              <div>
                <strong>Instagram</strong>
                <p>@amalmuliaqurani</p>
              </div>
            </div>

            <div className="contact-item">
              <span>☏</span>
              <div>
                <strong>WhatsApp</strong>
                <p>0818 0426 1299</p>
              </div>
            </div>

            <div className="contact-item">
              <span>✉</span>
              <div>
                <strong>Email</strong>
                <p>panti.amal@gmail.com</p>
              </div>
            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Homepage