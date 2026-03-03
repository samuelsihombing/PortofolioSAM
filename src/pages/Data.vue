<template>
  <section class="skills-section">
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>

    <div class="skills-container">
      <!-- Header -->
      <div class="skills-header">
        <span class="section-label">Keahlian</span>
        <h2 class="section-title">Skills & Kemampuan</h2>
        <p class="section-desc">
          Kumpulan keahlian teknis dan non-teknis yang saya kuasai selama kuliah dan pengalaman kerja profesional.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="skills-grid">
        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="skill-card"
        >
          <div class="card-icon-area" :style="{ background: group.bg }">
            <span class="card-emoji">{{ group.icon }}</span>
          </div>

          <div class="card-body">
            <div class="card-top">
              <span class="card-tag" :style="{ color: group.color, background: group.tagBg }">
                {{ group.category }}
              </span>
            </div>
            <h3 class="card-title">{{ group.title }}</h3>
            <p class="card-desc">{{ group.desc }}</p>

            <div class="card-stack">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="stack-badge"
                :style="{ '--hover-color': group.color, '--hover-bg': group.tagBg }"
              >{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: 'Programming & Tools',
    desc: 'Bahasa pemrograman dan platform yang saya gunakan dalam pengembangan sistem dan aplikasi.',
    icon: '💻',
    bg: '#ede9fe',
    color: '#7c3aed',
    tagBg: '#ede9fe',
    category: 'Technical',
    skills: ['JavaScript', 'SQL', 'Python', 'Java', 'Vue.js', 'HTML', 'CSS', 'REST API', 'PEGA Platform'],
  },
  {
    title: 'Design & Edit',
    desc: 'Tools desain untuk membuat antarmuka, prototype, dan materi visual yang menarik.',
    icon: '🎨',
    bg: '#fce7f3',
    color: '#be185d',
    tagBg: '#fce7f3',
    category: 'Design',
    skills: ['Figma', 'Canva'],
  },
  {
    title: 'Data & Analytics',
    desc: 'Kemampuan analisis dan visualisasi data untuk menghasilkan insight yang actionable.',
    icon: '📊',
    bg: '#dcfce7',
    color: '#16a34a',
    tagBg: '#dcfce7',
    category: 'Analytics',
    skills: ['Excel', 'Power BI', 'Tableau', 'Basic Statistics', 'Data Cleaning', 'Python'],
  },
  {
    title: 'Development Tools',
    desc: 'Tools pendukung yang digunakan dalam alur kerja pengembangan dan kolaborasi tim.',
    icon: '🛠️',
    bg: '#e0f2fe',
    color: '#0369a1',
    tagBg: '#e0f2fe',
    category: 'Tools',
    skills: ['Jira', 'Git', 'VS Code', 'Postman'],
  },
  {
    title: 'Interpersonal Skills',
    desc: 'Kemampuan soft skill yang mendukung kolaborasi dan produktivitas dalam tim kerja.',
    icon: '🤝',
    bg: '#fff7ed',
    color: '#ea580c',
    tagBg: '#fff7ed',
    category: 'Soft Skills',
    skills: ['Critical Thinking', 'Teamwork', 'Team Leadership', 'Active Listening', 'Responsibility'],
  },
]
</script>

<style scoped>
.skills-section {
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
  width: 420px; height: 420px;
  background: #7c3aed;
  top: -100px; left: -80px;
}

.blob-2 {
  width: 320px; height: 320px;
  background: #a78bfa;
  bottom: 40px; right: -60px;
}

.skills-container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
}

/* Header */
.skills-header {
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

/* Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

/* Card */
.skill-card {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
}

.skill-card:hover {
  border-color: #7c3aed;
  box-shadow: 0 12px 32px rgba(124, 58, 237, 0.12);
  transform: translateY(-4px);
}

.card-icon-area {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-emoji {
  font-size: 2.6rem;
}

.card-body {
  padding: 20px 22px 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-top {
  display: flex;
  align-items: center;
}

.card-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 50px;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
}

.card-desc {
  font-size: 0.86rem;
  color: #6b7280;
  line-height: 1.6;
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 4px;
}

.stack-badge {
  font-size: 0.78rem;
  font-weight: 600;
  background: #f3f4f6;
  color: #374151;
  padding: 5px 12px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  cursor: default;
}

.skill-card:hover .stack-badge {
  background: var(--hover-bg);
  color: var(--hover-color);
}

/* Responsive */
@media (max-width: 900px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 580px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>