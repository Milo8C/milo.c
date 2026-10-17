import React from 'react'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export const WhatsAppFloating: React.FC = () => {
  const { lang } = useLanguage()
  const label = lang === 'es' ? '¿Platicamos?' : "Let's chat"
  const url =
    lang === 'es'
      ? 'https://wa.me/522288265829?text=Hola,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20platicar%20sobre%20un%20proyecto%20de%20desarrollo%20de%20software.'
      : 'https://wa.me/522288265829?text=Hello,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20software%20development%20project.'

  return (
    <a
      id="whatsapp-floating"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === 'es' ? 'Abrir WhatsApp' : 'Open WhatsApp'}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 hover:gap-2 bg-acc rounded-full p-3.5 hover:pr-5 shadow-[0_10px_40px_-10px_var(--acc)] transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap font-mono text-xs font-bold uppercase transition-all duration-300">
        {label}
      </span>
    </a>
  )
}
