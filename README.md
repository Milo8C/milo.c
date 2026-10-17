# Portfolio Profesional — Full Stack Developer & Software Architect

Plataforma profesional, moderna y de alto rendimiento que funciona como portafolio de servicios y arquitectura de software para soluciones web, sistemas empresariales y plataformas de misión crítica.

---

## 🚀 Tecnologías Principales

- **Frontend & Core:** React 19, TypeScript
- **Entorno & Bundler:** Vite 8
- **Estilos & Diseño:** Tailwind CSS v4, Vanilla CSS
- **Iconografía:** Lucide React
- **Ilustraciones:** SVG y composiciones vectoriales 3D / Isométricas integradas nativamente
- **Tipografía:** Plus Jakarta Sans (Google Fonts)
- **Despliegue:** Optimizado para Vercel (Plan gratuito)

---

## 🏛️ Arquitectura del Proyecto

El código está estructurado de manera modular y escalable para facilitar la edición de datos sin alterar la lógica de los componentes:

```
src/
├── assets/                     # Recursos gráficos y multimedia
├── components/
│   ├── common/
│   │   ├── BrandIcons.tsx       # Íconos vectoriales de GitHub y LinkedIn
│   │   ├── Footer.tsx           # Pie de página con copyright dinámico
│   │   ├── Navbar.tsx           # Barra de navegación sticky con menú móvil
│   │   ├── SectionHeading.tsx   # Encabezados con badges y gradientes
│   │   ├── ThemeToggle.tsx      # Selector de tema oscuro / claro
│   │   └── WhatsAppFloating.tsx # Botón flotante accesible de WhatsApp
│   └── illustrations/           # Ilustraciones conceptuales originales en SVG
│       ├── AiNeuralSvg.tsx
│       ├── B2BPlatformSvg.tsx
│       ├── EcommerceSvg.tsx
│       ├── EdTechSvg.tsx
│       ├── HeroArchitectureSvg.tsx
│       ├── InstitutionalSvg.tsx
│       └── OfflineSyncSvg.tsx
├── data/                       # Archivos independientes de datos locales
│   ├── contact.ts               # Canales de contacto y redes
│   ├── experience.ts            # Pilares de experiencia técnica
│   ├── hero.ts                  # Textos y métricas verificadas del Hero
│   ├── methodology.ts           # 4 etapas de metodología
│   ├── navigation.ts            # Enlaces de menú e identidad
│   ├── projects.ts              # 10 proyectos con categorías y stack
│   ├── qa.ts                    # Experiencia en QA y testing de plataformas
│   ├── services.ts              # 6 servicios profesionales
│   └── technologies.ts          # Tecnologías categorizadas
├── hooks/
│   ├── useActiveSection.ts      # Scroll spy para navegación activa
│   └── useTheme.ts              # Persistencia y alternancia Dark/Light
├── types/
│   └── index.ts                 # Interfaces de TypeScript
├── App.tsx                      # Ensamblado principal de la aplicación
├── index.css                    # Tokens, temas y variables CSS
└── main.tsx                     # Punto de entrada de React
```

---

## 📋 Secciones de la Landing Page

1. **Hero Principal:**
   - Propuesta de valor: *"Transformo ideas complejas en soluciones digitales."*
   - Indicadores de experiencia verificados (+16 años, +30 aplicaciones web, Full Stack & Arquitectura).
   - Diagrama 3D interactivo de arquitectura de software y nodos en la nube.
   - Acceso directo a WhatsApp y scroll suave a proyectos.

2. **Sobre mi experiencia:**
   - 6 pilares técnicos: Arquitectura, Full Stack, Integraciones/APIs, Bases de Datos (-45% latencia), Infraestructura Linux VPS/Cloud y Testing.

3. **Servicios:**
   - Aplicaciones Web, Sitios de alta velocidad, Arquitectura Full Stack, E-commerce/Membresías, Automatización/IA y Modernización de sistemas.

4. **Proyectos Destacados (Bento Grid):**
   - Presentación de 10 proyectos reales en formato descriptivo confidencial (sin divulgación de dependencias institucionales específicas ni enlaces externos):
     - Plataforma EdTech de formación y cursos online (Stripe y streaming)
     - Plataforma empresarial B2B (Multi-tenant, landing generator, inventarios)
     - Expediente digital offline (Sincronización tolerante a desconexión)
     - Sistemas institucionales de gestión y seguimiento
     - Plataforma con integración de inteligencia artificial
     - Plataforma de mentoring y membresías ejecutivas
     - SBS Informa (Publicación editorial de alto tráfico)
     - Plataforma de interoperabilidad institucional
     - Sistema de gestión documental y expedientes
     - Portales web institucionales
   - Botón interactivo para expandir o contraer proyectos en la misma pantalla.

5. **Tecnologías y herramientas:**
   - Filtro interactivo por categorías (Frontend, Backend, Bases de Datos, CMS/E-commerce, Infraestructura, Integraciones, Móvil, QA/Herramientas).

6. **Experiencia en calidad de software (QA):**
   - Validación en Web, Móvil, Smart TV (Samsung Tizen, LG webOS, Roku, Android TV, Fire TV), pasarelas de pago y pruebas de regresión.

7. **Metodología de trabajo:**
   - Proceso en 4 fases: Análisis, Diseño y Arquitectura, Desarrollo e Integración, Pruebas y Despliegue.

8. **Contacto:**
   - Botón directo para WhatsApp con mensaje precargado.
   - Botón de correo con opción de copiar dirección al portapapeles.
   - Enlaces a LinkedIn y GitHub con apertura segura en nueva pestaña (`rel="noopener noreferrer"`).

9. **Footer:**
   - Enlaces rápidos, año dinámico de copyright y disponibilidad para consultoría remota.

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js (v18 o superior)
- npm o pnpm

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/Milo8C/milo.c.git
cd milo.c
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

4. Validar linter y tipos:
```bash
npm run lint
```

5. Compilar bundle de producción:
```bash
npm run build
```

---

## ☁️ Despliegue en Vercel (Plan Gratuito)

El proyecto incluye el archivo `vercel.json` con la configuración predeterminada para proyectos con Vite.

### Opción 1: Mediante la interfaz web de Vercel
1. Ingresa a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New..."** > **"Project"**.
3. Selecciona el repositorio `milo.c`.
4. Vercel detectará automáticamente **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Haz clic en **Deploy**. El sitio quedará publicado con certificado SSL gratuito y CDN global.

### Opción 2: Mediante Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🔒 Confidencialidad y Cumplimiento de Pautas

- **Sin nombres personales visibles:** No se expone el nombre completo en ningún texto visible ni metadato indexable.
- **Sin enlaces a proyectos reales:** Presentación estrictamente conceptual y descriptiva.
- **Sin mención de dependencias públicas específicas:** Se utilizan términos genéricos como "instituciones" y "organizaciones".
- **Sin dependencias de pago:** Utiliza almacenamiento de datos local y dependencias de código abierto.
- **Sin backend complejo:** Totalmente estático, rápido y ligero para Vercel.
