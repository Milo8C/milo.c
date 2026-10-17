import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { servicesData } from '../data/services'
import { SectionHeading } from '../components/common/SectionHeading'
import { useLanguage } from '../hooks/useLanguage'

export const ServicesSection: React.FC = () => {
  const { lang } = useLanguage()
  const data = servicesData[lang]
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="servicios" className="relative py-28 md:py-40 border-t border-line">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionHeading index="02" label={data.sectionTitle} title={data.heading} subtitle={data.subtitle} file="services/index.ts" />

        <ul className="border-t border-line-strong">
          {data.items.map((s, i) => {
            const isOpen = open === i
            return (
              <li key={s.id} className="border-b border-line-strong">
                <button
                  id={`service-${s.id}`}
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full grid grid-cols-12 gap-4 items-center py-7 md:py-9 text-left cursor-pointer group"
                >
                  <span className={`col-span-2 md:col-span-1 font-mono text-xs transition-colors ${isOpen ? 'text-acc' : 'text-fg3'}`}>
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`col-span-9 md:col-span-7 text-2xl sm:text-3xl md:text-5xl tracking-[-0.035em] leading-none transition-all duration-500 ${
                      isOpen ? 'text-fg md:translate-x-4' : 'text-fg2 group-hover:text-fg'
                    }`}
                  >
                    {s.title}
                  </span>
                  <span className="hidden md:block col-span-3 font-mono text-[11px] uppercase tracking-wider text-fg3 text-right">
                    {s.badge}
                  </span>
                  <span className="col-span-1 flex justify-end">
                    <span
                      className={`w-9 h-9 grid place-items-center rounded-full border transition-all duration-300 ${
                        isOpen ? 'bg-acc border-transparent rotate-45' : 'border-line-strong text-fg2'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-4 pb-10">
                        <p className="col-span-12 md:col-start-2 md:col-span-5 text-fg2 text-lg leading-relaxed md:pl-4">
                          {s.description}
                        </p>
                        <ul className="col-span-12 md:col-span-4 md:col-start-8 space-y-2 font-mono text-[12px] text-fg2">
                          {s.highlights.map((h) => (
                            <li key={h} className="flex gap-3">
                              <span className="text-acc">→</span>
                              {h}
                            </li>
                          ))}
                          <li className="pt-4">
                            <a
                              href={`${data.inquiryUrlPrefix}${encodeURIComponent(s.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-acc hover:underline underline-offset-4"
                            >
                              {data.actionText} <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
