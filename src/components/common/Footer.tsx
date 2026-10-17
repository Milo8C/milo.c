import React from 'react'
import { ArrowUp } from 'lucide-react'
import { navData } from '../../data/navigation'
import { useLanguage } from '../../hooks/useLanguage'

const year = new Date().getFullYear()

export const Footer: React.FC = () => {
  const { lang } = useLanguage()
  const nav = navData[lang]

  return (
    <footer className="relative">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-14 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <div className="font-mono text-sm text-fg">
            <span className="text-acc">&lt;</span>miloc<span className="text-fg3">.dev</span>
            <span className="text-acc">/&gt;</span>
          </div>
          <p className="mt-4 font-serif italic text-2xl text-fg2 max-w-md">{nav.footerTagline}</p>
          <p className="mt-3 text-sm text-fg3 max-w-md leading-relaxed">{nav.footerDescription}</p>
        </div>
        <nav className="col-span-6 md:col-span-3" aria-label="Footer">
          <div className="sec-label mb-4">{nav.quickLinksTitle}</div>
          <ul className="space-y-2 text-sm">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-fg2 hover:text-acc transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-6 md:col-span-3 flex flex-col">
          <div className="sec-label mb-4">status</div>
          <p className="flex items-start gap-2 text-sm text-fg2">
            <span className="live-dot mt-1.5 shrink-0" /> {nav.availableStatus}
          </p>
          <button
            id="back-to-top"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-auto self-start inline-flex items-center gap-2 font-mono text-[11px] uppercase text-fg3 hover:text-acc cursor-pointer pt-6"
          >
            <ArrowUp className="w-3.5 h-3.5" /> top
          </button>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-14 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-fg3">
          <span>© {year} — {nav.copyrightSuffix}</span>
          <span>{nav.builtWith}</span>
        </div>
      </div>
    </footer>
  )
}
