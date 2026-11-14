import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, UploadCloud, FileText, X } from 'lucide-react'
import { hitungUsia, OPSI_STATUS_PENDIDIKAN, statusPendidikanAnak } from '../data/anakAsuh'
import '../styles/components/FormAnak.css'

const DOKUMEN_AWAL = [
  { label: 'Akta Kelahiran', namaFile: '', wajib: true },
  { label: 'Kartu Keluarga', namaFile: '', wajib: true },
  { label: 'Surat Keterangan Sehat', namaFile: '', wajib: true }
]

const FORM_KOSONG = {
  foto: null,
  nama: '',
  jenisKelamin: '',
  tempatLahir: '',
  tanggalLahir: '',
  usia: '',
  status: 'Aktif',
  statusPendidikan: 'Sedang Sekolah',
  sekolah: '',
  kelas: '',
  semester: '',
  tahunMasuk: '',
  tahunLulus: '',
  golonganDarah: '',
  riwayatPenyakit: '',
  alergi: '',
  tanggalMasukPanti: '',
  asalDaerah: '',
  namaWali: '',
  teleponWali: '',
  keterangan: '',
  dokumen: DOKUMEN_AWAL,
  riwayatKegiatan: []
}

const FIELD_WAJIB = [
  ['nama', 'Nama lengkap'],
  ['jenisKelamin', 'Jenis kelamin'],
  ['tempatLahir', 'Tempat lahir'],
  ['tanggalLahir', 'Tanggal lahir'],
  ['usia', 'Usia'],
  ['statusPendidikan', 'Status pendidikan'],
  ['golonganDarah', 'Golongan darah'],
  ['tanggalMasukPanti', 'Tanggal masuk panti'],
  ['asalDaerah', 'Asal daerah'],
  ['namaWali', 'Nama wali'],
  ['teleponWali', 'No. telepon wali']
]

const OPSI_KELAS = Array.from({ length: 12 }, (_, index) => String(index + 1))
const OPSI_SEMESTER = Array.from({ length: 14 }, (_, index) => String(index + 1))

function Field({ label, wajib, catatan, lebar, children }) {
  return (
    <label className={`form-field${lebar ? ' form-field-lebar' : ''}`}>
      <span className="form-label">
        {label}
        {wajib && <em>*</em>}
      </span>
      {children}
      {catatan && <small>{catatan}</small>}
    </label>
  )
}

