<template>
  <section class="hero-wrapper">
  <main class="hero">
    <!-- Background decorations -->
    <div class="bg-blob bg-blob-1"></div>
    <div class="bg-blob bg-blob-2"></div>
    <div class="bg-dots"></div>

    <!-- Left Content -->
    <div class="hero-content">
      <p class="hero-greeting">
        <span class="greeting-text">Halo Semua 👋, Saya</span>
      </p>
      <h2 class="hero-name">Samuel Sihombing</h2>
      <p class="hero-role">
        IT Programmer
        <a href="#" class="company-link">Software Engineering</a>
      </p>
      <p class="hero-desc">
        Portofolio ini menampilkan proyek dan kontribusi saya sebagai pengembang di bidang
        teknologi.
      </p>

      <!-- CTA + Social Links -->
      <div class="hero-actions">
        <router-link to="/contact" class="cta-btn">Hubungi Saya</router-link>
        <div class="social-links">
          <a href="#" class="social-icon" title="GitHub" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" class="social-icon" title="LinkedIn" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" class="social-icon" title="Instagram" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-number">3+</span>
          <span class="stat-label">Tahun Pengalaman</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">20+</span>
          <span class="stat-label">Proyek Selesai</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">10+</span>
          <span class="stat-label">Klien Puas</span>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="tech-stack">
        <span class="tech-label">Tech Stack:</span>
        <div class="tech-badges">
          <span class="badge">PHP</span>
          <span class="badge">Laravel</span>
          <span class="badge">Vue.js</span>
          <span class="badge">MySQL</span>
          <span class="badge">JavaScript</span>
          <span class="badge">Git</span>
        </div>
      </div>
    </div>

    <!-- Right: Photo -->
    <div class="hero-photo-area">
      <div class="purple-circle"></div>
      <img
        :src="fotoSamuel"
        alt="Samuel Sihombing"
        class="hero-photo"
      />
      <div class="float-badge float-badge-top">
        <span class="float-icon">💻</span>
        <span>Full Stack Dev</span>
      </div>
      <div class="float-badge float-badge-bottom">
        <span class="float-icon">✅</span>
        <span>Open to Work</span>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <span class="scroll-text">Scroll ke bawah</span>
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
    </div>
  </main>
  </section>
</template>

<script setup>
import fotoSamuel from '@/assets/Foto_Samuel.jpg'
</script>

<style scoped>
/* ── Base ── */
.hero-wrapper {
  width: 100%;
  background: #f9f9fb;
  position: relative;
  overflow: hidden;
}

.hero {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  min-height: 640px;
  padding: 0 48px;
  padding-top: 72px; /* match your navbar height */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  font-family: 'Segoe UI', sans-serif;
  background: #f9f9fb;
  position: relative;
  box-sizing: border-box;
}

/* ── Background Decorations ── */
.bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}
.bg-blob-1 {
  width: 500px;
  height: 500px;
  background: #7c3aed;
  top: -120px;
  right: 100px;
}
.bg-blob-2 {
  width: 300px;
  height: 300px;
  background: #a78bfa;
  bottom: 60px;
  left: -80px;
}
.bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#c4b5fd 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.25;
  pointer-events: none;
  z-index: 0;
}

/* ── Left Content ── */
.hero-content {
  flex: 1;
  max-width: 580px;
  position: relative;
  z-index: 1;
  padding-bottom: 64px; /* room for scroll indicator */
}

.hero-greeting { margin-bottom: 10px; }
.greeting-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #7c3aed;
}

.hero-name {
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  color: #111;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
}

.hero-role {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}
.company-link {
  color: #111;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.company-link:hover { color: #7c3aed; }

.hero-desc {
  font-size: 0.97rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 480px;
}

/* ── CTA + Social ── */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.cta-btn {
  display: inline-block;
  background: #7c3aed;
  color: #fff;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s, transform 0.2s;
  white-space: nowrap;
}
.cta-btn:hover {
  background: #6d28d9;
  transform: translateY(-2px);
}

.social-links { display: flex; gap: 10px; }
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid #e2d9f3;
  color: #7c3aed;
  background: #fff;
  transition: all 0.2s;
  text-decoration: none;
}
.social-icon:hover {
  background: #7c3aed;
  color: #fff;
  border-color: #7c3aed;
  transform: translateY(-2px);
}

/* ── Stats ── */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  padding: 20px 24px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #ede9fe;
  box-shadow: 0 2px 16px rgba(124, 58, 237, 0.06);
  width: fit-content;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.stat-number {
  font-size: 1.6rem;
  font-weight: 800;
  color: #7c3aed;
  line-height: 1;
}
.stat-label {
  font-size: 0.75rem;
  color: #888;
  white-space: nowrap;
}
.stat-divider {
  width: 1px;
  height: 36px;
  background: #ede9fe;
}

/* ── Tech Stack ── */
.tech-stack {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.tech-label {
  font-size: 0.85rem;
  color: #888;
  font-weight: 500;
  white-space: nowrap;
}
.tech-badges { display: flex; gap: 8px; flex-wrap: wrap; }
.badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
  background: #ede9fe;
  color: #6d28d9;
  border: 1px solid #ddd6fe;
  transition: all 0.2s;
  cursor: default;
}
.badge:hover {
  background: #7c3aed;
  color: #fff;
  border-color: #7c3aed;
  transform: translateY(-1px);
}

/* ── Photo Area ── */
.hero-photo-area {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  max-width: 500px;
  padding-bottom: 64px; /* match content offset */
}

.purple-circle {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: #7c3aed;
  z-index: 0;
}
.hero-photo {
  position: relative;
  z-index: 1;
  width: 360px;
  height: 360px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
}

/* ── Floating Badges ── */
.float-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #ede9fe;
  border-radius: 30px;
  padding: 9px 18px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #333;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.12);
  z-index: 2;
  white-space: nowrap;
}
.float-badge-top {
  top: 30px;
  right: -10px;
  animation: floatY 3s ease-in-out infinite;
}
.float-badge-bottom {
  bottom: 90px; /* above the padding-bottom offset */
  left: -10px;
  animation: floatY 3s ease-in-out infinite;
  animation-delay: 1.5s;
}
.float-icon { font-size: 1rem; }

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

/* ── Scroll Indicator ── */
.scroll-indicator {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 3;
  opacity: 0.55;
  cursor: default;
  transition: opacity 0.2s;
}
.scroll-indicator:hover { opacity: 1; }

.scroll-text {
  font-size: 0.7rem;
  color: #7c3aed;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.scroll-mouse {
  width: 22px;
  height: 36px;
  border: 2px solid #7c3aed;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}
.scroll-wheel {
  width: 4px;
  height: 8px;
  background: #7c3aed;
  border-radius: 2px;
  animation: scrollDown 1.6s ease-in-out infinite;
}
@keyframes scrollDown {
  0%   { transform: translateY(0);    opacity: 1; }
  80%  { transform: translateY(10px); opacity: 0; }
  100% { transform: translateY(0);    opacity: 0; }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    padding: 100px 24px 100px;
    text-align: center;
    justify-content: center;
  }
  .hero-content   { padding-bottom: 0; max-width: 100%; }
  .hero-actions   { justify-content: center; }
  .hero-stats     { margin: 0 auto 24px; }
  .tech-stack     { justify-content: center; }
  .hero-photo-area {
    max-width: 100%;
    padding-bottom: 0;
    min-height: 320px;
  }
  .purple-circle,
  .hero-photo     { width: 280px; height: 280px; }
  .float-badge-top    { right: 0; top: 20px; }
  .float-badge-bottom { left: 0; bottom: 20px; }
}
</style>