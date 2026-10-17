import type { QaCapability } from '../types'

export const qaData = {
  es: {
    sectionTitle: "Experiencia en calidad de software",
    heading: "El desarrollo no termina cuando el código funciona.",
    intro:
      "Además del desarrollo de software, cuento con experiencia en pruebas funcionales, exploratorias, de regresión y usabilidad, trabajando con aplicaciones web, móviles y plataformas de streaming. Esta perspectiva permite construir soluciones con mayor atención a la estabilidad, calidad y experiencia del usuario.",
    subtext:
      "Esta formación en aseguramiento de calidad forjada en plataformas internacionales de testing aporta una visión crítica integral: anticipar fallos antes de que lleguen a producción, validar casos borde y garantizar que cada interacción funcione a la perfección en cualquier pantalla.",
    badgeNotice: "Perspectiva Integral de Aseguramiento de Calidad",
    statValue: "+10",
    statLabel: "Años en QA Internacional & Testing de Ecosistemas",
    capabilities: [
      {
        title: "Testing Web y Multi-Navegador",
        description:
          "Validación minuciosa de consistencia de renderizado, compatibilidad CSS/JS, tiempos de respuesta y Core Web Vitals en Chrome, Safari, Firefox y Edge.",
        iconName: "Monitor",
        platforms: ["Chrome", "Safari", "Firefox", "Edge", "Responsive"],
      },
      {
        title: "Validación de Apps Móviles",
        description:
          "Pruebas en dispositivos reales iOS y Android: comportamiento táctil, orientación de pantalla, modos oscuro/claro, consumo de batería y transiciones de red.",
        iconName: "Smartphone",
        platforms: ["iOS", "Android", "PWA", "Tablets"],
      },
      {
        title: "Aplicaciones para Smart TV y Streaming",
        description:
          "Experiencia especializada en ecosistemas de salas de estar con navegación por control remoto (D-Pad), buffer multimedia y estabilidad bajo diferentes anchos de banda.",
        iconName: "Tv",
        platforms: ["Samsung Tizen", "LG webOS", "Roku", "Android TV", "Fire TV"],
      },
      {
        title: "Pruebas de Integraciones y Pagos",
        description:
          "Validación exhaustiva de pasarelas de pago, webhooks, manejo de transacciones fallidas, tokens de seguridad, cargos recurrentes y facturación electrónica.",
        iconName: "ShieldAlert",
        platforms: ["Stripe Checkout", "PayPal", "Openpay", "Webhooks", "CFDI"],
      },
      {
        title: "Detección y Documentación Estructurada de Errores",
        description:
          "Elaboración de reportes de bugs con pasos exactos de reproducción, logs de consola, capturas de tráfico con Charles Proxy y análisis de causas raíz.",
        iconName: "FileSearch",
        platforms: ["Charles Proxy", "Postman", "DevTools", "Bug Tracking"],
      },
      {
        title: "Control de Calidad y Pruebas de Regresión",
        description:
          "Diseño y ejecución de planes de prueba para garantizar que nuevas versiones o refactorizaciones no alteren funcionalidades preexistentes críticas.",
        iconName: "CheckCheck",
        platforms: ["Smoke Testing", "Regresión", "Exploratorio", "Criterios de Aceptación"],
      },
    ] as QaCapability[],
  },
  en: {
    sectionTitle: "Software Quality Assurance & Testing",
    heading: "Software engineering does not end when code compiles.",
    intro:
      "Beyond core software engineering, I bring extensive background in functional, exploratory, regression, and usability testing across web, mobile, and digital streaming platforms. This holistic perspective enables building systems with heightened stability, resilience, and user experience.",
    subtext:
      "This rigorous quality assurance discipline forged across global testing ecosystems instills an invaluable critical mindset: anticipating failures before code hits production, validating edge cases, and ensuring flawless performance on every screen.",
    badgeNotice: "Holistic Quality Assurance & Reliability Mindset",
    statValue: "+10",
    statLabel: "Years in Global QA Testing & Device Ecosystems",
    capabilities: [
      {
        title: "Web & Cross-Browser Verification",
        description:
          "Thorough validation of rendering consistency, CSS/JS feature compatibility, latency metrics, and Core Web Vitals across Chrome, Safari, Firefox, and Edge.",
        iconName: "Monitor",
        platforms: ["Chrome", "Safari", "Firefox", "Edge", "Responsive"],
      },
      {
        title: "Native & Hybrid Mobile Validation",
        description:
          "Real-device verification on iOS and Android: touch gestures, screen orientation adaptability, dark/light themes, battery consumption, and network shifts.",
        iconName: "Smartphone",
        platforms: ["iOS", "Android", "PWA", "Tablets"],
      },
      {
        title: "Smart TV & Streaming Platform Ecosystems",
        description:
          "Specialized testing for living-room apps with remote control (D-Pad) focus navigation, multimedia buffering, bitrate shifts, and memory constraints.",
        iconName: "Tv",
        platforms: ["Samsung Tizen", "LG webOS", "Roku", "Android TV", "Fire TV"],
      },
      {
        title: "Payment Gateway & Integration Testing",
        description:
          "End-to-end checkout validation, webhook event listeners, failure recovery flows, security token authorization, recurring debits, and electronic invoicing.",
        iconName: "ShieldAlert",
        platforms: ["Stripe Checkout", "PayPal", "Openpay", "Webhooks", "CFDI"],
      },
      {
        title: "Structured Bug Reporting & Root Cause Analysis",
        description:
          "Detailed defect reports with repeatable reproduction steps, console network logs, Charles Proxy HTTP traces, and root-cause diagnostic assessments.",
        iconName: "FileSearch",
        platforms: ["Charles Proxy", "Postman", "DevTools", "Bug Tracking"],
      },
      {
        title: "Quality Control & Regression Testing",
        description:
          "Designing test cases and executing regression suites to guarantee that major refactoring or feature additions never disrupt core production workflows.",
        iconName: "CheckCheck",
        platforms: ["Smoke Testing", "Regression", "Exploratory", "Acceptance Criteria"],
      },
    ] as QaCapability[],
  },
}
