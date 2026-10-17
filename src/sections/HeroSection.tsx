import React, { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
  type MotionValue,
} from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { heroData, heroLayers } from '../data/hero'
import { useLanguage } from '../hooks/useLanguage'

/* ------------------------------------------------------------------ */
/*  Plane contents — each layer of the stack is a tiny real-looking UI */
/* ------------------------------------------------------------------ */

const UiPlane = () => (
  <div className="h-full w-full rounded-xl overflow-hidden flex flex-col bg-surface-2/95 shadow-inner">
    <div className="flex items-center gap-1.5 px-3 h-7 bg-surface-1/90 border-b border-line shrink-0">
      <span className="w-2 h-2 rounded-full bg-[var(--hot)]" />
      <span className="w-2 h-2 rounded-full bg-[var(--code-num)]" />
      <span className="w-2 h-2 rounded-full bg-[var(--acc)]" />
      <div className="ml-2 px-2 py-0.5 rounded text-[9px] font-mono text-fg3 bg-bg/60 border border-line flex items-center gap-1">
        <span className="text-acc">https://</span>app.aerodata.hq/dashboard
      </div>
    </div>
    <div className="relative flex-1 w-full overflow-hidden bg-bg/40">
      <img
        src="/images/layer-ui.jpg"
        alt="Real UI Analytics Dashboard"
        className="w-full h-full object-cover object-top opacity-95 hover:scale-105 transition-transform duration-500"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-fg2 bg-card/85 backdrop-blur-sm px-2.5 py-1 rounded border border-line">
        <span className="text-acc font-semibold">● Production Live</span>
        <span>React 19 + TypeScript</span>
      </div>
    </div>
  </div>
)

const ApiPlane = () => (
  <div className="h-full w-full rounded-xl overflow-hidden flex flex-col bg-[#0b0f19] text-white">
    <div className="flex items-center justify-between px-3 h-7 bg-[#111827] border-b border-gray-800 shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="w-2 h-2 rounded-full bg-yellow-500" />
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-[9px] text-gray-400">Project Sentinel · OpenAPI 3.0</span>
      </div>
      <span className="font-mono text-[9px] text-emerald-400 font-medium">99.9% Uptime</span>
    </div>
    <div className="relative flex-1 w-full overflow-hidden">
      <img
        src="/images/layer-api.jpg"
        alt="Real RESTful API Microservices Dashboard"
        className="w-full h-full object-cover object-left-top opacity-90 hover:scale-105 transition-transform duration-500"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between font-mono text-[9px] bg-gray-900/90 backdrop-blur-sm px-2.5 py-1 rounded border border-gray-700">
        <span className="text-sky-400">POST /api/v1/payments</span>
        <span className="text-emerald-400">200 OK · 42ms</span>
      </div>
    </div>
  </div>
)

const DbPlane = () => (
  <div className="h-full w-full rounded-xl overflow-hidden flex flex-col bg-[#090d16] text-white">
    <div className="flex items-center justify-between px-3 h-7 bg-[#111625] border-b border-gray-800 shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="w-2 h-2 rounded-full bg-yellow-500" />
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-[9px] text-gray-400">PostgresFlux · Relational Schema & Sync</span>
      </div>
      <span className="font-mono text-[9px] text-emerald-400">● 1.4ms Latency</span>
    </div>
    <div className="relative flex-1 w-full overflow-hidden">
      <img
        src="/images/layer-db.jpg"
        alt="PostgreSQL Relational Schema & Offline Buffer"
        className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-500"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between font-mono text-[9px] bg-gray-900/90 backdrop-blur-sm px-2.5 py-1 rounded border border-gray-700">
        <span className="text-amber-300">Offline Queue: Synced</span>
        <span className="text-emerald-400">PostgreSQL + Redis</span>
      </div>
    </div>
  </div>
)

