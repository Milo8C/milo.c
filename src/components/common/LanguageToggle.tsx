import React from 'react'
import { useLanguage } from '../../hooks/useLanguage'

export const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage()
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center font-mono text-[11px] border border-line-strong rounded-full p-0.5"
    >
      {(['es', 'en'] as const).map((l) => (
        <button
          key={l}
          id={`lang-${l}`}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 rounded-full uppercase cursor-pointer transition-colors ${
            lang === l ? 'bg-acc' : 'text-fg2 hover:text-fg'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
