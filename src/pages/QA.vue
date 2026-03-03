<template>
  <section class="section-padding">
    <div class="max-w-7xl mx-auto">

      <!-- Title -->
      <div class="text-center mb-16">
        <h1 class="section-title">
          QA <span class="text-cyan-400">Portfolio</span>
        </h1>
        <p class="section-subtitle">
          My expertise and professional QA experience across manual, automation,
          API, and performance testing.
        </p>
      </div>

      <!-- Skill Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div v-for="item in qaList" :key="item.title" class="card">
          <div class="icon-box">{{ item.icon }}</div>
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>

      <!-- Tools -->
      <div class="glass p-10 mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center">
          QA Tools & Technology
        </h2>

        <div class="flex flex-wrap justify-center gap-4">
          <span
            v-for="tool in tools"
            :key="tool"
            class="badge"
          >
            {{ tool }}
          </span>
        </div>
      </div>

      <!-- QA Flow -->
      <div>
        <h2 class="text-3xl font-bold mb-12 text-center">
          My QA Workflow
        </h2>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="step in flow" :key="step.title" class="card text-center">
            <div class="icon-box mx-auto">{{ step.icon }}</div>
            <h3 class="font-semibold mb-2">{{ step.title }}</h3>
            <p class="desc text-sm">{{ step.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const qaList = [
  { title: 'Test Case Design', desc: 'Functional, regression, boundary, and edge cases.', icon: '🧪' },
  { title: 'Bug Reporting', desc: 'JIRA-based reporting with severity & priority mapping.', icon: '🐞' },
  { title: 'API Testing', desc: 'REST API testing & automation using Postman.', icon: '🔌' },
  { title: 'Performance Testing', desc: 'Load, stress & endurance testing using JMeter.', icon: '🚀' },
  { title: 'Automation Testing', desc: 'Selenium automation with scripting.', icon: '🤖' },
  { title: 'System Analysis', desc: 'Business flow analysis, BRD, SDLC docs.', icon: '📊' }
]

const tools = [
  'Postman', 'JIRA', 'Selenium', 'Apache JMeter',
  'Swagger', 'Git', 'VS Code', 'SQL', 'Pega Platform'
]

const flow = [
  { title: 'Analyze', desc: 'Understand business flow & requirements', icon: '🔍' },
  { title: 'Design', desc: 'Create test cases & scenarios', icon: '📝' },
  { title: 'Execute', desc: 'Run manual & automation testing', icon: '⚙️' },
  { title: 'Report', desc: 'Bug reporting & test documentation', icon: '📋' }
]
</script>