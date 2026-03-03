<template>
  <section class="about-section">
    <div class="bg-blob blob-1"></div>
    <div class="bg-blob blob-2"></div>

    <div class="about-container">

      <!-- ── ABOUT ME ── -->
      <div class="block reveal">
        <div class="block-header">
          <span class="section-label">Tentang Saya</span>
          <h2 class="section-title">About Me</h2>
        </div>
        <div class="about-card">
          <div class="about-avatar">
            <div class="avatar-circle">SS</div>
            <div class="avatar-ring"></div>
          </div>
          <div class="about-text">
            <p>
              Saya adalah lulusan <strong>Software Engineering</strong> dengan latar belakang yang kuat
              dalam pengembangan aplikasi web dan lebih dari <strong>dua tahun pengalaman kerja profesional</strong>
              di industri IT.
            </p>
            <div class="quick-facts">
              <div class="fact-chip"><span class="fact-icon">📍</span><span>Indonesia</span></div>
              <div class="fact-chip"><span class="fact-icon">💼</span><span>IT Programmer @ PT Milenia Mega Mandiri</span></div>
              <div class="fact-chip"><span class="fact-icon">🎯</span><span>Open to Work</span></div>
              <div class="fact-chip"><span class="fact-icon">🌐</span><span>Bahasa Indonesia & English</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── EXPERIENCE TIMELINE ── -->
      <div class="block reveal">
        <div class="block-header">
          <span class="section-label">Pengalaman</span>
          <h2 class="section-title">Experience</h2>
        </div>
        <div class="timeline">
          <div v-for="(exp, i) in experiences" :key="i" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div>
                  <h3 class="timeline-role">{{ exp.role }}</h3>
                  <p class="timeline-company">{{ exp.company }}</p>
                </div>
                <div class="timeline-right">
                  <span class="timeline-period">{{ exp.period }}</span>
                  <span class="timeline-type" :class="exp.type">{{ exp.typeLabel }}</span>
                </div>
              </div>
              <ul class="timeline-list">
                <li v-for="(item, j) in exp.points" :key="j">{{ item }}</li>
              </ul>
              <div class="timeline-tags">
                <span v-for="tag in exp.tags" :key="tag" class="timeline-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── EDUCATION ── -->
      <div class="block reveal">
        <div class="block-header">
          <span class="section-label">Pendidikan</span>
          <h2 class="section-title">Education</h2>
        </div>
        <div class="edu-card">
          <div class="edu-left">
            <div class="edu-icon">🎓</div>
            <div class="edu-line"></div>
          </div>
          <div class="edu-right">
            <div class="edu-top">
              <div>
                <h3 class="edu-school">Del Institute of Technology Laguboti</h3>
                <p class="edu-degree">S1 Teknik Informatika — Software Engineering</p>
                <div class="edu-meta">
                  <span class="edu-gpa">IPK: 3.33 / 4.00</span>
                  <div class="gpa-bar-wrap"><div class="gpa-bar" style="--gpa: 83.25%"></div></div>
                </div>
              </div>
              <span class="edu-period">Agustus 2020 – September 2024</span>
            </div>
            <div class="edu-details">
              <div class="detail-item">
                <h4 class="detail-title">📚 Mata Kuliah Relevan</h4>
                <div class="course-tags">
                  <span v-for="course in courses" :key="course" class="course-tag">{{ course }}</span>
                </div>
              </div>
              <div class="detail-item">
                <h4 class="detail-title">🏆 Academic Highlights</h4>
                <ul class="highlight-list">
                  <li>Mengembangkan solusi perangkat lunak berbasis bisnis melalui analisis sistem komprehensif dan pemodelan alur bisnis.</li>
                  <li>Pengalaman luas dalam <strong>SDLC penuh</strong> untuk aplikasi web dan platform low-code.</li>
                  <li>Mahir dalam mengoptimalkan proses bisnis melalui otomasi sistem dan integrasi teknologi.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SKILLS ── -->
      <div class="block reveal">
        <div class="block-header">
          <span class="section-label">Keahlian</span>
          <h2 class="section-title">Skills</h2>
        </div>
        <div class="skill-tabs">
          <button v-for="tab in skillTabs" :key="tab.key" class="skill-tab"
            :class="{ active: activeTab === tab.key }" @click="activeTab = tab.key">
            <span>{{ tab.icon }}</span><span>{{ tab.label }}</span>
          </button>
        </div>
        <div class="skills-grid">
          <div v-for="group in filteredSkillGroups" :key="group.title" class="skill-card">
            <div class="skill-card-header">
              <span class="skill-icon">{{ group.icon }}</span>
              <h4 class="skill-group-title">{{ group.title }}</h4>
            </div>
            <div class="skill-bars">
              <div v-for="skill in group.skills" :key="skill.name" class="skill-bar-row">
                <div class="skill-bar-label">
                  <span>{{ skill.name }}</span>
                  <span class="skill-pct">{{ skill.pct }}%</span>
                </div>
                <div class="skill-bar-bg">
                  <div class="skill-bar-fill" :style="{ '--w': skill.pct + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="legend">
          <span class="legend-item"><span class="legend-dot high"></span>Expert (80–100%)</span>
          <span class="legend-item"><span class="legend-dot mid"></span>Intermediate (50–79%)</span>
          <span class="legend-item"><span class="legend-dot low"></span>Familiar (20–49%)</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const courses = [
  'Pemrograman Dasar & Lanjut','Software Engineering','Database Systems',
  'Analisis & Desain Sistem','Web Application Development','Information Systems',
  'IT Project Management','Software Testing & Maintenance',
]

