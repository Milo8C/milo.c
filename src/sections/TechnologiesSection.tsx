import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { techIntro } from '../data/technologies'
import { SectionHeading } from '../components/common/SectionHeading'
import { useLanguage } from '../hooks/useLanguage'

export const TechnologiesSection: React.FC = () => {
  const { lang } = useLanguage()
  const data = techIntro[lang]
  const [tab, setTab] = useState(0)
  const cat = data.categories[tab]
  const all = data.categories.flatMap((c) => c.items.map((t) => t.name))

  return (
    <section id="tecnologias" className="relative py-28 md:py-40 border-t border-line overflow-hidden">
      {/* Sleek Ticker Marquee Strip */}
      <div className="mb-14 -mx-5 md:-mx-10 border-y border-line py-3.5 bg-surface/40 backdrop-blur-sm select-none overflow-hidden" aria-hidden="true">
        <div className="marquee marquee-slow whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-fg3 items-center">
          {[...all, ...all].map((n, i) => (
            <span key={i} className="inline-flex items-center px-6">
              <span className="text-acc mr-4 text-[10px]">✦</span>
              <span className={i % 3 === 0 ? "text-fg font-semibold" : i % 3 === 1 ? "text-acc" : "text-fg2"}>
                {n}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading index="04" label={data.sectionTitle} title={data.heading} subtitle={data.description} file="stack.config.ts" />

        {/* Editor window */}
        <div className="rounded-2xl border border-line-strong overflow-hidden bg-surface">
          <div className="flex items-stretch border-b border-line overflow-x-auto" role="tablist">
            {data.categories.map((c, i) => (
              <button
                key={c.id}
                id={`tech-tab-${c.id}`}
                role="tab"
                aria-selected={tab === i}
                type="button"
                onClick={() => setTab(i)}
                className={`shrink-0 px-5 py-3.5 font-mono text-[12px] border-r border-line cursor-pointer transition-colors ${
                  tab === i ? 'bg-[var(--bg)] text-fg shadow-[inset_0_2px_0_var(--acc)]' : 'text-fg3 hover:text-fg'
                }`}
              >
                {c.id}.ts
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            <AnimatePresence mode="wait">
              <motion.pre
                key={`${lang}-${cat.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:col-span-8 p-6 md:p-8 font-mono text-[12.5px] md:text-[13.5px] leading-[1.9] overflow-x-auto bg-[var(--bg)]"
              >
                <code>
                  <Line n={1}><span className="text-[var(--code-com)]">{`// ${cat.description}`}</span></Line>
                  <Line n={2}>
                    <span className="text-hot">export const</span> <span className="text-fg">{cat.id}</span> = {'{'}
                  </Line>
                  {cat.items.map((t, j) => (
                    <Line key={t.name} n={j + 3}>
                      {'  '}
                      <span className="text-[var(--code-key)]">'{t.name}'</span>: {'{ '}
                      <span className="text-fg3">core:</span>{' '}
                      <span className={t.featured ? 'text-acc' : 'text-[var(--code-num)]'}>{String(!!t.featured)}</span>
                      {t.description && (
                        <>
                          , <span className="text-fg3">use:</span>{' '}
                          <span className="text-[var(--code-str)]">'{t.description}'</span>
                        </>
                      )}
                      {' },'}
                    </Line>
                  ))}
                  <Line n={cat.items.length + 3}>{'}'}<span className="caret" /></Line>
                </code>
              </motion.pre>
            </AnimatePresence>

            {/* Side panel */}
            <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-line p-6 md:p-8 flex flex-col">
              <div className="sec-label">{lang === 'es' ? 'categoría' : 'category'}</div>
              <h3 className="mt-2 text-3xl tracking-tight text-fg">{cat.title}</h3>
              <p className="mt-3 text-fg2 leading-relaxed">{cat.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {cat.items.map((t) => (
                  <span
                    key={t.name}
                    className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${
                      t.featured ? 'bg-acc border-transparent' : 'border-line-strong text-fg2'
                    }`}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-10 font-mono text-[11px] text-fg3 flex justify-between">
                <span>UTF-8 · TypeScript</span>
                <span>
                  {cat.items.filter((t) => t.featured).length} {data.coreBadge.toLowerCase()} / {cat.items.length}
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

const Line: React.FC<{ n: number; children: React.ReactNode }> = ({ n, children }) => (
  <div className="flex">
    <span className="w-8 shrink-0 text-right pr-4 text-fg3 select-none opacity-60">{n}</span>
    <span className="whitespace-pre">{children}</span>
  </div>
)