const InfraPlane = () => (
  <div className="h-full w-full rounded-xl overflow-hidden flex flex-col bg-[#0a0f1d] text-white p-3 font-mono">
    <div className="flex items-center justify-between pb-2 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] text-gray-300 font-semibold tracking-wider">KUBERNETES & CLOUD CLUSTER</span>
      </div>
      <span className="text-[9px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded">CI/CD PASSING</span>
    </div>
    <div className="flex-1 mt-2.5 grid grid-cols-3 gap-2 text-[10px]">
      {[
        { name: 'ingress-nginx', load: '12% cpu', status: 'healthy', color: 'text-emerald-400' },
        { name: 'api-service', load: '38% cpu', status: '2 pods', color: 'text-emerald-400' },
        { name: 'worker-queue', load: '400 msgs', status: 'active', color: 'text-sky-400' },
        { name: 'db-replica', load: '0 lag', status: 'synced', color: 'text-emerald-400' },
        { name: 'redis-cache', load: '98% hit', status: 'hot', color: 'text-amber-400' },
        { name: 'ai-pipeline', load: 'gpu-t4', status: 'ready', color: 'text-purple-400' },
      ].map((item) => (
        <div key={item.name} className="p-2 rounded bg-gray-900/80 border border-gray-800/90 flex flex-col justify-between">
          <span className="text-[9px] text-gray-400 truncate">{item.name}</span>
          <div className="flex items-center justify-between mt-1 text-[9px]">
            <span className={item.color}>{item.status}</span>
            <span className="text-gray-500">{item.load}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-2 pt-2 border-t border-gray-800/80 flex items-center justify-between text-[9px] text-gray-400">
      <span>Auto-scaling: <strong className="text-emerald-400 font-normal">Enabled</strong></span>
      <span>Global Edge: <strong className="text-sky-400 font-normal">Cloudflare + Vercel</strong></span>
    </div>
  </div>
)

const planes = [UiPlane, ApiPlane, DbPlane, InfraPlane]

/* ------------------------------------------------------------------ */

interface PlaneProps {
  idx: number
  active: number
  gap: MotionValue<number>
  tag: string
  children: React.ReactNode
}

const Plane: React.FC<PlaneProps> = ({ idx, active, gap, tag, children }) => {
  // top layer (UI) sits highest on Z axis
  const z = useTransform(gap, (g) => (3 - idx) * g)
  const isActive = active === idx
  return (
    <motion.div
      style={{ z, transformStyle: 'preserve-3d' }}
      animate={{ x: isActive ? 34 : 0, opacity: active === -1 || isActive ? 1 : 0.55 }}
      transition={{ type: 'spring', stiffness: 160, damping: 22 }}
      className={`absolute inset-0 rounded-xl border backdrop-blur-sm ${
        isActive
          ? 'border-[var(--acc)] shadow-[0_0_0_1px_var(--acc),0_30px_80px_-30px_var(--acc)]'
          : 'border-line-strong'
      } bg-[color-mix(in_srgb,var(--bg-2)_88%,transparent)]`}
    >
      {children}
      <span
        className={`absolute -top-6 left-0 font-mono text-[10px] tracking-wider transition-opacity duration-300 ${
          isActive ? 'text-acc' : 'text-fg3'
        } ${active === -1 ? 'opacity-0' : 'opacity-100'}`}
      >
        {String(idx + 1).padStart(2, '0')} — {tag}
      </span>
    </motion.div>
  )
}

export const HeroSection: React.FC = () => {
  const { lang } = useLanguage()
  const data = heroData[lang]
  const layers = heroLayers[lang]
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(-1)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  // 3D choreography
  const rotateX = useTransform(p, [0, 0.2, 1], [0, 58, 62])
  const rotateZ = useTransform(p, [0, 0.2, 1], [0, -32, -40])
  const gap = useTransform(p, [0, 0.2, 0.9], [6, 70, 84])
  const stackScale = useTransform(p, [0, 0.2, 1], [0.92, 1, 0.95])
  const stackY = useTransform(p, [0, 0.2], [0, 40])
  const introOpacity = useTransform(p, [0, 0.12], [1, 0])
  const introY = useTransform(p, [0, 0.14], [0, -60])
  const progressW = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.16 ? -1 : Math.min(3, Math.floor((v - 0.16) / 0.21))
    setActive((prev) => (prev === next ? prev : next))
  })

  return (
    <section id="inicio" ref={ref} className="relative h-[420vh]" aria-label="Hero">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 grid-lines opacity-50 [mask-image:radial-gradient(ellipse_at_70%_50%,black_20%,transparent_70%)]" />
        <div className="absolute -right-40 top-1/4 w-[620px] h-[620px] rounded-full bg-[var(--acc)] opacity-[0.07] blur-[140px]" />

        <div className="relative h-full max-w-[1440px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-20 pb-16">
          {/* -------- LEFT: text that changes with scroll -------- */}
          <div className="lg:col-span-6 relative flex flex-col justify-center z-10">
            {/* Intro */}
            <motion.div style={{ opacity: introOpacity, y: introY }} className={active >= 0 ? 'pointer-events-none' : ''}>
              <div className="flex items-center gap-3 mb-8 font-mono text-[11px] text-fg2 uppercase tracking-wider">
                <span className="live-dot" />
                {data.badge}
              </div>
              <h1 className="text-[2.6rem] sm:text-6xl xl:text-[5.4rem] font-medium leading-[0.92] tracking-[-0.045em] text-fg">
                {data.headline.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="font-serif italic font-normal text-acc">
                  {data.headline.replace(/\.$/, '').split(' ').slice(-2).join(' ')}
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base md:text-lg text-fg2 leading-relaxed">{data.subtitle}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a id="hero-cta-primary" href={data.ctas.primary.url} target="_blank" rel="noopener noreferrer" className="btn-acc">
                  {data.ctas.primary.text} <ArrowUpRight className="w-4 h-4" />
                </a>
                <a id="hero-cta-secondary" href={data.ctas.secondary.href} className="btn-ghost">
                  {data.ctas.secondary.text}
                </a>
              </div>
              <dl className="mt-12 hidden sm:grid grid-cols-3 max-w-xl border-t border-line">
                {data.stats.map((s) => (
                  <div key={s.label} className="pt-5 pr-4">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-fg3">{s.label}</dt>
                    <dd className="mt-1 text-2xl md:text-3xl tracking-tight text-fg">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Layer narration */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
              <AnimatePresence mode="wait">
                {active >= 0 && (
                  <motion.div
                    key={`${lang}-${active}`}
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <div className="font-mono text-xs text-acc mb-6">
                      {layers.layerLabel} {String(active + 1).padStart(2, '0')}/04 — {layers.layers[active].tag}
                    </div>
                    <h2 className="text-5xl sm:text-6xl xl:text-7xl font-medium tracking-[-0.045em] leading-[0.95] text-fg">
                      {layers.layers[active].title.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="font-serif italic font-normal text-acc">
                        {layers.layers[active].title.split(' ').slice(-1)}
                      </span>
                    </h2>
                    <p className="mt-6 max-w-md text-lg text-fg2 leading-relaxed">{layers.layers[active].body}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* -------- RIGHT: exploding 3D stack -------- */}
          <div className="lg:col-span-6 relative hidden sm:flex items-center justify-center [perspective:1800px]">
            <motion.div
              style={{ rotateX, rotateZ, scale: stackScale, y: stackY, transformStyle: 'preserve-3d' }}
              className="relative w-[340px] h-[220px] md:w-[440px] md:h-[280px]"
            >
              {planes.map((C, i) => (
                <Plane key={i} idx={i} active={active} gap={gap} tag={layers.layers[i].tag}>
                  <C />
                </Plane>
              ))}
            </motion.div>
          </div>
        </div>

        {/* bottom rail */}
        <div className="absolute bottom-0 inset-x-0 border-t border-line">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-12 flex items-center justify-between font-mono text-[11px] text-fg3">
            <span className="flex items-center gap-2">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" /> {layers.scroll}
            </span>
            <span className="hidden sm:flex gap-4">
              {layers.layers.map((l, i) => (
                <span key={l.tag} className={active === i ? 'text-acc' : ''}>
                  {l.tag}
                </span>
              ))}
            </span>
          </div>
          <motion.div style={{ width: progressW }} className="absolute top-[-1px] left-0 h-px bg-[var(--acc)]" />
        </div>
      </div>
    </section>
  )
}
