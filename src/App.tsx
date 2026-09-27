import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CircleDot,
  Grid2x2,
  Workflow,
  Zap,
} from 'lucide-react'
import { useRef, useState, type MouseEvent } from 'react'

const navItems = ['WORK', 'SYSTEMS', 'SERVICES', 'ABOUT']

const projectData = [
  {
    id: '01',
    title: 'ORBITAL',
    category: 'AI PLATFORM',
    year: '2026',
    accent: 'from-slate-100/15 via-slate-500/20 to-transparent',
    shape: 'orbit',
  },
  {
    id: '02',
    title: 'FORGE',
    category: 'INDUSTRIAL PLATFORM',
    year: '2026',
    accent: 'from-neutral-50/15 via-zinc-400/20 to-transparent',
    shape: 'forge',
  },
  {
    id: '03',
    title: 'VECTOR',
    category: 'DIGITAL INFRASTRUCTURE',
    year: '2026',
    accent: 'from-sky-100/10 via-slate-500/20 to-transparent',
    shape: 'vector',
  },
  {
    id: '04',
    title: 'MONOLITH',
    category: 'PRODUCT EXPERIENCE',
    year: '2026',
    accent: 'from-stone-200/10 via-zinc-500/20 to-transparent',
    shape: 'monolith',
  },
]

const capabilityData = [
  {
    number: '01',
    title: 'WEB SYSTEMS',
    description: 'High-performance websites and digital platforms.',
    icon: Grid2x2,
  },
  {
    number: '02',
    title: 'AI INTERFACES',
    description: 'Modern AI-powered product experiences.',
    icon: BrainCircuit,
  },
  {
    number: '03',
    title: 'AUTOMATION',
    description: 'Connected workflows and intelligent systems.',
    icon: Workflow,
  },
  {
    number: '04',
    title: 'PRODUCT ENGINEERING',
    description: 'Digital products built around real user needs.',
    icon: Zap,
  },
]

const processSteps = [
  { number: '01', title: 'DISCOVER', text: 'Understand the problem.' },
  { number: '02', title: 'ARCHITECT', text: 'Design the system.' },
  { number: '03', title: 'ENGINEER', text: 'Build the experience.' },
  { number: '04', title: 'DEPLOY', text: 'Launch and refine.' },
]