function FormAnak({ initialData, onSubmit, labelTombol = 'Tambah Anak' }) {
  const navigate = useNavigate()
  const [form, setForm] = useState(() => {
    const awal = {
      ...FORM_KOSONG,
      ...initialData,
      dokumen:
        initialData?.dokumen?.length > 0 ? initialData.dokumen : DOKUMEN_AWAL
    }

    return {
      ...awal,
      statusPendidikan: initialData
        ? statusPendidikanAnak(awal)
        : awal.statusPendidikan
    }
  })
  const [pesan, setPesan] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setForm((sebelumnya) => {
      const berikutnya = { ...sebelumnya, [name]: value }

      if (name === 'tanggalLahir') {
        berikutnya.usia = hitungUsia(value)
      }

      if (name === 'statusPendidikan') {
        if (value === 'Belum/Tidak Sekolah') {
          berikutnya.sekolah = ''
          berikutnya.kelas = ''
          berikutnya.semester = ''
          berikutnya.tahunMasuk = ''
          berikutnya.tahunLulus = ''
        }

        if (value === 'Sedang Sekolah') {
          berikutnya.semester = ''
          berikutnya.tahunLulus = ''
        }

        if (value === 'Sedang Kuliah') {
          berikutnya.kelas = ''
          berikutnya.tahunLulus = ''
        }

        if (value === 'Sudah Lulus') {
          berikutnya.kelas = ''
          berikutnya.semester = ''
          berikutnya.tahunMasuk = ''
        }
      }

      return berikutnya
    })
  }

  function handleFoto(event) {
    const file = event.target.files?.[0]
    if (!file) return

    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setPesan('Foto harus berformat PNG atau JPG.')
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      setPesan('Ukuran foto maksimal 2MB.')
      return
    }

    setPesan('')
    setForm((sebelumnya) => ({
      ...sebelumnya,
      foto: URL.createObjectURL(file)
    }))
  }

  function handleDokumen(index, event) {
    const file = event.target.files?.[0]
    if (!file) return

    setForm((sebelumnya) => ({
      ...sebelumnya,
      dokumen: sebelumnya.dokumen.map((dokumen, posisi) =>
        posisi === index ? { ...dokumen, namaFile: file.name } : dokumen
      )
    }))
  }

  function handleLabelDokumen(index, value) {
    setForm((sebelumnya) => ({
      ...sebelumnya,
      dokumen: sebelumnya.dokumen.map((dokumen, posisi) =>
        posisi === index ? { ...dokumen, label: value } : dokumen
      )
    }))
  }

  function tambahDokumen() {
    setForm((sebelumnya) => ({
      ...sebelumnya,
      dokumen: [
        ...sebelumnya.dokumen,
        { label: 'Dokumen Lain', namaFile: '', wajib: false }
      ]
    }))
  }

  function hapusDokumen(index) {
    setForm((sebelumnya) => ({
      ...sebelumnya,
      dokumen: sebelumnya.dokumen.filter((_, posisi) => posisi !== index)
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const wajibPendidikan =
      form.statusPendidikan === 'Sedang Sekolah'
        ? [
            ['sekolah', 'Sekolah'],
            ['kelas', 'Kelas'],
            ['tahunMasuk', 'Tahun masuk sekolah']
          ]
        : form.statusPendidikan === 'Sedang Kuliah'
          ? [
              ['sekolah', 'Kampus'],
              ['semester', 'Semester'],
              ['tahunMasuk', 'Tahun masuk kuliah']
            ]
          : form.statusPendidikan === 'Sudah Lulus'
            ? [
                ['sekolah', 'Sekolah/kampus terakhir'],
                ['tahunLulus', 'Tahun lulus']
              ]
            : []

    const fieldKurang = [...FIELD_WAJIB, ...wajibPendidikan]
      .filter(([nama]) => !String(form[nama] ?? '').trim())
      .map(([, label]) => label)

    const dokumenKurang = form.dokumen
      .filter((dokumen) => dokumen.wajib && !dokumen.namaFile)
      .map((dokumen) => dokumen.label)

    if (fieldKurang.length > 0 || dokumenKurang.length > 0) {
      const bagian = []

      if (fieldKurang.length > 0) {
        bagian.push(`Field wajib belum lengkap: ${fieldKurang.join(', ')}.`)
      }

      if (dokumenKurang.length > 0) {
        bagian.push(`Dokumen wajib belum diunggah: ${dokumenKurang.join(', ')}.`)
      }

      setPesan(bagian.join(' '))
      return
    }

    setPesan('')
    onSubmit(form)
  }

  return (
    <form className="form-anak" onSubmit={handleSubmit} noValidate>
      {pesan && <p className="form-pesan">{pesan}</p>}

      <fieldset className="form-section">
        <legend>Foto Anak Asuh</legend>

        <div className="form-foto">
          <div className="form-foto-preview">
            {form.foto ? (
              <img src={form.foto} alt="Pratinjau foto anak asuh" />
            ) : (
              <UploadCloud size={26} />
            )}
          </div>

          <div className="form-foto-aksi">
            <label className="form-upload">
              <UploadCloud size={16} />
              {form.foto ? 'Ubah Foto' : 'Upload Foto'}
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFoto}
              />
            </label>
            <span>PNG, JPG maks. 2MB</span>
          </div>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Data Pribadi</legend>

        <div className="form-grid dua">
          <Field label="Nama Lengkap" wajib>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
            />
          </Field>

          <Field label="Jenis Kelamin" wajib>
            <select
              name="jenisKelamin"
              value={form.jenisKelamin}
              onChange={handleChange}
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </Field>

          <Field label="Tempat Lahir" wajib>
            <input
              type="text"
              name="tempatLahir"
              value={form.tempatLahir}
              onChange={handleChange}
              placeholder="Masukkan tempat lahir"
            />
          </Field>

          <Field label="Tanggal Lahir" wajib>
            <input
              type="date"
              name="tanggalLahir"
              value={form.tanggalLahir}
              onChange={handleChange}
            />
          </Field>

          <Field label="Usia" wajib catatan="Terisi otomatis dari tanggal lahir">
            <input
              type="text"
              name="usia"
              value={form.usia}
              readOnly
              placeholder="Otomatis dari tanggal lahir"
            />
          </Field>

          <Field label="Status" wajib>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="Aktif">Aktif</option>
              <option value="Alumni">Alumni</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Informasi Pendidikan</legend>

        <div className="form-grid tiga">
          <Field label="Status Pendidikan" wajib lebar>
            <select
              name="statusPendidikan"
              value={form.statusPendidikan}
              onChange={handleChange}
            >
              {OPSI_STATUS_PENDIDIKAN.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
          </Field>

          {form.statusPendidikan === 'Sedang Sekolah' && (
            <>
              <Field label="Sekolah" wajib>
                <input
                  type="text"
                  name="sekolah"
                  value={form.sekolah}
                  onChange={handleChange}
                  placeholder="Masukkan nama sekolah"
                />
              </Field>

              <Field label="Kelas" wajib>
                <select name="kelas" value={form.kelas} onChange={handleChange}>
                  <option value="">Masukkan kelas</option>
                  {OPSI_KELAS.map((kelas) => (
                    <option value={kelas} key={kelas}>
                      {kelas}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Tahun Masuk Sekolah" wajib>
                <input
                  type="number"
                  name="tahunMasuk"
                  value={form.tahunMasuk}
                  onChange={handleChange}
                  placeholder="Pilih tahun masuk"
                  min="2000"
                  max="2100"
                />
              </Field>
            </>
          )}

          {form.statusPendidikan === 'Sedang Kuliah' && (
            <>
              <Field label="Kampus" wajib>
                <input
                  type="text"
                  name="sekolah"
                  value={form.sekolah}
                  onChange={handleChange}
                  placeholder="Masukkan nama kampus"
                />
              </Field>

              <Field label="Semester" wajib>
                <select
                  name="semester"
                  value={form.semester}
                  onChange={handleChange}
                >
                  <option value="">Pilih semester</option>
                  {OPSI_SEMESTER.map((semester) => (
                    <option value={semester} key={semester}>
                      {semester}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Tahun Masuk Kuliah" wajib>
                <input
                  type="number"
                  name="tahunMasuk"
                  value={form.tahunMasuk}
                  onChange={handleChange}
                  placeholder="Pilih tahun masuk"
                  min="1980"
                  max="2100"
                />
              </Field>
            </>
          )}

          {form.statusPendidikan === 'Sudah Lulus' && (
            <>
              <Field label="Sekolah/Kampus Terakhir" wajib>
                <input
                  type="text"
                  name="sekolah"
                  value={form.sekolah}
                  onChange={handleChange}
                  placeholder="Masukkan sekolah atau kampus terakhir"
                />
              </Field>

              <Field label="Tahun Lulus" wajib>
                <input
                  type="number"
                  name="tahunLulus"
                  value={form.tahunLulus}
                  onChange={handleChange}
                  placeholder="Pilih tahun lulus"
                  min="1980"
                  max="2100"
                />
              </Field>
            </>
          )}

          {form.statusPendidikan === 'Belum/Tidak Sekolah' && (
            <p className="form-catatan">
              Tidak perlu mengisi data sekolah. Informasi pendidikan bisa
              dilengkapi nanti saat anak mulai bersekolah.
            </p>
          )}
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Informasi Kesehatan</legend>

        <div className="form-grid tiga">
          <Field label="Golongan Darah" wajib>
            <select
              name="golonganDarah"
              value={form.golonganDarah}
              onChange={handleChange}
            >
              <option value="">Pilih golongan darah</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
          </Field>

          <Field label="Riwayat Penyakit">
            <input
              type="text"
              name="riwayatPenyakit"
              value={form.riwayatPenyakit}
              onChange={handleChange}
              placeholder="Masukkan riwayat penyakit"
            />
          </Field>

          <Field label="Alergi">
            <input
              type="text"
              name="alergi"
              value={form.alergi}
              onChange={handleChange}
              placeholder="Masukkan alergi"
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Informasi Lainnya</legend>

        <div className="form-grid dua">
          <Field label="Tanggal Masuk Panti" wajib>
            <input
              type="date"
              name="tanggalMasukPanti"
              value={form.tanggalMasukPanti}
              onChange={handleChange}
            />
          </Field>

          <Field label="Asal Daerah" wajib>
            <input
              type="text"
              name="asalDaerah"
              value={form.asalDaerah}
              onChange={handleChange}
              placeholder="Masukkan asal daerah"
            />
          </Field>

          <Field label="Nama Wali" wajib>
            <input
              type="text"
              name="namaWali"
              value={form.namaWali}
              onChange={handleChange}
              placeholder="Masukkan nama wali"
            />
          </Field>

          <Field label="No. Telepon Wali" wajib>
            <input
              type="tel"
              name="teleponWali"
              value={form.teleponWali}
              onChange={handleChange}
              placeholder="Masukkan nomor telepon"
            />
          </Field>

          <Field label="Keterangan" lebar>
            <textarea
              name="keterangan"
              value={form.keterangan}
              onChange={handleChange}
              rows={3}
              placeholder="Masukkan keterangan anak asuh"
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>Dokumen Pendukung</legend>

        <div className="form-dokumen">
          {form.dokumen.map((dokumen, index) => (
            <div className="dokumen-baris" key={index}>
              <span className="dokumen-icon">
                <FileText size={16} />
              </span>

              <div className="dokumen-info">
                {dokumen.wajib ? (
                  <strong>
                    {dokumen.label}
                    <em>*</em>
                  </strong>
                ) : (
                  <input
                    type="text"
                    value={dokumen.label}
                    onChange={(event) =>
                      handleLabelDokumen(index, event.target.value)
                    }
                    aria-label="Nama dokumen"
                  />
                )}
                <span>{dokumen.namaFile || 'PDF maks. 2MB'}</span>
              </div>

              <label className="dokumen-unggah">
                <UploadCloud size={15} />
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(event) => handleDokumen(index, event)}
                />
              </label>

              {!dokumen.wajib && (
                <button
                  type="button"
                  className="dokumen-hapus"
                  onClick={() => hapusDokumen(index)}
                  aria-label="Hapus dokumen"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          ))}

          <button type="button" className="dokumen-tambah" onClick={tambahDokumen}>
            <Plus size={15} />
            Tambah Dokumen Lain
          </button>
        </div>
      </fieldset>

      <div className="form-aksi">
        <button
          type="button"
          className="tombol-batal"
          onClick={() => navigate(-1)}
        >
          Batal
        </button>
        <button type="submit" className="tombol-simpan">
          {labelTombol}
        </button>
      </div>
    </form>
  )
}

export default FormAnak
