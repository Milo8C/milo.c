import React from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => (
  <button
    id="theme-toggle"
    type="button"
    onClick={onToggle}
    aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    className="w-8 h-8 grid place-items-center rounded-full border border-line-strong text-fg2 hover:text-fg hover:border-[var(--fg)] transition-colors cursor-pointer"
  >
    {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
  </button>
)
