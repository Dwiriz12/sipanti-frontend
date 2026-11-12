import '../styles/pages/Dashboard.css'
import {
  Users,
  UserRound,
  Wallet,
  CalendarDays,
  CalendarCheck,
  Receipt,
  Megaphone,
  ArrowUpRight
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function Dashboard() {
  const stats = [
    {
      title: 'Total Anak Asuh',
      value: '24',
      subtitle: 'Anak Aktif',
      change: '2 anak dari bulan lalu',
      icon: Users,
      type: 'green'
    },
    {
      title: 'Total Pengasuh',
      value: '8',
      subtitle: 'Pengasuh Aktif',
      change: '1 pengasuh bulan ini',
      icon: UserRound,
      type: 'orange'
    },
    {
      title: 'Donasi Bulan Ini',
      value: 'Rp 8.500.000',
      subtitle: 'Total Donasi',
      change: '12% dari bulan lalu',
      icon: Wallet,
      type: 'green'
    },
    {
      title: 'Kegiatan Bulan Ini',
      value: '6',
      subtitle: 'Kegiatan Terlaksana',
      change: '2 kegiatan dari bulan lalu',
      icon: CalendarDays,
      type: 'orange'
    }
  ]

  const kegiatan = [
    {
      title: 'Kajian Mingguan',
      place: 'Aula Panti',
      date: '03 Juni 2026',
      time: '09.00 - 11.00'
    },
    {
      title: 'Belajar Bersama',
      place: 'Ruang Belajar',
      date: '05 Juni 2026',
      time: '13.00 - 15.00'
    },
    {
      title: 'Santunan Anak Asuh',
      place: 'Aula Panti',
      date: '07 Juni 2026',
      time: '10.00 - 12.00'
    },
    {
      title: 'Kunjungan Donatur',
      place: 'Aula Panti',
      date: '10 Juni 2026',
      time: '10.00 - 12.00'
    }
  ]

  const anakTerbaru = [
    {
      nama: 'Ahmad Fauzi',
      umur: '13 Tahun',
      tanggal: '01 Juni 2026',
      status: 'Aktif'
    },
    {
      nama: 'Aisyah Humaira',
      umur: '11 Tahun',
      tanggal: '03 Juni 2026',
      status: 'Aktif'
    },
    {
      nama: 'Rizky Maulana',
      umur: '14 Tahun',
      tanggal: '02 Juni 2026',
      status: 'Aktif'
    },
    {
      nama: 'Nabila Putri',
      umur: '12 Tahun',
      tanggal: '31 Mei 2026',
      status: 'Aktif'
    }
  ]

  const donasiTerbaru = [
    {
      nama: 'Bapak Ahmad',
      jenis: 'Uang',
      nominal: 'Rp 500.000',
      tanggal: '03 Juni 2026'
    },
    {
      nama: 'Ibu Siti Aisyah',
      jenis: 'Uang',
      nominal: 'Rp 1.000.000',
      tanggal: '03 Juni 2026'
    },
    {
      nama: 'Hamba Allah',
      jenis: 'Uang',
      nominal: 'Rp 250.000',
      tanggal: '02 Juni 2026'
    },
    {
      nama: 'Yayasan Berkah',
      jenis: 'Barang',
      nominal: 'Sembako',
      tanggal: '02 Juni 2026'
    }
  ]

  const pengeluaranTerbaru = [
    {
      keterangan: 'Belanja kebutuhan dapur',
      kategori: 'Kebutuhan Harian',
      nominal: 'Rp 750.000',
      tanggal: '03 Juni 2026'
    },
    {
      keterangan: 'Pembelian alat tulis',
      kategori: 'Pendidikan',
      nominal: 'Rp 250.000',
      tanggal: '02 Juni 2026'
    },
    {
      keterangan: 'Tagihan listrik',
      kategori: 'Tagihan',
      nominal: 'Rp 450.000',
      tanggal: '01 Juni 2026'
    },
    {
      keterangan: 'Kebutuhan kegiatan',
      kategori: 'Kegiatan',
      nominal: 'Rp 300.000',
      tanggal: '31 Mei 2026'
    }
  ]

  const pengumuman = [
    {
      title: 'Kunjungan Donatur',
      description:
        'Kunjungan dari donatur akan dilaksanakan pada 10 Juni 2026.',
      date: '03 Juni 2026'
    },
    {
      title: 'Santunan Bulan Juni',
      description:
        'Santunan rutin untuk anak asuh akan dilaksanakan pada 7 Juni 2026.',
      date: '02 Juni 2026'
    },
    {
      title: 'Evaluasi Bulanan',
      description:
        'Rapat evaluasi bulanan akan dilaksanakan pada 5 Juni 2026.',
      date: '01 Juni 2026'
    }
  ]

  const grafikDonasi = [
    {
      bulan: 'Jan',
      nilai: 5.5
    },
    {
      bulan: 'Feb',
      nilai: 7
    },
    {
      bulan: 'Mar',
      nilai: 8.2
    },
    {
      bulan: 'Apr',
      nilai: 6.8
    },
    {
      bulan: 'Mei',
      nilai: 9.5
    },
    {
      bulan: 'Jun',
      nilai: 8.5
    }
  ]

  return (
    <div className="dashboard-page">

      <Sidebar />

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div className="dashboard-heading">
            <h1>Selamat Datang, Pengurus 👋</h1>

            <p>
              Berikut adalah ringkasan informasi Panti Asuhan Amal Mulia Qurani
            </p>
          </div>

          <div className="dashboard-date">
            <CalendarDays size={16} />
            <span>03 Juni 2026</span>
          </div>

        </header>


        {/* STATISTICS */}

        <section className="dashboard-stats">

          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div className="stat-card" key={stat.title}>

                <div className={`stat-icon ${stat.type}`}>
                  <Icon size={22} />
                </div>

                <div className="stat-content">

                  <span className="stat-title">
                    {stat.title}
                  </span>

                  <strong className="stat-value">
                    {stat.value}
                  </strong>

                  <span className="stat-subtitle">
                    {stat.subtitle}
                  </span>

                  <div className="stat-change">
                    <ArrowUpRight size={14} />
                    <span>{stat.change}</span>
                  </div>

                </div>

              </div>
            )
          })}

        </section>


        {/* MAIN CONTENT */}

        <section className="dashboard-main-grid">

          {/* DONATION CHART */}

          <div className="dashboard-card chart-card">

            <div className="card-header">

              <div>
                <h2>Grafik Donasi Bulanan</h2>

                <span>
                  Perkembangan donasi tahun 2026
                </span>
              </div>

              <select defaultValue="2026">
                <option value="2026">Tahun 2026</option>
              </select>

            </div>

            <div className="chart-wrapper">

              <div className="chart-y-axis">
                <span>10 jt</span>
                <span>8 jt</span>
                <span>6 jt</span>
                <span>4 jt</span>
                <span>2 jt</span>
                <span>0</span>
              </div>

              <div className="chart">

                <div className="chart-grid-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  className="chart-line"
                  viewBox="0 0 600 220"
                  preserveAspectRatio="none"
                >

                  <defs>
                    <linearGradient
                      id="chartArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#00766b"
                        stopOpacity="0.18"
                      />

                      <stop
                        offset="100%"
                        stopColor="#00766b"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 30 130
                       L 138 96
                       L 246 70
                       L 354 100
                       L 462 38
                       L 570 60
                       L 570 220
                       L 30 220 Z"
                    fill="url(#chartArea)"
                  />

                  <polyline
                    points="30,130 138,96 246,70 354,100 462,38 570,60"
                    fill="none"
                    stroke="#00766b"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="30" cy="130" r="5" fill="#00766b" />
                  <circle cx="138" cy="96" r="5" fill="#00766b" />
                  <circle cx="246" cy="70" r="5" fill="#00766b" />
                  <circle cx="354" cy="100" r="5" fill="#00766b" />
                  <circle cx="462" cy="38" r="5" fill="#00766b" />
                  <circle cx="570" cy="60" r="5" fill="#00766b" />

                </svg>

                <div className="chart-values">

                  <span style={{ left: '5%' }}>
                    Rp 5,5 jt
                  </span>

                  <span style={{ left: '23%' }}>
                    Rp 7 jt
                  </span>

                  <span style={{ left: '41%' }}>
                    Rp 8,2 jt
                  </span>

                  <span style={{ left: '59%' }}>
                    Rp 6,8 jt
                  </span>

                  <span style={{ left: '77%' }}>
                    Rp 9,5 jt
                  </span>

                  <span style={{ left: '94%' }}>
                    Rp 8,5 jt
                  </span>

                </div>

                <div className="chart-months">

                  {grafikDonasi.map((item) => (
                    <span key={item.bulan}>
                      {item.bulan}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* KEGIATAN */}

          <div className="dashboard-card">

            <div className="card-header">

              <h2>Kegiatan Terdekat</h2>

              <a href="#kegiatan">
                Lihat Semua
              </a>

            </div>

            <div className="activity-list">

              {kegiatan.map((item) => (
                <div
                  className="activity-item"
                  key={item.title}
                >

                  <div className="activity-icon">
                    <CalendarCheck size={18} />
                  </div>

                  <div className="activity-info">

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.place}
                    </span>

                  </div>

                  <div className="activity-date">

                    <strong>
                      {item.date}
                    </strong>

                    <span>
                      {item.time}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* THREE CARDS */}

        <section className="dashboard-bottom-grid">

          {/* ANAK ASUH */}

          <div className="dashboard-card">

            <div className="card-header">

              <h2>Anak Asuh Terbaru</h2>

              <a href="/data-anak">
                Lihat Semua
              </a>

            </div>

            <div className="simple-table">

              <div className="table-head">

                <span>Nama</span>
                <span>Umur</span>
                <span>Tanggal Masuk</span>
                <span>Status</span>

              </div>

              {anakTerbaru.map((anak) => (
                <div
                  className="table-row"
                  key={anak.nama}
                >

                  <span className="name-cell">

                    <div className="avatar">
                      {anak.nama.charAt(0)}
                    </div>

                    {anak.nama}

                  </span>

                  <span>
                    {anak.umur}
                  </span>

                  <span>
                    {anak.tanggal}
                  </span>

                  <span>

                    <b className="status-active">
                      {anak.status}
                    </b>

                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* DONASI */}

          <div className="dashboard-card">

            <div className="card-header">

              <h2>Donasi Terbaru</h2>

              <a href="#donasi">
                Lihat Semua
              </a>

            </div>

            <div className="simple-table donation-table">

              <div className="table-head">

                <span>Donatur</span>
                <span>Jenis</span>
                <span>Nominal</span>
                <span>Tanggal</span>

              </div>

              {donasiTerbaru.map((donasi) => (
                <div
                  className="table-row"
                  key={donasi.nama}
                >

                  <span className="name-cell">

                    <div className="small-icon">
                      <Wallet size={14} />
                    </div>

                    {donasi.nama}

                  </span>

                  <span>
                    {donasi.jenis}
                  </span>

                  <span>
                    {donasi.nominal}
                  </span>

                  <span>
                    {donasi.tanggal}
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* PENGELUARAN */}

          <div className="dashboard-card">

            <div className="card-header">

              <h2>Pengeluaran Terbaru</h2>

              <a href="#pengeluaran">
                Lihat Semua
              </a>

            </div>

            <div className="expense-list">

              {pengeluaranTerbaru.map((item) => (
                <div
                  className="expense-item"
                  key={item.keterangan}
                >

                  <div className="expense-icon">
                    <Receipt size={17} />
                  </div>

                  <div className="expense-info">

                    <strong>
                      {item.keterangan}
                    </strong>

                    <span>
                      {item.kategori}
                    </span>

                  </div>

                  <div className="expense-value">

                    <strong>
                      {item.nominal}
                    </strong>

                    <span>
                      {item.tanggal}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* ANNOUNCEMENT */}

        <section className="dashboard-card announcement-card">

          <div className="card-header">

            <h2>Pengumuman</h2>

            <a href="#pengumuman">
              Lihat Semua
            </a>

          </div>

          <div className="announcement-list">

            {pengumuman.map((item) => (
              <div
                className="announcement-item"
                key={item.title}
              >

                <div className="announcement-icon">
                  <Megaphone size={18} />
                </div>

                <div className="announcement-content">

                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.description}
                  </p>

                  <span>
                    {item.date}
                  </span>

                </div>

                <ArrowUpRight size={17} />

              </div>
            ))}

          </div>

        </section>

        <Footer />

      </main>

    </div>
  )
}

export default Dashboard
