import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export const ScrollToTop: React.FC = () => {
  const { lang } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar cuando el usuario haya bajado más de 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const label = lang === 'es' ? 'Volver arriba' : 'Scroll to top'

  return (
    <button
      id="scroll-to-top"
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className={`fixed bottom-20 right-6 z-40 p-3 rounded-full border border-border bg-card/85 backdrop-blur-md text-fg hover:text-acc hover:border-acc/50 hover:bg-card shadow-lg hover:shadow-acc/10 hover:-translate-y-1 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-4'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  )
}
