import React from 'react'
import { motion } from 'motion/react'
import { experienceData } from '../data/experience'
import { useLanguage } from '../hooks/useLanguage'

export const ExperienceSection: React.FC = () => {
  const { lang } = useLanguage()
  const data = experienceData[lang]

  return (
    <section id="experiencia" className="relative py-28 md:py-40 border-t border-line">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 grid grid-cols-12 gap-6">
        {/* Sticky oversized counter */}
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <span className="font-mono text-xs text-acc">[01]</span>
            <span className="sec-label ml-3">{data.sectionTitle}</span>
            <div className="mt-8 flex items-start leading-none">
              <span className="text-[9rem] md:text-[14rem] font-medium tracking-[-0.07em] text-fg">16</span>
              <span className="text-6xl md:text-8xl text-acc font-serif italic mt-4">+</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-fg3 -mt-2">
              {lang === 'es' ? 'años escribiendo software en producción' : 'years shipping production software'}
            </p>
            <div className="mt-10 flex gap-10 font-mono text-xs text-fg2">
              <div>
                <div className="text-3xl text-fg tracking-tight font-sans">30+</div>
                {lang === 'es' ? 'aplicaciones web' : 'web applications'}
              </div>
              <div>
                <div className="text-3xl text-fg tracking-tight font-sans">E2E</div>
                {lang === 'es' ? 'del frontend a la nube' : 'frontend to cloud'}
              </div>
            </div>
          </div>
        </div>

        {/* Bio + pillars */}
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.035em] leading-[1.02] text-fg">{data.heading}</h2>
          <p className="mt-8 font-serif text-2xl md:text-[2rem] leading-[1.3] text-fg2">{data.bio}</p>

          <div className="mt-20 border-t border-line">
            {data.pillars.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group grid grid-cols-12 gap-4 py-8 border-b border-line"
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-fg3 group-hover:text-acc transition-colors pt-1">
                  0{i + 1}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl md:text-2xl tracking-tight text-fg">{p.title}</h3>
                    {p.metric && <span className="font-mono text-[11px] text-acc">{p.metric}</span>}
                  </div>
                  <p className="mt-3 text-fg2 leading-relaxed max-w-2xl">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-fg3">
                    {p.tags.map((t) => (
                      <span key={t}>--{t.toLowerCase().replace(/\s+/g, '-')}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
