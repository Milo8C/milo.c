import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { methodologyData } from '../data/methodology'
import { SectionHeading } from '../components/common/SectionHeading'
import { useLanguage } from '../hooks/useLanguage'

const hashes = ['a3f9c1e', '7b20d4f', 'e91c03a', '4d8ab72', 'c05f6e9', '18e7b3d', 'f2a9d40']
const prefixes = ['init', 'design', 'feat', 'test', 'deploy', 'chore', 'perf']

export const MethodologySection: React.FC = () => {
  const { lang } = useLanguage()
  const data = methodologyData[lang]
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="metodologia" className="relative py-28 md:py-40 border-t border-line">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading index="06" label={data.sectionTitle} title={data.heading} subtitle={data.description} file="git log --graph" />

        <ol ref={ref} className="relative md:ml-[25%]">
          {/* graph rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--line-strong)]" />
          <motion.div style={{ scaleY }} className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--acc)] origin-top" />

          {data.steps.map((s, i) => {
            const last = i === data.steps.length - 1
            return (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="relative pl-12 pb-16 last:pb-0"
              >
                <span
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                    last ? 'bg-acc border-[var(--acc)]' : 'bg-[var(--bg)] border-[var(--acc)]'
                  }`}
                />
                <div className="font-mono text-[12px] flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-[var(--code-num)]">{hashes[i % hashes.length]}</span>
                  {last && (
                    <span className="text-acc">
                      (<span className="text-hot">HEAD</span> → main)
                    </span>
                  )}
                  <span className="text-fg3">
                    {prefixes[i % prefixes.length]}(step-{s.step}):
                  </span>
                </div>
                <h3 className="mt-3 text-3xl md:text-5xl tracking-[-0.035em] leading-none text-fg">{s.title}</h3>
                <p className="mt-3 font-serif italic text-xl text-fg2">{s.subtitle}</p>
                <div className="mt-5 grid md:grid-cols-2 gap-6 max-w-4xl">
                  <p className="text-fg2 leading-relaxed">{s.description}</p>
                  <div className="font-mono text-[12px] rounded-lg border border-line p-4 bg-surface">
                    <div className="text-fg3 mb-2">
                      {data.deliverablesLabel} {s.deliverables.length} files changed
                    </div>
                    {s.deliverables.map((d) => (
                      <div key={d} className="text-acc">
                        + <span className="text-fg2">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
