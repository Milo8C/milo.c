import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navData } from '../../data/navigation'
import { useLanguage } from '../../hooks/useLanguage'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  activeSection: string
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, activeSection }) => {
  const { lang } = useLanguage()
  const nav = navData[lang]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'America/Mexico_City',
        }),
      )
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] border-b border-line' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-6">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            go('#inicio')
          }}
          className="font-mono text-sm text-fg flex items-center gap-2 group"
          aria-label="Inicio"
        >
          <span className="text-acc">&lt;</span>
          <span className="tracking-tight">miloc</span>
          <span className="text-fg3 group-hover:text-acc transition-colors">.dev</span>
          <span className="text-acc">/&gt;</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.links.slice(1).map((link, i) => {
            const active = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  go(link.href)
                }}
                className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  active ? 'text-fg' : 'text-fg3 hover:text-fg'
                }`}
              >
                <span className={active ? 'text-acc' : ''}>0{i + 1}</span>
                <span className="mx-1 opacity-40">/</span>
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden xl:flex items-center gap-2 font-mono text-[11px] text-fg3 mr-2">
            <span className="live-dot" /> MX {time}
          </span>
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden w-8 h-8 grid place-items-center rounded-full border border-line-strong text-fg cursor-pointer"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-[var(--bg)] px-5 pb-8 pt-4">
          {nav.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                go(link.href)
              }}
              className="flex items-baseline gap-4 py-3 border-b border-line text-2xl tracking-tight text-fg"
            >
              <span className="font-mono text-xs text-acc">0{i}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
