import type { ExperiencePillar } from '../types'

export const experienceData = {
  es: {
    sectionTitle: "Sobre mi experiencia",
    heading: "Experiencia que se convierte en soluciones.",
    bio: "Soy un profesional especializado en desarrollo Full Stack y arquitectura de software, con experiencia en la creación de aplicaciones web, plataformas empresariales y sistemas institucionales. A lo largo de mi trayectoria he participado en proyectos de distinta complejidad, desde soluciones comerciales hasta sistemas críticos de gestión, integrando tecnologías modernas, automatización e inteligencia artificial.",
    pillars: [
      {
        title: "Arquitectura de Software",
        description:
          "Diseño y estructuración de sistemas robustos, modulares y desacoplados. Definición de patrones escalables, control de accesos basado en roles (RBAC) y cumplimiento normativo riguroso.",
        iconName: "Cpu",
        metric: "Alta concurrencia",
        tags: ["Modular", "Microservicios", "Clean Architecture", "RBAC"],
      },
      {
        title: "Desarrollo Frontend & Backend",
        description:
          "Construcción integral de soluciones completas con PHP/Laravel, React, Inertia.js, TypeScript y Django (Python), garantizando coherencia de datos y rendimiento óptimo.",
        iconName: "Layers",
        metric: "Full Lifecycle",
        tags: ["Laravel", "React", "TypeScript", "Django", "Inertia.js"],
      },
      {
        title: "Integraciones de Sistemas y APIs",
        description:
          "Conexión de pasarelas de pago internacionales y nacionales (Stripe, PayPal, Openpay), facturación electrónica, webhooks y servicios de Inteligencia Artificial para automatización de flujos.",
        iconName: "Network",
        metric: "Pagos & IA",
        tags: ["Stripe", "Openpay", "APIs RESTful", "AI APIs", "Webhooks"],
      },
      {
        title: "Bases de Datos y Optimización",
        description:
          "Modelado eficiente de datos relacionales en PostgreSQL y MySQL, indexación estratégica y afinación de consultas, logrando reducciones de tiempos de respuesta en más de un 45%.",
        iconName: "Database",
        metric: "-45% latencia",
        tags: ["PostgreSQL", "MySQL", "Supabase", "Query Optimization"],
      },
      {
        title: "Infraestructura y Despliegues",
        description:
          "Configuración y administración de servidores Linux VPS con Nginx/Apache, arquitecturas serverless, optimización de Core Web Vitals y despliegues continuos en Vercel y Cloudflare.",
        iconName: "Server",
        metric: "99.9% Uptime",
        tags: ["Linux VPS", "Nginx", "Vercel", "Cloudflare", "AWS"],
      },
      {
        title: "Testing y Aseguramiento de Calidad",
        description:
          "Criterio riguroso de QA para validación funcional, pruebas de regresión, detección de cuellos de botella y pruebas multiplataforma en entornos Web, Mobile y Smart TV.",
        iconName: "ShieldCheck",
        metric: "Zero-Bugs",
        tags: ["QA Funcional", "Multi-device", "PHPUnit", "Postman", "Jest"],
      },
    ] as ExperiencePillar[],
  },
  en: {
    sectionTitle: "About My Experience",
    heading: "Experience that translates into solutions.",
    bio: "I am a seasoned professional specialized in Full Stack development and software architecture, with extensive experience engineering web applications, enterprise platforms, and institutional systems. Throughout my career, I have contributed to diverse projects ranging from commercial products to mission-critical management platforms, integrating modern stacks, process automation, and artificial intelligence.",
    pillars: [
      {
        title: "Software Architecture",
        description:
          "Designing resilient, modular, and decoupled systems. Defining scalable architectural patterns, role-based access control (RBAC), and strict regulatory compliance.",
        iconName: "Cpu",
        metric: "High Concurrency",
        tags: ["Modular", "Microservices", "Clean Architecture", "RBAC"],
      },
      {
        title: "Frontend & Backend Development",
        description:
          "End-to-end implementation with PHP/Laravel, React, Inertia.js, TypeScript, and Django (Python), guaranteeing data integrity, maintainability, and optimal execution speed.",
        iconName: "Layers",
        metric: "Full Lifecycle",
        tags: ["Laravel", "React", "TypeScript", "Django", "Inertia.js"],
      },
      {
        title: "Systems & API Integrations",
        description:
          "Seamless integration of global and regional payment gateways (Stripe, PayPal, Openpay), electronic invoicing, webhooks, and AI APIs for operational workflow automation.",
        iconName: "Network",
        metric: "Payments & AI",
        tags: ["Stripe", "Openpay", "RESTful APIs", "AI APIs", "Webhooks"],
      },
      {
        title: "Databases & Performance Optimization",
        description:
          "Efficient relational data modeling across PostgreSQL and MySQL, strategic indexing, and query tuning that slashed query response times by over 45%.",
        iconName: "Database",
        metric: "-45% Latency",
        tags: ["PostgreSQL", "MySQL", "Supabase", "Query Optimization"],
      },
      {
        title: "Cloud Infrastructure & Deployments",
        description:
          "Setup and administration of Linux VPS servers with Nginx/Apache, serverless architectures, Core Web Vitals optimization, and continuous delivery pipelines via Vercel and Cloudflare.",
        iconName: "Server",
        metric: "99.9% Uptime",
        tags: ["Linux VPS", "Nginx", "Vercel", "Cloudflare", "AWS"],
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "Rigorous QA standards for functional validation, regression testing, bottleneck discovery, and cross-platform verification across Web, Mobile, and Smart TV ecosystems.",
        iconName: "ShieldCheck",
        metric: "Zero-Bugs",
        tags: ["Functional QA", "Multi-device", "PHPUnit", "Postman", "Jest"],
      },
    ] as ExperiencePillar[],
  },
}
