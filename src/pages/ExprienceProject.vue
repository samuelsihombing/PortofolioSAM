<template>
  <section class="projects-section">
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>

    <div class="projects-container">
      <!-- Header -->
      <div class="projects-header">
        <span class="section-label">Portfolio</span>
        <h2 class="section-title">Proyek yang Pernah Saya Buat</h2>
        <p class="section-desc">
          Kumpulan proyek akademik dan profesional yang telah saya kerjakan di bidang
          pengembangan sistem, QA, dan teknologi informasi.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="tab-btn"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >{{ tab }}</button>
      </div>

      <!-- Cards -->
      <div class="cards-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
          :class="{ expanded: expandedCard === project.title }"
        >
          <!-- Top color bar -->
          <div class="card-bar" :style="{ background: project.color }"></div>

          <div class="card-inner">
            <!-- Header -->
            <div class="card-header">
              <div class="card-meta">
                <span class="card-tag" :style="{ color: project.color, background: project.tagBg }">
                  {{ project.category }}
                </span>
                <span class="card-period">{{ project.period }}</span>
              </div>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-org">{{ project.org }}</p>
            </div>

            <!-- Description -->
            <p class="card-desc">{{ project.desc }}</p>

            <!-- Highlights (if any) -->
            <ul v-if="project.highlights && expandedCard === project.title" class="highlight-list">
              <li v-for="h in project.highlights" :key="h">{{ h }}</li>
            </ul>

            <!-- Stack -->
            <div class="card-stack">
              <span v-for="tech in project.stack" :key="tech" class="stack-badge">{{ tech }}</span>
            </div>

            <!-- Footer -->
            <div class="card-footer">
              <button
                v-if="project.highlights"
                class="toggle-btn"
                @click="toggleCard(project.title)"
              >
                {{ expandedCard === project.title ? 'Sembunyikan ↑' : 'Lihat Detail ↓' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('Semua')
const expandedCard = ref(null)

function toggleCard(title) {
  expandedCard.value = expandedCard.value === title ? null : title
}

const tabs = ['Semua', 'Profesional', 'Akademik']

const projects = [
  {
    title: 'Garage Project',
    org: 'PT Milenia Mega Mandiri',
    period: 'Maret 2025 – Mei 2025',
    category: 'Profesional',
    color: '#7c3aed',
    tagBg: '#ede9fe',
    desc: 'Berkontribusi pada pengembangan logika inti aplikasi Garage sebagai bagian dari tim PEGA. Terlibat aktif dalam peningkatan proses backend dan komponen antarmuka pengguna untuk meningkatkan akurasi data, kegunaan, dan otomasi.',
    highlights: [
      'Mengembangkan komponen pop-up interaktif dengan berbagai fitur fungsional.',
      'Mengimplementasikan PEGA Activities untuk mengelola dan memvalidasi data tabel dengan aturan validasi yang kompleks.',
      'Menggunakan Tree Table untuk mengambil dan mengorganisir data hierarkis secara efisien.',
      'Meningkatkan komponen front-end dengan data tambahan untuk pengalaman pengguna yang lebih baik.',
      'Merancang dashboard dengan kemampuan sorting kustom berdasarkan preferensi pengguna.',
      'Mengintegrasikan Report Definition dengan PEGA Activities untuk mengambil data dari sumber eksternal ke database SQL internal.',
      'Mengkonfigurasi Schedulers untuk mengotomasi sinkronisasi data secara berkala.',
    ],
    stack: ['Pega', 'SQL', 'JavaScript', 'Report Definition'],
  },
  {
    title: 'CMO Project',
    org: 'PT Milenia Mega Mandiri',
    period: 'Mei 2025 – Juli 2025',
    category: 'Profesional',
    color: '#0369a1',
    tagBg: '#e0f2fe',
    desc: 'Membantu pengembangan dan integrasi beberapa API baru untuk identifikasi dokumen yang diunggah dari aplikasi CMO. API berinteraksi dengan database berbasis SQL untuk memastikan pelacakan dokumen dan konsistensi data yang akurat.',
    highlights: [
      'Mengimplementasikan fitur validasi di PEGA untuk memeriksa status STNK kendaraan (aktif/kadaluarsa) menggunakan Data Transform.',
      'Menggunakan structured business logic rules dengan data referensi yang tersimpan di database SQL.',
      'Meningkatkan dan memperbaiki berbagai komponen front-end untuk kegunaan dan konsistensi antarmuka.',
      'Mengembangkan fitur notifikasi otomatis yang mengingatkan staf marketing ketika tugas entri data tertunda.',
    ],
    stack: ['Pega', 'SQL', 'Data Transform', 'API Integration'],
  },
  {
    title: 'SIMFAST Project',
    org: 'PT Milenia Mega Mandiri',
    period: 'Juli 2025 – Juni 2025',
    category: 'Profesional',
    color: '#be185d',
    tagBg: '#fce7f3',
    desc: 'Berfokus penuh pada pengembangan dan peningkatan antarmuka pengguna menggunakan kemampuan terbaru PEGA. Mengimplementasikan UI validation rules, dynamic color coding, dan custom CSS styling untuk konsistensi visual dan pengalaman pengguna.',
    highlights: [
      'Menerapkan default skins dan custom CSS styling untuk meningkatkan konsistensi visual.',
      'Mengimplementasikan multiple UI validation rules berdasarkan kebutuhan pengguna.',
      'Mengganti inline styling dengan JavaScript-based logic untuk validasi warna yang lebih maintainable.',
      'Menggunakan dynamic color coding berdasarkan kondisi data secara real-time.',
    ],
    stack: ['Pega', 'CSS', 'JavaScript', 'UI/UX'],
  },
  {
    title: 'Faculty Information System',
    org: 'Institut Teknologi Del — Final Year Project',
    period: 'Januari 2023 – Mei 2023',
    category: 'Akademik',
    color: '#16a34a',
    tagBg: '#dcfce7',
    desc: 'Mengembangkan sistem informasi berbasis web untuk fakultas mencakup profil dosen, program studi, lecturer, portofolio, dan manajemen FRK/FED. Sistem memperlancar komunikasi internal dan memudahkan akses informasi bagi mahasiswa.',
    highlights: [
      'Menyederhanakan persiapan FRK/FED dan meningkatkan komunikasi internal fakultas.',
      'Mendukung diseminasi dan promosi informasi akademik secara digital.',
      'Memungkinkan mahasiswa mengakses berita dan agenda fakultas dengan mudah.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Online Shop Mobile & Web App',
    org: 'Del Institute of Technology',
    period: 'Juni 2022 – Agustus 2022',
    category: 'Akademik',
    color: '#ea580c',
    tagBg: '#fff7ed',
    desc: 'Membangun aplikasi mobile menggunakan Kotlin dan aplikasi web menggunakan PHP (Laravel Framework). Merancang dan mengimplementasikan RESTful web services dan microservices untuk mendukung akses data yang efisien, pemrosesan, dan skalabilitas sistem.',
    highlights: null,
    stack: ['Kotlin', 'Laravel', 'PHP', 'REST API', 'Microservices'],
  },
  {
    title: 'Online Shop dengan Microservice',
    org: 'Del Institute of Technology',
    period: 'Maret 2022 – April 2022',
    category: 'Akademik',
    color: '#ca8a04',
    tagBg: '#fef9c3',
    desc: 'Merancang dan mengembangkan platform jual beli online menggunakan arsitektur berbasis microservices. Aplikasi menggunakan Laravel untuk front-end dan Go (Golang) untuk back-end service management dan penanganan data.',
    highlights: null,
    stack: ['Laravel', 'Go (Golang)', 'Microservices', 'MySQL'],
  },
  {
    title: 'E-Ticketing & Tracking System',
    org: 'Del Institute of Technology — Transportasi Danau Toba',
    period: 'Desember 2023 – April 2024',
    category: 'Akademik',
    color: '#0891b2',
    tagBg: '#cffafe',
    desc: 'Meredesain sistem e-ticketing dan live tracking transportasi publik di kawasan Danau Toba. Frontend dibangun dengan Vue.js untuk antarmuka yang responsif; backend berbasis server untuk menangani transaksi GPS, tiket, dan pemrosesan data secara real-time.',
    highlights: [
      'Frontend dibangun dengan Vue.js untuk pembelian tiket dan monitoring kendaraan secara real-time.',
      'Backend menangani live GPS tracking, transaksi tiket, dan pemrosesan data.',
      'Lokasi kendaraan ditransmisikan ke server dan ditampilkan secara dinamis pada klien.',
    ],
    stack: ['Vue.js', 'Laravel', 'GPS Tracking', 'MySQL', 'Real-time'],
  },
]

const filteredProjects = computed(() =>
  activeTab.value === 'Semua'
    ? projects
    : projects.filter((p) => p.category === activeTab.value)
)
</script>

<style scoped>
.projects-section {
  position: relative;
  min-height: 100vh;
  background: #f9f9fb;
  padding: 120px 24px 80px;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

.bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
}

.blob-1 {
  width: 420px; height: 420px;
  background: #7c3aed;
  top: -100px; right: -80px;
}

.blob-2 {
  width: 300px; height: 300px;
  background: #a78bfa;
  bottom: 40px; left: -60px;
}

.projects-container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
}

/* Header */
.projects-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-label {
  display: inline-block;
  background: #ede9fe;
  color: #7c3aed;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #111;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
}

.section-desc {
  font-size: 1rem;
  color: #6b7280;
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 44px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 8px 24px;
  border-radius: 50px;
  border: 1.5px solid #e5e7eb;
  background: #fff;
  font-size: 0.88rem;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.25s;
  font-family: 'Segoe UI', sans-serif;
}

.tab-btn:hover { border-color: #7c3aed; color: #7c3aed; }
.tab-btn.active { background: #7c3aed; border-color: #7c3aed; color: #fff; }

/* Grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

/* Card */
.project-card {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
}

.project-card:hover {
  border-color: #7c3aed;
  box-shadow: 0 12px 32px rgba(124, 58, 237, 0.1);
  transform: translateY(-3px);
}

.card-bar {
  height: 5px;
  width: 100%;
}

.card-inner {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

.card-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 50px;
}

.card-period {
  font-size: 0.78rem;
  color: #9ca3af;
  font-weight: 500;
  background: #f3f4f6;
  padding: 4px 12px;
  border-radius: 50px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;
}

.card-org {
  font-size: 0.82rem;
  color: #9ca3af;
  font-weight: 500;
  margin-top: -6px;
}

.card-desc {
  font-size: 0.88rem;
  color: #4b5563;
  line-height: 1.7;
}

/* Highlights */
.highlight-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid #f3f4f6;
  padding-top: 14px;
}

.highlight-list li {
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.6;
  padding-left: 18px;
  position: relative;
}

.highlight-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #7c3aed;
  font-size: 0.75rem;
  top: 3px;
}

/* Stack */
.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.stack-badge {
  font-size: 0.72rem;
  font-weight: 600;
  background: #f3f4f6;
  color: #374151;
  padding: 4px 10px;
  border-radius: 6px;
}

/* Footer */
.card-footer {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid #f3f4f6;
}

.toggle-btn {
  font-size: 0.85rem;
  font-weight: 600;
  color: #7c3aed;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  transition: opacity 0.2s;
}

.toggle-btn:hover { opacity: 0.7; }

/* Responsive */
@media (max-width: 720px) {
  .cards-grid { grid-template-columns: 1fr; }
}
</style>