import React, { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { contactData } from '../data/contact'
import { useLanguage } from '../hooks/useLanguage'
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons'

const LINKEDIN = 'https://www.linkedin.com/in/oscar-eduardo-conde-hernandez-209222161'
const GITHUB = 'https://github.com/Milo8C'

export const ContactSection: React.FC = () => {
  const { lang } = useLanguage()
  const data = contactData[lang]
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(data.email.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = data.email.mailto
    }
  }

  const words = data.heading.replace(/[¿?]/g, '').split(' ')

  return (
    <section id="contacto" className="relative pt-28 md:pt-40 border-t border-line overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-acc">[07]</span>
          <span className="sec-label">{data.sectionTitle}</span>
          <span className="ml-auto flex items-center gap-2 font-mono text-[11px] text-fg2">
            <span className="live-dot" /> {data.badge}
          </span>
        </div>

        <h2 className="mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.04em] leading-[1.05] text-fg max-w-5xl">
          {words.slice(0, -2).join(' ')}{' '}
          <span className="font-serif italic font-normal text-acc">{words.slice(-2).join(' ')}</span>
          <span className="text-fg3">?</span>
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-6 items-end">
          <p className="col-span-12 lg:col-span-5 text-lg text-fg2 leading-relaxed">{data.subtitle}</p>
          <div className="col-span-12 lg:col-span-7 lg:justify-self-end flex flex-wrap gap-3">
            <a id="contact-whatsapp" href={data.whatsapp.url} target="_blank" rel="noopener noreferrer" className="btn-acc !text-sm !px-7 !py-5">
              {data.whatsapp.actionText} <ArrowUpRight className="w-4 h-4" />
            </a>
            <a id="contact-email" href={data.email.mailto} className="btn-ghost !text-sm !px-7 !py-5">
              {data.email.actionText}
            </a>
          </div>
        </div>

        {/* channel table */}
        <div className="mt-20 border-t border-line-strong">
          <Row k="whatsapp" note={data.whatsapp.description}>
            <a href={data.whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-acc transition-colors">
              +52 228 826 5829
            </a>
            <span className="ml-3 font-mono text-[10px] text-acc uppercase">{data.priorityBadge}</span>
          </Row>
          <Row k="email" note={data.email.description}>
            <span>{data.email.address}</span>
            <button
              id="contact-copy-email"
              type="button"
              onClick={copy}
              className="ml-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-fg3 hover:text-acc cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-acc" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? data.copiedBtn : data.copyBtn}
            </button>
          </Row>
          <Row k="social" note={data.socials.subtitle}>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-acc transition-colors mr-6">
              <GithubIcon className="w-5 h-5" /> {data.socials.githubLabel}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-acc transition-colors">
              <LinkedinIcon className="w-5 h-5" /> {data.socials.linkedinLabel}
            </a>
          </Row>
        </div>
        <p className="mt-6 font-mono text-[11px] text-fg3">// {data.responseNotice}</p>
      </div>

      {/* closing marquee */}
      <div className="mt-28 border-y border-line py-6 select-none" aria-hidden="true">
        <div className="marquee whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-fg3">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ['React', 'Laravel', 'TypeScript', 'Django', 'PostgreSQL', 'Docker', 'AI', 'Next.js', 'Inertia', 'Node'].map((t, i) => (
              <span key={`${k}-${i}`} className="px-8">
                <span className="text-acc mr-8">✦</span>
                {t}
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  )
}

const Row: React.FC<{ k: string; note: string; children: React.ReactNode }> = ({ k, note, children }) => (
  <div className="grid grid-cols-12 gap-4 py-6 border-b border-line items-baseline">
    <span className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-wider text-fg3">{k}</span>
    <div className="col-span-12 md:col-span-6 text-xl md:text-2xl tracking-tight text-fg flex flex-wrap items-center">{children}</div>
    <span className="col-span-12 md:col-span-4 text-sm text-fg3">{note}</span>
  </div>
)