const experiences = [
  {
    role: 'PEGA Developer',
    company: 'Sinarmas Multifinance',
    period: 'January 2024 – October 2025',
    type: 'fulltime',
    typeLabel: 'Full-time',
    points: [
      'Developed and enhanced business automation systems using PEGA and RESTful APIs, applying structured backend logic and data flow concepts aligned with modern backend frameworks.',
      'Collaborated cross-functionally with business and technical teams to analyze requirements, translate them into efficient, scalable application workflows, and ensure alignment with business objectives.',
      'Designed and implemented front-end improvements and robust data validation logic, significantly improving system reliability, usability, and data accuracy.',
    ],
    tags: ['PEGA', 'RESTful API', 'Business Automation', 'Data Validation'],
  },
  {
    role: 'PEGA Developer Intern',
    company: 'PT Asuransi Sinarmas',
    period: 'August 2023 – December 2023',
    type: 'intern',
    typeLabel: 'Internship',
    points: [
      'Responsible for designing and developing applications using the PEGA platform.',
      'Collaborated closely with the development team to analyze business requirements and translate them into technical specifications.',
      'Involved in testing and debugging applications to ensure they met the desired quality standards.',
      'Enhanced skills in PEGA development, problem-solving, and teamwork.',
    ],
    tags: ['PEGA', 'Application Development', 'Testing & Debugging', 'Business Analysis'],
  },
]

const skillTabs = [
  { key: 'all', icon: '⚡', label: 'Semua' },
  { key: 'qa',  icon: '🧪', label: 'QA' },
  { key: 'dev', icon: '💻', label: 'Dev' },
  { key: 'data',icon: '📊', label: 'Data' },
  { key: 'db',  icon: '🗄️', label: 'Database' },
]
const activeTab = ref('all')

const skillGroups = [
  { key: 'qa',   icon: '🧪', title: 'QA & Testing',
    skills: [{ name: 'Manual Testing', pct: 85 }, { name: 'Postman / API Testing', pct: 80 }, { name: 'JMeter', pct: 65 }, { name: 'Bug Tracking', pct: 78 }] },
  { key: 'dev',  icon: '💻', title: 'Development',
    skills: [{ name: 'Vue.js', pct: 80 }, { name: 'Laravel', pct: 75 }, { name: 'HTML / CSS', pct: 88 }, { name: 'JavaScript', pct: 72 }, { name: 'Pega (Low-Code)', pct: 60 }] },
  { key: 'db',   icon: '🗄️', title: 'Database',
    skills: [{ name: 'MySQL', pct: 82 }, { name: 'PostgreSQL', pct: 70 }, { name: 'SQL Server', pct: 65 }, { name: 'Query Optimization', pct: 68 }] },
  { key: 'data', icon: '📊', title: 'Data & Analytics',
    skills: [{ name: 'Python', pct: 60 }, { name: 'Pandas', pct: 55 }, { name: 'Power BI', pct: 65 }, { name: 'Excel', pct: 78 }] },
]

