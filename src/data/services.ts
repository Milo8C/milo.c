import type { ServiceItem } from '../types'

export const servicesData = {
  es: {
    sectionTitle: "Servicios Profesionales",
    heading: "Soluciones tecnológicas adaptadas a cada necesidad.",
    subtitle:
      "Acompañamiento especializado en todas las fases del ciclo de vida digital, desde la concepción arquitectónica hasta la implementación y soporte continuo.",
    actionText: "Consultar sobre este servicio",
    inquiryUrlPrefix: "https://wa.me/522288265829?text=Hola,%20me%20interesa%20conversar%20sobre%20el%20servicio%20de%20",
    items: [
      {
        id: 'web-apps',
        title: 'Desarrollo de aplicaciones web',
        description:
          'Plataformas personalizadas, paneles administrativos, portales, dashboards y sistemas empresariales diseñados a la medida de los flujos de trabajo.',
        highlights: [
          'Paneles de administración y dashboards analíticos',
          'Control de accesos y permisos por roles (RBAC)',
          'Flujos de trabajo complejos y automatizados',
          'Diseño responsivo optimizado para alta productividad',
        ],
        iconName: 'LayoutGrid',
        badge: 'Plataformas & Dashboards',
      },
      {
        id: 'landing-sites',
        title: 'Desarrollo de sitios web y landing pages',
        description:
          'Páginas modernas, ultrarrápidas, responsive y optimizadas para ofrecer una experiencia de usuario memorable y altas tasas de conversión.',
        highlights: [
          'Tiempos de carga ultrarrápidos y Core Web Vitals',
          'Microinteracciones y animaciones fluidas',
          'Optimización SEO técnica semántica',
          'Diseño Mobile First adaptable a cualquier pantalla',
        ],
        iconName: 'Globe',
        badge: 'Alta Conversión & Velocidad',
      },
      {
        id: 'fullstack-arch',
        title: 'Arquitectura y desarrollo Full Stack',
        description:
          'Diseño integral de soluciones escalables, APIs RESTful seguras, integración de servicios y desarrollo integral de aplicaciones extremo a extremo.',
        highlights: [
          'Arquitecturas desacopladas y microservicios',
          'APIs REST seguras, documentadas y versionadas',
          'Integración fluida entre Frontend, Backend y Bases de Datos',
          'Enfoque de alta escalabilidad y fácil mantenimiento',
        ],
        iconName: 'Boxes',
        badge: 'End-to-End & APIs',
      },
      {
        id: 'ecommerce-memberships',
        title: 'E-commerce y plataformas de membresías',
        description:
          'Tiendas en línea, suscripciones, cobros recurrentes, pasarelas de pago, administración de catálogos y herramientas de gestión comercial.',
        highlights: [
          'Pasarelas de pago seguras (Stripe, PayPal, Openpay)',
          'Sistemas de membresías y suscripciones recurrentes',
          'Facturación electrónica e integraciones fiscales',
          'Gestión de inventarios y catálogos dinámicos',
        ],
        iconName: 'CreditCard',
        badge: 'Comercio Digital & Cobros',
      },
      {
        id: 'automation-ai',
        title: 'Automatización e inteligencia artificial',
        description:
          'Integración de APIs de Inteligencia Artificial, automatización de procesos operativos, generación de contenido estructurado y funcionalidades inteligentes.',
        highlights: [
          'Interconexión con modelos avanzados de IA',
          'Extracción, procesamiento y estructuración de datos',
          'Automatización de tareas repetitivas y notificaciones',
          'Generación inteligente de perfiles y reportes',
        ],
        iconName: 'Sparkles',
        badge: 'AI & Workflows',
      },
      {
        id: 'maintenance-modernization',
        title: 'Mantenimiento y modernización de sistemas',
        description:
          'Optimización, refactorización de código legado, actualización tecnológica, auditoría de seguridad y mejora continua de aplicaciones existentes.',
        highlights: [
          'Refactorización y migración a stacks modernos',
          'Auditoría y optimización de rendimiento de bases de datos',
          'Corrección de fallas críticas y cuellos de botella',
          'Planes de soporte técnico y evolución continua',
        ],
        iconName: 'Wrench',
        badge: 'Refactorización & Soporte',
      },
    ] as ServiceItem[],
  },
  en: {
    sectionTitle: "Professional Services",
    heading: "Tailored technology solutions for every challenge.",
    subtitle:
      "Expert engineering across all stages of the software lifecycle, from foundational architecture to full-scale deployment and continuous enhancement.",
    actionText: "Inquire about this service",
    inquiryUrlPrefix: "https://wa.me/522288265829?text=Hello,%20I%20am%20interested%20in%20learning%20more%20about%20",
    items: [
      {
        id: 'web-apps',
        title: 'Web Application Development',
        description:
          'Custom web platforms, administrative panels, internal portals, analytic dashboards, and enterprise systems tailored to operational workflows.',
        highlights: [
          'Custom admin panels and analytical dashboards',
          'Role-based access control (RBAC) and permissions',
          'Complex workflow automation and audit logs',
          'Responsive design engineered for high productivity',
        ],
        iconName: 'LayoutGrid',
        badge: 'Platforms & Dashboards',
      },
      {
        id: 'landing-sites',
        title: 'High-Impact Websites & Landing Pages',
        description:
          'Modern, ultra-fast, responsive web experiences optimized for memorable user journeys, Core Web Vitals, and exceptional conversion rates.',
        highlights: [
          'Sub-second load times and top Core Web Vitals',
          'Fluid micro-interactions and refined animations',
          'Technical semantic SEO for rapid search indexing',
          'Mobile-first responsive architecture',
        ],
        iconName: 'Globe',
        badge: 'Speed & Conversion',
      },
      {
        id: 'fullstack-arch',
        title: 'Full Stack Architecture & Engineering',
        description:
          'End-to-end design of scalable digital solutions, secure RESTful APIs, third-party service orchestrations, and full-stack software development.',
        highlights: [
          'Decoupled and microservices architecture',
          'Secure, documented, and versioned REST APIs',
          'Seamless coordination across UI, Backend & DB layers',
          'Built for maintainability, reliability, and growth',
        ],
        iconName: 'Boxes',
        badge: 'End-to-End & APIs',
      },
      {
        id: 'ecommerce-memberships',
        title: 'E-Commerce & Membership Platforms',
        description:
          'Digital stores, subscription platforms, recurring billing engines, checkout gateways, dynamic catalog management, and sales operations.',
        highlights: [
          'Secure checkout (Stripe, PayPal, Openpay)',
          'Membership tiers and automated recurring subscriptions',
          'Automated electronic invoicing integrations',
          'Inventory sync and catalog management tools',
        ],
        iconName: 'CreditCard',
        badge: 'Commerce & Payments',
      },
      {
        id: 'automation-ai',
        title: 'Process Automation & AI Integration',
        description:
          'Connecting frontier AI models and LLM APIs, building automated business workflows, structuring unstructured data, and smart assistant features.',
        highlights: [
          'Interfacing with frontier LLM and generative APIs',
          'Automated extraction, structuring, and data enrichment',
          'Event-driven tasks, background queues, and alerts',
          'Smart profile classification and intelligent insights',
        ],
        iconName: 'Sparkles',
        badge: 'AI & Workflows',
      },
      {
        id: 'maintenance-modernization',
        title: 'System Modernization & Maintenance',
        description:
          'Performance tuning, legacy codebase refactoring, stack migration, security auditing, and continuous health maintenance for existing applications.',
        highlights: [
          'Refactoring and modernization to modern stacks',
          'Database indexing and query execution speed tuning',
          'Bottleneck resolution and critical bug elimination',
          'Long-term technical advisory and ongoing support',
        ],
        iconName: 'Wrench',
        badge: 'Refactoring & Support',
      },
    ] as ServiceItem[],
  },
}
