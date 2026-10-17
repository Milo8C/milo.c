import React from 'react'
import { motion } from 'motion/react'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  subtitle?: string
  file?: string
}

/**
 * Editorial section header: mono index rail + oversized title.
 * Splits the last word of the title into serif italic for contrast.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({ index, label, title, subtitle, file }) => {
  const words = title.replace(/\.$/, '').split(' ')
  const last = words.pop()

  return (
    <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
      <div className="col-span-12 md:col-span-3 flex md:flex-col gap-3 md:gap-2 items-center md:items-start pt-2">
        <span className="font-mono text-xs text-acc">[{index}]</span>
        <span className="sec-label">{label}</span>
        {file && <span className="hidden md:inline font-mono text-[11px] text-fg3 mt-4">└─ {file}</span>}
      </div>
      <div className="col-span-12 md:col-span-9">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-[-0.04em] leading-[0.95] text-fg"
        >
          {words.join(' ')} <span className="font-serif italic font-normal text-acc">{last}</span>
        </motion.h2>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-fg2">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
