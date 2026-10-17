import type { MethodologyStep } from '../types'

export const methodologyData = {
  es: {
    sectionTitle: "Metodología de trabajo",
    heading: "De la idea a una solución funcional.",
    description:
      "Un proceso estructurado, transparente e iterativo que reduce la incertidumbre, mitiga riesgos técnicos y asegura entregas puntuales y de calidad superior.",
    deliverablesLabel: "Entregables:",
    steps: [
      {
        step: 1,
        title: "Análisis & Diagnóstico",
        subtitle: "Comprensión profunda de objetivos y alcance",
        description:
          "Evaluación detallada de las necesidades de negocio, requerimientos funcionales, perfiles de usuario y restricciones técnicas para trazar un plan claro de trabajo.",
        deliverables: [
          "Definición de requerimientos técnicos",
          "Alcance y especificación de funcionalidades",
          "Estimación de cronograma e hitos clave",
        ],
        iconName: "Search",
      },
      {
        step: 2,
        title: "Diseño & Arquitectura",
        subtitle: "Definición técnica y experiencia de usuario",
        description:
          "Selección del stack tecnológico óptimo, modelado de bases de datos, diseño de arquitectura de APIs y estructuración de la interfaz para máxima usabilidad.",
        deliverables: [
          "Diagramas de flujo y arquitectura del sistema",
          "Modelado de entidad-relación de datos",
          "Prototipos de interfaz y diseño responsive",
        ],
        iconName: "Compass",
      },
      {
        step: 3,
        title: "Desarrollo & Integración",
        subtitle: "Implementación de funcionalidades y conexión de servicios",
        description:
          "Escritura de código limpio, modular y tipado. Construcción de componentes reactivos, endpoints de backend, pasarelas de pago y servicios de automatización.",
        deliverables: [
          "Desarrollo ágil con entregas progresivas",
          "Integración de pasarelas, APIs y servicios externos",
          "Control de versiones riguroso con Git",
        ],
        iconName: "Code2",
      },
      {
        step: 4,
        title: "Pruebas & Despliegue",
        subtitle: "Validación, optimización y puesta en producción",
        description:
          "Pruebas de calidad exhaustivas en múltiples dispositivos, optimización de velocidad de carga, configuración de servidores de producción y acompañamiento técnico.",
        deliverables: [
          "Ciclo completo de QA funcional y de seguridad",
          "Optimización de Core Web Vitals y base de datos",
          "Despliegue en producción y monitoreo inicial",
        ],
        iconName: "Rocket",
      },
    ] as MethodologyStep[],
  },
  en: {
    sectionTitle: "Engineering Methodology",
    heading: "From concept to scalable production software.",
    description:
      "A structured, transparent, and iterative delivery process engineered to eliminate ambiguity, mitigate technical risks, and deliver resilient software on schedule.",
    deliverablesLabel: "Key Deliverables:",
    steps: [
      {
        step: 1,
        title: "Discovery & Analysis",
        subtitle: "Comprehensive requirements and technical scoping",
        description:
          "Deep-dive analysis into business goals, functional requirements, user personas, and technical constraints to establish a clear architectural roadmap.",
        deliverables: [
          "Technical requirements specification",
          "Scope definition and feature breakdown",
          "Milestone estimations and sprint schedule",
        ],
        iconName: "Search",
      },
      {
        step: 2,
        title: "Design & Architecture",
        subtitle: "Data modeling and user experience systems",
        description:
          "Selection of optimal technology stacks, relational data modeling, API contract specifications, and component hierarchy design for maximum usability.",
        deliverables: [
          "System architecture and data flow blueprints",
          "Relational database schema modeling (ERD)",
          "Responsive interface prototypes and design system",
        ],
        iconName: "Compass",
      },
      {
        step: 3,
        title: "Development & Integration",
        subtitle: "Clean code execution and service orchestration",
        description:
          "Writing clean, modular, and strongly-typed code. Engineering reactive UI components, secure backend endpoints, payment gateways, and automated pipelines.",
        deliverables: [
          "Iterative agile development with progressive demos",
          "Third-party API and payment gateway integration",
          "Strict Git branch management and continuous commits",
        ],
        iconName: "Code2",
      },
      {
        step: 4,
        title: "QA & Cloud Deployment",
        subtitle: "Validation, speed optimization, and launch",
        description:
          "Rigorous multi-device quality testing, latency and Core Web Vitals optimization, production server orchestration, and technical post-launch support.",
        deliverables: [
          "Full functional, cross-browser, and security QA",
          "Core Web Vitals tuning and database query profiling",
          "Automated production deployment and monitoring",
        ],
        iconName: "Rocket",
      },
    ] as MethodologyStep[],
  },
}