const services = [
  { name: 'WEB DEVELOPMENT', description: 'Purpose-built product experiences at scale.' },
  { name: 'APP DEVELOPMENT', description: 'Native-feeling interfaces for every screen.' },
  { name: 'AI SYSTEMS', description: 'Human-centered interfaces for intelligent tools.' },
  { name: 'AUTOMATION', description: 'Digital workflows that remove operational friction.' },
  { name: 'UI/UX DESIGN', description: 'Design systems that feel engineered and clear.' },
  { name: 'API INTEGRATION', description: 'Connected infrastructure with reliable performance.' },
]

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const handleImageMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setPointer({ x: x * 18, y: y * 18 })
  }

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-stone-100">
      <div className="noise" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0b0d]/75 backdrop-blur-xl transition-all duration-300">
        <nav className="mx-auto flex max-w-[1460px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-white/20 bg-white/5 text-[10px] font-medium tracking-[0.26em] text-stone-200">
              N
            </div>
            <div className="text-[0.64rem] font-medium tracking-[0.4em] text-stone-200 md:text-[0.72rem]">
              NEXUS INDUSTRIAL
            </div>
          </div>

          <div className="hidden items-center gap-8 text-[0.64rem] tracking-[0.32em] text-stone-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/5 px-2.5 py-1.5 text-[0.54rem] font-medium tracking-[0.2em] text-emerald-300 md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SYSTEM ONLINE
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-[0.56rem] font-medium tracking-[0.28em] text-stone-100 transition hover:border-[#9aa4ac] hover:bg-white/10"
            >
              START A PROJECT
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative isolate min-h-[100vh] overflow-hidden border-b border-white/10">
          <div className="grid-surface absolute inset-0 opacity-70" />
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(130,140,148,0.14),transparent_60%)]" />

          <div className="relative mx-auto grid max-w-[1460px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="z-10"
            >
              <p className="tech-label mb-8 text-[0.65rem] text-stone-300">
                01 / DIGITAL ENGINEERING SYSTEMS
              </p>

              <h1 className="headline max-w-[700px] text-[3.2rem] leading-[0.88] text-stone-50 sm:text-[4.5rem] lg:text-[7rem]">
                WE BUILD
                <br />
                DIGITAL SYSTEMS
                <br />
                THAT MOVE
                <br />
                INDUSTRIES.
              </h1>

              <p className="mt-6 max-w-[580px] text-base leading-relaxed text-stone-300 sm:text-lg">
                Engineering digital experiences, intelligent interfaces, and high-performance web systems for ambitious companies.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-5 py-3.5 text-[0.62rem] font-medium tracking-[0.28em] text-stone-100 transition hover:border-[#b7b7b7] hover:bg-white/10"
                >
                  EXPLORE WORK
                  <ArrowDown className="h-4 w-4 rotate-[-45deg]" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-[#d7d3ce]/20 bg-[#d9d3cb] px-5 py-3.5 text-[0.62rem] font-medium tracking-[0.28em] text-[#0d0e10] transition hover:bg-[#f4f0ea]"
                >
                  START A PROJECT
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              ref={heroRef}
              style={{ y: heroY }}
              onMouseMove={handleImageMove}
              className="relative mx-auto flex h-[520px] w-full max-w-[620px] items-center justify-center sm:h-[620px]"
            >
              <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
              <motion.div
                animate={{ rotate: pointer.x * 1.8, x: pointer.x, y: pointer.y }}
                transition={{ type: 'spring', stiffness: 100, damping: 18 }}
                className="industrial-object"
              >
                <div className="hero-ring ring-one" />
                <div className="hero-ring ring-two" />
                <div className="hero-ring ring-three" />
                <div className="hero-core" />
                <div className="hero-capsule capsule-top" />
                <div className="hero-capsule capsule-side" />
                <div className="hero-capsule capsule-bottom" />
                <div className="hero-rail rail-a" />
                <div className="hero-rail rail-b" />
                <div className="hero-rail rail-c" />
              </motion.div>

              <div className="absolute left-0 top-12 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[0.52rem] tracking-[0.28em] text-stone-300 backdrop-blur-sm">
                SYSTEM / 001
              </div>
              <div className="absolute right-4 top-10 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[0.52rem] tracking-[0.28em] text-stone-300 backdrop-blur-sm">
                STATUS / ACTIVE
              </div>
              <div className="absolute bottom-10 left-8 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[0.52rem] tracking-[0.28em] text-stone-300 backdrop-blur-sm">
                LOCATION / GLOBAL
              </div>
              <div className="absolute bottom-8 right-10 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[0.52rem] tracking-[0.28em] text-stone-300 backdrop-blur-sm">
                BUILD / 2026
              </div>
            </motion.div>
          </div>

          <div className="relative mx-auto flex max-w-[1460px] items-center justify-between gap-4 border-t border-white/10 px-4 pb-8 pt-4 text-[0.58rem] tracking-[0.34em] text-stone-400 sm:px-6 lg:px-10">
            <span>SCROLL TO EXPLORE</span>
            <div className="flex items-center gap-3 text-stone-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <ArrowDown className="h-4 w-4" />
              </span>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-5">
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="marquee-inner">
                  {['DIGITAL ENGINEERING', 'WEB SYSTEMS', 'AI INTERFACES', 'PRODUCT DESIGN', 'AUTOMATION', 'DIGITAL EXPERIENCES'].map((item) => (
                    <span key={item} className="tech-label whitespace-nowrap text-[0.72rem] tracking-[0.36em] text-stone-400">
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1460px] px-4 py-24 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:items-start">
            <div className="text-[4rem] font-black tracking-[-0.08em] text-stone-50 lg:text-[6rem]">01</div>

            <div>
              <h2 className="max-w-[920px] text-[2.2rem] leading-[0.9] tracking-[-0.06em] text-stone-50 sm:text-[3.2rem] lg:text-[5rem]">
                WE DESIGN FOR THE
                <br />
                NEXT VERSION OF
                <br />
                INDUSTRY.
              </h2>

              <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                <p className="text-base leading-relaxed text-stone-300 sm:text-lg">
                  We combine technology, design, and engineering to create digital systems that shape how organizations operate, grow, and compete in a changing world.
                </p>

                <div className="space-y-4 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[0.58rem] tracking-[0.26em] text-stone-400">
                    <span>FOUNDED</span>
                    <span className="text-stone-200">2026</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[0.58rem] tracking-[0.26em] text-stone-400">
                    <span>DISCIPLINE</span>
                    <span className="text-stone-200">DIGITAL ENGINEERING</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[0.58rem] tracking-[0.26em] text-stone-400">
                    <span>FOCUS</span>
                    <span className="text-stone-200">WEB + AI + SYSTEMS</span>
                  </div>
                  <div className="flex items-center justify-between text-[0.58rem] tracking-[0.26em] text-stone-400">
                    <span>APPROACH</span>
                    <span className="text-stone-200">DESIGN × TECHNOLOGY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1460px] px-4 pb-24 sm:px-6 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h3 className="text-[2rem] tracking-[-0.06em] text-stone-50 sm:text-[3rem]">SELECTED SYSTEMS</h3>
            <div className="flex items-center gap-2 text-[0.62rem] tracking-[0.28em] text-stone-400">
              <span>VIEW ALL</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projectData.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden border border-white/10 bg-[#111417] ${i % 2 === 0 ? 'md:col-span-1' : 'md:col-span-1 md:translate-y-12'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                <div className="relative flex h-[430px] flex-col justify-between p-5 sm:p-7">
                  <div className="flex items-center justify-between text-[0.56rem] tracking-[0.28em] text-stone-400">
                    <span>0{project.id}</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="project-visual project-shape--sm">
                    <div className={`shape ${project.shape}`} />
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-2 text-[0.56rem] tracking-[0.34em] text-stone-400">{project.category}</p>
                      <h4 className="text-[2rem] tracking-[-0.06em] text-stone-50">{project.title}</h4>
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-stone-100 opacity-0 transition duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="systems" className="border-y border-white/10 py-24">
          <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-10">
            <h3 className="mb-10 text-[2.2rem] tracking-[-0.08em] text-stone-50 sm:text-[3rem] lg:text-[4.2rem]">
              ENGINEERED FOR COMPLEXITY.
            </h3>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {capabilityData.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
                    whileHover={{ y: -8 }}
                    className="group border border-white/10 bg-[#101316] p-5 transition hover:border-[#b8b2aa]/50"
                  >
                    <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                      <span className="text-[0.62rem] tracking-[0.28em] text-stone-400">{item.number}</span>
                      <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/5 text-stone-200">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h4 className="text-xl tracking-[-0.05em] text-stone-50">{item.title}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-stone-300">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1460px] px-4 py-24 sm:px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h3 className="text-[2.2rem] tracking-[-0.08em] text-stone-50 sm:text-[3rem] lg:text-[4.2rem]">
              FROM CONCEPT
              <br />
              TO SYSTEM.
            </h3>
            <div className="hidden items-center gap-2 text-[0.6rem] tracking-[0.3em] text-stone-400 md:flex">
              <CircleDot className="h-3.5 w-3.5 text-emerald-300" />
              SYSTEM FLOW
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative border border-white/10 bg-[#101316] p-5"
              >
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4 text-[0.56rem] tracking-[0.3em] text-stone-400">
                  <span>{step.number}</span>
                  <span className="h-2 w-2 rounded-full bg-[#d8d2c9]" />
                </div>
                <h4 className="text-xl tracking-[-0.04em] text-stone-50">{step.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-stone-300">{step.text}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden h-px w-14 bg-white/10 lg:absolute lg:-right-6 lg:top-20 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1012] py-24">
          <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[540px] overflow-hidden border border-white/10 bg-[#0f1417]">
                <div className="absolute inset-0 grid-surface opacity-40" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
                  className="machine-shell"
                >
                  <div className="machine-ring ring-a" />
                  <div className="machine-ring ring-b" />
                  <div className="machine-ring ring-c" />
                  <div className="machine-core" />
                  <div className="machine-node node-a" />
                  <div className="machine-node node-b" />
                  <div className="machine-node node-c" />
                </motion.div>

                <div className="absolute left-5 top-5 tech-label text-[0.52rem] tracking-[0.28em] text-stone-300">COORD / 24.14</div>
                <div className="absolute right-5 top-5 tech-label text-[0.52rem] tracking-[0.28em] text-stone-300">SYS / 03</div>
                <div className="absolute bottom-5 left-5 tech-label text-[0.52rem] tracking-[0.28em] text-stone-300">LAT / 41.3</div>
                <div className="absolute bottom-5 right-5 tech-label text-[0.52rem] tracking-[0.28em] text-stone-300">TEMP / 08°</div>
              </div>

              <div>
                <p className="tech-label mb-5 text-[0.62rem] tracking-[0.34em] text-stone-400">SYSTEM OVERVIEW</p>
                <h3 className="max-w-[620px] text-[2.1rem] tracking-[-0.08em] text-stone-50 sm:text-[3rem] lg:text-[4rem]">
                  INDUSTRIAL INTELLIGENCE, SHAPED FOR FLOW.
                </h3>
                <p className="mt-6 max-w-[520px] text-base leading-relaxed text-stone-300 sm:text-lg">
                  We build interfaces and systems that transform operational complexity into clear decisions, faster execution, and confident scale.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[0.54rem] tracking-[0.3em] text-stone-400">
                    <span>NODE STATUS</span>
                    <span className="text-emerald-300">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[0.54rem] tracking-[0.3em] text-stone-400">
                    <span>LATENCY</span>
                    <span className="text-stone-200">12MS</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[0.54rem] tracking-[0.3em] text-stone-400">
                    <span>CAPACITY</span>
                    <span className="text-stone-200">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-[1460px] px-4 py-24 sm:px-6 lg:px-10">
          <div className="mb-10 max-w-[900px]">
            <p className="tech-label mb-6 text-[0.64rem] tracking-[0.34em] text-stone-400">SERVICES</p>
            <h3 className="text-[2.2rem] tracking-[-0.08em] text-stone-50 sm:text-[3rem] lg:text-[4.2rem]">
              BUILT FOR COMPLEXITY, DESIGNED FOR MOMENTUM.
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group border border-white/10 bg-[#0f1316] p-5 transition hover:border-[#b7b2ad]/60"
              >
                <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4 text-[0.56rem] tracking-[0.3em] text-stone-400">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <ArrowUpRight className="h-4 w-4 text-stone-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h4 className="text-[1.7rem] tracking-[-0.05em] text-stone-50">{service.name}</h4>
                <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-stone-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-[#0e1114] py-24">
          <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="relative min-h-[500px] overflow-hidden border border-white/10 bg-[#101315]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(166,170,176,0.2),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%)]" />
                <div className="absolute inset-x-8 bottom-8 top-10 border border-white/10" />
                <div className="absolute left-10 top-12 h-40 w-40 rounded-full border border-white/10" />
                <div className="absolute right-12 top-20 h-52 w-52 rounded-full border border-white/10" />
                <div className="absolute bottom-12 left-1/2 h-36 w-36 -translate-x-1/2 rounded-[38%] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.22),rgba(120,130,139,0.05))] blur-[1px]" />
                <div className="absolute left-1/2 top-1/2 h-[2px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-white/10" />
                <div className="absolute left-1/2 top-1/2 h-[70%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white/10" />
              </div>

              <div>
                <p className="tech-label mb-6 text-[0.64rem] tracking-[0.34em] text-stone-400">STUDIO POSITION</p>
                <h3 className="text-[2.2rem] tracking-[-0.08em] text-stone-50 sm:text-[3rem] lg:text-[4.5rem]">
                  THE FUTURE IS
                  <br />
                  BUILT, NOT PREDICTED.
                </h3>
                <p className="mt-6 max-w-[620px] text-base leading-relaxed text-stone-300 sm:text-lg">
                  We create digital products that fuse design thinking, product strategy, and engineering precision. The result is systems that perform under pressure and stand out in the market.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="border border-white/10 bg-white/5 px-4 py-3 text-[0.56rem] tracking-[0.28em] text-stone-200">DESIGN</div>
                  <div className="border border-white/10 bg-white/5 px-4 py-3 text-[0.56rem] tracking-[0.28em] text-stone-200">ENGINEERING</div>
                  <div className="border border-white/10 bg-white/5 px-4 py-3 text-[0.56rem] tracking-[0.28em] text-stone-200">TECHNOLOGY</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1460px] px-4 py-24 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden border border-white/10 bg-[#101417] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div className="grid-surface absolute inset-0 opacity-40" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="tech-label mb-4 text-[0.62rem] tracking-[0.3em] text-stone-400">START THE CONVERSATION</p>
                <h3 className="text-[2.5rem] tracking-[-0.08em] text-stone-50 sm:text-[4rem] lg:text-[5rem]">
                  HAVE A COMPLEX
                  <br />
                  PROBLEM?
                </h3>
              </div>

              <div className="flex flex-col items-start gap-6 lg:items-end">
                <p className="text-[1.4rem] tracking-[-0.06em] text-stone-100">LET'S BUILD THE SYSTEM.</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/15 bg-[#d9d3cb] px-5 py-3.5 text-[0.6rem] font-medium tracking-[0.3em] text-[#0d0e10] transition hover:bg-[#f1efe9]"
                >
                  START A PROJECT
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-[1460px] flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-white/20 bg-white/5 text-[10px] font-medium tracking-[0.26em] text-stone-200">
                N
              </div>
              <div className="text-[0.64rem] font-medium tracking-[0.4em] text-stone-200">NEXUS INDUSTRIAL</div>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-[0.56rem] tracking-[0.3em] text-stone-400">
              <a href="#work" className="transition hover:text-white">WORK</a>
              <a href="#systems" className="transition hover:text-white">SYSTEMS</a>
              <a href="#services" className="transition hover:text-white">SERVICES</a>
              <a href="#about" className="transition hover:text-white">ABOUT</a>
              <a href="#contact" className="transition hover:text-white">CONTACT</a>
            </div>
          </div>

          <div className="space-y-4 text-[0.56rem] tracking-[0.28em] text-stone-400">
            <div className="flex flex-wrap gap-6">
              <span>STATUS / ONLINE</span>
              <span>BUILD / 2026</span>
              <span>VERSION / 01.0</span>
            </div>
            <div className="flex flex-wrap gap-5">
              <a href="#" className="transition hover:text-white">GITHUB</a>
              <a href="#" className="transition hover:text-white">LINKEDIN</a>
              <a href="#" className="transition hover:text-white">X</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1460px] flex-col gap-3 border-t border-white/10 px-4 pt-6 text-[0.52rem] tracking-[0.26em] text-stone-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <span>© 2026 NEXUS INDUSTRIAL</span>
          <span>ALL SYSTEMS OPERATIONAL.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
