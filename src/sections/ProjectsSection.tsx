import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { projectsData } from '../data/projects'
import { SectionHeading } from '../components/common/SectionHeading'
import type { ProjectItem } from '../types'
import { useLanguage } from '../hooks/useLanguage'

const projectPreviews: Record<string, { src: string; alt: string; url: string }> = {
  'hub-seguridad': {
    src: '/images/projects/edtech.svg',
    alt: 'Plataforma LMS & Streaming de Cursos con Stripe',
    url: 'https://learn-platform.dev/courses',
  },
  'b2b-platform': {
    src: '/images/projects/b2b.svg',
    alt: 'Ecosistema B2B, Cotizaciones y Deals en Tiempo Real',
    url: 'https://nexus-b2b.internal/operations',
  },
  'offline-dossier': {
    src: '/images/projects/offline.svg',
    alt: 'Expediente PWA con Sincronización Offline Tolerante a Fallos',
    url: 'https://dossier-pro.app/field-inspection',
  },
  'institutional-management': {
    src: '/images/projects/institutional.svg',
    alt: 'Sistema Integral de Fiscalización y Trazabilidad RBAC',
    url: 'https://fiscalizacion.gob.internal/tramites',
  },
  'ai-profile-platform': {
    src: '/images/projects/ai.svg',
    alt: 'Orquestación de Modelos LLM y Embeddings Vectoriales',
    url: 'https://synapse-ai.platform/extract',
  },
  'pbp-negocios': {
    src: '/images/projects/pbp.svg',
    alt: 'Plataforma de Mentorías 1-a-1 y Suscripciones Stripe',
    url: 'https://mentoring-network.io/sessions',
  },
}

function useIsDesktop() {
  const [d, setD] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024)
  useEffect(() => {
    const on = () => setD(window.innerWidth >= 1024)
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  return d
}

const ProjectCard: React.FC<{ p: ProjectItem; i: number; total: number; labels: { hl: string; stack: string } }> = ({
  p,
  i,
  total,
  labels,
}) => {
  const preview = projectPreviews[p.id]

  return (
    <article className="shrink-0 w-full lg:w-[min(84vw,1140px)] grid grid-cols-1 lg:grid-cols-12 border border-line-strong rounded-2xl overflow-hidden bg-surface shadow-2xl">
      {/* visual */}
      <div className="lg:col-span-6 relative flex flex-col border-b lg:border-b-0 lg:border-r border-line bg-[#090d16]">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 h-9 border-b border-line bg-surface font-mono text-[10px] text-fg3 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-fg2 truncate max-w-[190px]">{preview?.url || `~/projects/${p.id}`}</span>
          </div>
          <span className="text-acc font-semibold">
            {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Real Interface Mockup Frame */}
        <div className="relative flex-1 p-3 sm:p-5 flex items-center justify-center bg-gradient-to-br from-black/60 via-transparent to-black/80">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] group">
            {preview && (
              <img
                src={preview.src}
                alt={preview.alt}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    {/* info */}
    <div className="lg:col-span-6 p-7 lg:p-10 flex flex-col justify-between">
      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-acc">{p.highlightBadge}</span>
      <h3 className="mt-4 text-2xl lg:text-[2.1rem] leading-[1.05] tracking-[-0.03em] text-fg">{p.title}</h3>
      {p.subtitle && <p className="mt-2 font-serif italic text-xl text-fg2">{p.subtitle}</p>}
      <p className="mt-5 text-fg2 leading-relaxed text-[15px]">{p.description}</p>
      <div className="mt-6">
        <div className="sec-label mb-3">{labels.hl}</div>
        <ul className="space-y-1.5 text-sm text-fg2">
          {p.keyFeatures.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="font-mono text-acc">+</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 pt-6 border-t border-line flex flex-wrap gap-2">
        {p.technologies.map((t) => (
          <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line-strong text-fg2">
            {t}
          </span>
        ))}
      </div>
      </div>
    </div>
  </article>
  )
}

export const ProjectsSection: React.FC = () => {
  const { lang } = useLanguage()
  const data = projectsData[lang]
  const featured = data.items.filter((p) => projectPreviews[p.id])
  const archive = data.items.filter((p) => !projectPreviews[p.id])
  const isDesktop = useIsDesktop()

  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 80))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [isDesktop, lang])

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  const x = useTransform(smooth, [0, 1], [0, -distance])
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const labels = { hl: data.highlightsLabel, stack: data.stackLabel }

  return (
    <section id="proyectos" className="relative border-t border-line">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-28 md:pt-40">
        <SectionHeading index="03" label={data.sectionTitle} title={data.heading} subtitle={data.description} file="projects/*.case" />
      </div>

      {isDesktop ? (
        <div ref={pinRef} style={{ height: `calc(100vh + ${distance}px)` }} className="relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <motion.div ref={trackRef} style={{ x }} className="flex gap-8 pl-10 pr-10 will-change-transform">
              {featured.map((p, i) => (
                <ProjectCard key={p.id} p={p} i={i} total={featured.length} labels={labels} />
              ))}
            </motion.div>
            <div className="max-w-[1440px] w-full mx-auto px-10 mt-8 flex items-center gap-4 font-mono text-[11px] text-fg3">
              <span>scroll →</span>
              <div className="relative flex-1 h-px bg-[var(--line-strong)]">
                <motion.div style={{ width: bar }} className="absolute inset-y-0 left-0 bg-[var(--acc)]" />
              </div>
              <span>{featured.length} cases</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-5 md:px-10 space-y-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} total={featured.length} labels={labels} />
          ))}
        </div>
      )}

      {/* Archive — ls -la style */}
      {archive.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-24">
          <div className="font-mono text-xs text-fg3 mb-6">
            <span className="text-acc">$</span> ls -la ./projects/archive
          </div>
          <div className="border-t border-line">
            {archive.map((p, i) => (
              <div
                key={p.id}
                className="group grid grid-cols-12 gap-4 py-5 border-b border-line items-baseline hover:bg-surface transition-colors px-2"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-fg3">drwx</span>
                <span className="col-span-10 md:col-span-5 text-lg tracking-tight text-fg group-hover:text-acc transition-colors">
                  {p.title}
                </span>
                <span className="hidden md:block col-span-4 text-sm text-fg2">{p.subtitle}</span>
                <span className="hidden md:block col-span-2 font-mono text-[11px] text-fg3 text-right">
                  {p.technologies.slice(0, 2).join(' · ')}
                </span>
                <span className="sr-only">{i}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
