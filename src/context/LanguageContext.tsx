import React, { useState, useEffect } from 'react'
import type { Language } from '../types'
import { LanguageContext } from './languageContextDef'


export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-lang') as Language | null
      if (saved === 'es' || saved === 'en') return saved
    }
    return 'es'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
  }

  const toggleLang = () => {
    setLangState((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
