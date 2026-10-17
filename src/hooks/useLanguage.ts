import { useContext } from 'react'
import { LanguageContext } from '../context/languageContextDef'
import type { LanguageContextType } from '../context/languageContextDef'

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
