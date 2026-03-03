<template>
  <section class="projects-section">
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>

    <div class="projects-container">
      <!-- Header -->
      <div class="projects-header">
        <span class="section-label">Proyek</span>
        <h2 class="section-title">Proyek & Pengalaman Kerja</h2>
        <p class="section-desc">
          Proyek-proyek yang telah saya kerjakan dalam bidang QA, analisis sistem, dan pengembangan teknologi.
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
        >
          {{ tab }}
        </button>
      </div>

      <!-- Cards Grid -->
      <div class="cards-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
        >
          <div class="card-icon-area" :style="{ background: project.bg }">
            <span class="card-emoji">{{ project.icon }}</span>
          </div>

          <div class="card-body">
            <div class="card-top">
              <span class="card-tag" :style="{ color: project.color, background: project.tagBg }">
                {{ project.category }}
              </span>
              <span class="card-year">{{ project.year }}</span>
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.desc }}</p>

            <div class="card-stack">
              <span v-for="tech in project.stack" :key="tech" class="stack-badge">{{ tech }}</span>
            </div>
          </div>

          <div class="card-footer">
            <a :href="project.link" class="card-link" target="_blank">
              Lihat Detail
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('Semua')

const tabs = ['Semua', 'QA & Testing', 'Data & Analytics', 'Development']

const projects = [
  {
    title: 'Insurance Core System',
    desc: 'Analisis sistem, pengujian QA menyeluruh, dan pengembangan alur proses menggunakan platform Pega untuk sistem asuransi inti perusahaan.',
    icon: '🛡️',
    bg: '#ede9fe',
    color: '#7c3aed',
    tagBg: '#ede9fe',
    category: 'QA & Testing',
    year: '2024',
    stack: ['Pega', 'SQL', 'Postman', 'JMeter'],
    link: '#',
  },
  {
    title: 'Performance Testing Platform',
    desc: 'Load testing dan performance tuning pada sistem backend untuk memastikan stabilitas dan skalabilitas aplikasi di bawah beban tinggi.',
    icon: '⚡',
    bg: '#e0f2fe',
    color: '#0369a1',
    tagBg: '#e0f2fe',
    category: 'QA & Testing',
    year: '2024',
    stack: ['JMeter', 'API Testing', 'Python'],
    link: '#',
  },
  {
    title: 'Business Data Dashboard',
    desc: 'Pembuatan dashboard analitik dan otomasi laporan bisnis untuk memudahkan pengambilan keputusan berbasis data.',
    icon: '📊',
    bg: '#dcfce7',
    color: '#16a34a',
    tagBg: '#dcfce7',
    category: 'Data & Analytics',
    year: '2023',
    stack: ['Python', 'SQL', 'Excel'],
    link: '#',
  },
  {
    title: 'API Automation Testing',
    desc: 'Pengujian otomatis untuk REST API menggunakan Postman dan script Python untuk memverifikasi fungsionalitas dan performa endpoint.',
    icon: '🔗',
    bg: '#fff7ed',
    color: '#ea580c',
    tagBg: '#fff7ed',
    category: 'QA & Testing',
    year: '2023',
    stack: ['Postman', 'Python', 'REST API'],
    link: '#',
  },
  {
    title: 'Data Reporting Automation',
    desc: 'Otomasi pembuatan laporan mingguan dan bulanan dari database SQL ke format Excel dan PDF secara terjadwal.',
    icon: '🗂️',
    bg: '#fef9c3',
    color: '#ca8a04',
    tagBg: '#fef9c3',
    category: 'Data & Analytics',
    year: '2023',
    stack: ['Python', 'SQL', 'Pandas', 'openpyxl'],
    link: '#',
  },
  {
    title: 'Internal Web System',
    desc: 'Pengembangan sistem web internal untuk manajemen tiket QA dan dokumentasi bug tracking antar tim.',
    icon: '🌐',
    bg: '#fce7f3',
    color: '#be185d',
    tagBg: '#fce7f3',
    category: 'Development',
    year: '2024',
    stack: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#',
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
  opacity: 0.2;
  pointer-events: none;
  z-index: 0;
}

.blob-1 {
  width: 420px;
  height: 420px;
  background: #7c3aed;
  top: -100px;
  right: -80px;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: #a78bfa;
  bottom: 40px;
  left: -60px;
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
  max-width: 520px;
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
  padding: 8px 22px;
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

.tab-btn:hover {
  border-color: #7c3aed;
  color: #7c3aed;
}

.tab-btn.active {
  background: #7c3aed;
  border-color: #7c3aed;
  color: #fff;
}

/* Cards */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

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
  box-shadow: 0 12px 32px rgba(124, 58, 237, 0.12);
  transform: translateY(-4px);
}

.card-icon-area {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-emoji {
  font-size: 2.8rem;
}

.card-body {
  padding: 20px 22px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 50px;
}

.card-year {
  font-size: 0.78rem;
  color: #9ca3af;
  font-weight: 500;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
}

.card-desc {
  font-size: 0.88rem;
  color: #6b7280;
  line-height: 1.6;
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.stack-badge {
  font-size: 0.72rem;
  font-weight: 600;
  background: #f3f4f6;
  color: #374151;
  padding: 4px 10px;
  border-radius: 6px;
}

.card-footer {
  padding: 16px 22px 20px;
  border-top: 1px solid #f3f4f6;
  margin-top: 16px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #7c3aed;
  text-decoration: none;
  transition: gap 0.2s;
}

.card-link:hover {
  gap: 10px;
}

.arrow {
  transition: transform 0.2s;
}

.card-link:hover .arrow {
  transform: translateX(3px);
}

@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>