const filteredSkillGroups = computed(() =>
  activeTab.value === 'all' ? skillGroups : skillGroups.filter(g => g.key === activeTab.value)
)

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => { entries.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target) } }) },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.about-section { position: relative; min-height: 100vh; background: #f9f9fb; padding: 120px 24px 80px; overflow: hidden; font-family: 'Segoe UI', sans-serif; }
.reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.65s ease, transform 0.65s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.bg-blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.18; pointer-events: none; z-index: 0; }
.blob-1 { width: 400px; height: 400px; background: #7c3aed; top: -80px; right: -80px; }
.blob-2 { width: 300px; height: 300px; background: #a78bfa; bottom: 60px; left: -60px; }
.about-container { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 72px; }
.block-header { margin-bottom: 28px; }
.section-label { display: inline-block; background: #ede9fe; color: #7c3aed; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 16px; border-radius: 50px; margin-bottom: 12px; }
.section-title { font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 800; color: #111; letter-spacing: -0.03em; }
.about-card { background: #fff; border: 1.5px solid #e5e7eb; border-radius: 20px; padding: 32px; display: flex; align-items: flex-start; gap: 28px; box-shadow: 0 2px 20px rgba(124,58,237,0.05); }
.about-avatar { position: relative; flex-shrink: 0; }
.avatar-circle { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed, #a78bfa); color: #fff; font-size: 1.4rem; font-weight: 800; display: flex; align-items: center; justify-content: center; position: relative; z-index: 1; }
.avatar-ring { position: absolute; inset: -5px; border-radius: 50%; border: 2px dashed #c4b5fd; animation: spin 12s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.about-text p { font-size: 1rem; color: #374151; line-height: 1.8; margin-bottom: 20px; }
.quick-facts { display: flex; flex-wrap: wrap; gap: 8px; }
.fact-chip { display: flex; align-items: center; gap: 6px; background: #f3f4f6; border: 1px solid #e5e7eb; padding: 6px 14px; border-radius: 50px; font-size: 0.8rem; font-weight: 500; color: #374151; transition: all 0.2s; }
.fact-chip:hover { background: #ede9fe; border-color: #c4b5fd; color: #7c3aed; }
/* Timeline */
.timeline { display: flex; flex-direction: column; padding-left: 20px; border-left: 2px solid #ede9fe; }
.timeline-item { position: relative; padding: 0 0 36px 28px; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot { position: absolute; left: -9px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: #7c3aed; border: 3px solid #f9f9fb; box-shadow: 0 0 0 2px #7c3aed; }
.timeline-content { background: #fff; border: 1.5px solid #e5e7eb; border-radius: 16px; padding: 24px; transition: border-color 0.25s, box-shadow 0.25s; }
.timeline-content:hover { border-color: #c4b5fd; box-shadow: 0 6px 24px rgba(124,58,237,0.08); }
.timeline-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
.timeline-role { font-size: 1.05rem; font-weight: 700; color: #111; margin-bottom: 2px; }
.timeline-company { font-size: 0.88rem; color: #7c3aed; font-weight: 600; }
.timeline-right { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
.timeline-period { font-size: 0.8rem; color: #9ca3af; font-weight: 500; background: #f3f4f6; padding: 4px 12px; border-radius: 50px; white-space: nowrap; }
.timeline-type { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 50px; }
.timeline-type.fulltime { background: #dcfce7; color: #16a34a; }
.timeline-type.intern   { background: #fef9c3; color: #ca8a04; }
.timeline-list { list-style: none; padding: 0; margin-bottom: 14px; display: flex; flex-direction: column; gap: 8px; }
.timeline-list li { font-size: 0.88rem; color: #4b5563; line-height: 1.6; padding-left: 16px; position: relative; }
.timeline-list li::before { content: '▸'; position: absolute; left: 0; color: #7c3aed; font-size: 0.75rem; top: 2px; }
.timeline-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.timeline-tag { font-size: 0.72rem; font-weight: 600; background: #ede9fe; color: #7c3aed; padding: 3px 10px; border-radius: 6px; }
/* Education */
.edu-card { background: #fff; border: 1.5px solid #e5e7eb; border-radius: 20px; padding: 32px; display: flex; gap: 24px; box-shadow: 0 2px 20px rgba(124,58,237,0.05); }
.edu-left { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.edu-icon { font-size: 2rem; background: #ede9fe; width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.edu-line { width: 2px; flex: 1; background: linear-gradient(to bottom, #7c3aed33, transparent); border-radius: 2px; }
.edu-right { flex: 1; display: flex; flex-direction: column; gap: 20px; }
.edu-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; }
.edu-school { font-size: 1.1rem; font-weight: 700; color: #111; margin-bottom: 4px; }
.edu-degree { font-size: 0.92rem; color: #6b7280; margin-bottom: 10px; }
.edu-meta { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.edu-gpa { display: inline-block; background: #ede9fe; color: #7c3aed; font-size: 0.78rem; font-weight: 700; padding: 4px 12px; border-radius: 50px; white-space: nowrap; }
.gpa-bar-wrap { width: 120px; height: 6px; background: #e5e7eb; border-radius: 4px; overflow: hidden; }
.gpa-bar { height: 100%; width: var(--gpa); background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 4px; animation: growBar 1.2s ease forwards; }
@keyframes growBar { from { width: 0; } to { width: var(--gpa); } }
.edu-period { font-size: 0.82rem; color: #9ca3af; font-weight: 500; white-space: nowrap; background: #f3f4f6; padding: 6px 14px; border-radius: 50px; height: fit-content; }
.edu-details { display: flex; flex-direction: column; gap: 18px; }
.detail-title { font-size: 0.88rem; font-weight: 700; color: #374151; margin-bottom: 10px; }
.course-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.course-tag { font-size: 0.78rem; font-weight: 600; background: #f3f4f6; color: #374151; padding: 5px 12px; border-radius: 8px; transition: all 0.2s; cursor: default; }
.course-tag:hover { background: #ede9fe; color: #7c3aed; }
.highlight-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.highlight-list li { font-size: 0.9rem; color: #4b5563; line-height: 1.65; padding-left: 18px; position: relative; }
.highlight-list li::before { content: '▸'; position: absolute; left: 0; color: #7c3aed; font-size: 0.8rem; top: 2px; }
/* Skill tabs */
.skill-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
.skill-tab { display: flex; align-items: center; gap: 6px; padding: 8px 18px; border-radius: 50px; border: 1.5px solid #e5e7eb; background: #fff; font-size: 0.85rem; font-weight: 600; color: #6b7280; cursor: pointer; transition: all 0.2s; font-family: inherit; }
.skill-tab:hover { border-color: #c4b5fd; color: #7c3aed; background: #faf5ff; }
.skill-tab.active { background: #7c3aed; border-color: #7c3aed; color: #fff; box-shadow: 0 4px 14px rgba(124,58,237,0.3); }
/* Skills grid */
.skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-bottom: 20px; }
.skill-card { background: #fff; border: 1.5px solid #e5e7eb; border-radius: 16px; padding: 22px; transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s; }
.skill-card:hover { border-color: #7c3aed; box-shadow: 0 8px 24px rgba(124,58,237,0.1); transform: translateY(-3px); }
.skill-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
.skill-icon { font-size: 1.4rem; }
.skill-group-title { font-size: 0.95rem; font-weight: 700; color: #111; }
.skill-bars { display: flex; flex-direction: column; gap: 12px; }
.skill-bar-row { display: flex; flex-direction: column; gap: 5px; }
.skill-bar-label { display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; color: #374151; }
.skill-pct { color: #7c3aed; font-weight: 700; }
.skill-bar-bg { height: 7px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }
.skill-bar-fill { height: 100%; width: 0; border-radius: 4px; background: linear-gradient(90deg, #7c3aed, #a78bfa); animation: fillBar 1s ease forwards; animation-delay: 0.3s; }
@keyframes fillBar { to { width: var(--w); } }
/* Legend */
.legend { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }
.legend-item { display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: #6b7280; font-weight: 500; }
.legend-dot { width: 10px; height: 10px; border-radius: 50%; }
.legend-dot.high { background: #7c3aed; }
.legend-dot.mid  { background: #a78bfa; }
.legend-dot.low  { background: #ddd6fe; }
/* Responsive */
@media (max-width: 640px) {
  .about-card { flex-direction: column; }
  .edu-card { flex-direction: column; }
  .edu-line { display: none; }
  .edu-top { flex-direction: column; }
  .skills-grid { grid-template-columns: 1fr; }
  .timeline-header { flex-direction: column; }
  .timeline-right { align-items: flex-start; }
}
</style>