import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import { LanguageProvider } from './context/LanguageContext'
import { Navbar } from './components/common/Navbar'
import { Footer } from './components/common/Footer'
import { WhatsAppFloating } from './components/common/WhatsAppFloating'
import { ScrollToTop } from './components/common/ScrollToTop'
import { HeroSection } from './sections/HeroSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ServicesSection } from './sections/ServicesSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { TechnologiesSection } from './sections/TechnologiesSection'
import { QaSection } from './sections/QaSection'
import { MethodologySection } from './sections/MethodologySection'
import { ContactSection } from './sections/ContactSection'

function PortfolioContent() {
  const { theme, toggleTheme } = useTheme()
  const sectionIds = [
    'inicio',
    'experiencia',
    'servicios',
    'proyectos',
    'tecnologias',
    'metodologia',
    'contacto',
  ]
  const activeSection = useActiveSection(sectionIds, 160)

  return (
    <div className="grain min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
      {/* Top Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <TechnologiesSection />
        <QaSection />
        <MethodologySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp widget */}
      <WhatsAppFloating />

      {/* Scroll to Top floating action */}
      <ScrollToTop />
    </div>
  )
}

export function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  )
}

export default App
