import React from 'react'
import { motion } from 'motion/react'
import { qaData } from '../data/qa'
import { useLanguage } from '../hooks/useLanguage'

export const QaSection: React.FC = () => {
  const { lang } = useLanguage()
  const data = qaData[lang]

  const line = (d: number) => ({
    initial: { opacity: 0, x: -8 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.35, delay: d },
  })

  return (
    <section id="calidad" className="relative py-28 md:py-40 border-t border-line">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <span className="font-mono text-xs text-acc">[05]</span>
          <span className="sec-label ml-3">{data.sectionTitle}</span>
          <h2 className="mt-8 text-4xl md:text-6xl font-medium tracking-[-0.04em] leading-[0.98] text-fg">{data.heading}</h2>
          <p className="mt-8 text-fg2 text-lg leading-relaxed">{data.intro}</p>
          <p className="mt-4 text-fg3 leading-relaxed">{data.subtext}</p>
          <div className="mt-10 flex items-end gap-4 border-t border-line pt-6">
            <span className="text-7xl tracking-[-0.06em] text-fg">{data.statValue}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg3 pb-3 max-w-[16rem]">{data.statLabel}</span>
          </div>
        </div>

        {/* Terminal test runner */}
        <div className="col-span-12 lg:col-span-7">
          <div className="rounded-2xl border border-line-strong bg-[var(--bg)] overflow-hidden lg:sticky lg:top-28">
            <div className="flex items-center gap-2 px-4 h-10 border-b border-line bg-surface">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--hot)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--code-num)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--acc)]" />
              <span className="ml-3 font-mono text-[11px] text-fg3">zsh — quality-suite</span>
            </div>
            <div className="p-6 md:p-8 font-mono text-[12.5px] leading-[1.8]">
              <motion.div {...line(0)}>
                <span className="text-acc">➜</span> <span className="text-fg">~</span>{' '}
                <span className="text-fg2">npm run test:quality -- --all-platforms</span>
              </motion.div>
              <motion.div {...line(0.15)} className="text-fg3 mb-4">
                {lang === 'es' ? '> ejecutando suite de calidad…' : '> running quality suite…'}
              </motion.div>

              {data.capabilities.map((c, i) => (
                <motion.div key={c.title} {...line(0.25 + i * 0.12)} className="mb-4">
                  <div>
                    <span className="inline-block px-1.5 mr-2 bg-acc text-[10px] font-bold">PASS</span>
                    <span className="text-fg">{c.title}</span>
                  </div>
                  <div className="pl-12 text-fg3">{c.description}</div>
                  <div className="pl-12 text-[11px]">
                    {c.platforms.map((p) => (
                      <span key={p} className="mr-3 text-acc">
                        ✓ <span className="text-fg2">{p}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div {...line(0.3 + data.capabilities.length * 0.12)} className="mt-6 pt-4 border-t border-line">
                <div>
                  <span className="text-fg3">Suites:</span> <span className="text-acc">{data.capabilities.length} passed</span>
                  <span className="text-fg3">, {data.capabilities.length} total</span>
                </div>
                <div className="text-fg3">{data.badgeNotice}</div>
                <div className="mt-2">
                  <span className="text-acc">➜</span> <span className="text-fg">~</span> <span className="caret" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
