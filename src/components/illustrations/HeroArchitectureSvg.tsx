import React from 'react'

export const HeroArchitectureSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/10] max-w-2xl mx-auto flex items-center justify-center ${className}`}>
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-500/10 rounded-2xl blur-2xl -z-10 pointer-events-none" />
      
      <svg
        viewBox="0 0 800 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl select-none"
        aria-label="Arquitectura de Software y Sistemas Conectados"
      >
        <defs>
          <linearGradient id="heroCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="blueAccent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
          
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Isometric Grid Floor */}
        <g opacity="0.6">
          <ellipse cx="400" cy="420" rx="360" ry="80" fill="url(#blueAccent)" />
          <path
            d="M 120 400 L 400 480 L 680 400 L 400 320 Z"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeOpacity="0.25"
            strokeDasharray="4 4"
          />
        </g>

        {/* Connecting Data Pipelines (Glowing Beams) */}
        {/* Left client to Gateway */}
        <path
          d="M 180 160 C 260 160, 280 230, 340 230"
          stroke="url(#cyanLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="8 6"
        >
          <animate attributeName="stroke-dashoffset" values="50;0" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Right API to Gateway */}
        <path
          d="M 620 160 C 540 160, 520 230, 460 230"
          stroke="url(#cyanLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="8 6"
        >
          <animate attributeName="stroke-dashoffset" values="0;50" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Gateway down to Database & Storage */}
        <path
          d="M 400 280 L 400 360"
          stroke="#38BDF8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* Gateway to Offline / Cache */}
        <path
          d="M 370 270 C 310 290, 270 330, 250 360"
          stroke="#818CF8"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        {/* Gateway to Cloud Services */}
        <path
          d="M 430 270 C 490 290, 530 330, 550 360"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        {/* 1. TOP CLIENT LAYER (Web & Mobile UI Node) */}
        <g transform="translate(90, 110)">
          <rect
            width="170"
            height="100"
            rx="12"
            fill="url(#heroCardGrad)"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            className="transition-all duration-300"
          />
          {/* Header dots */}
          <circle cx="20" cy="18" r="4" fill="#EF4444" opacity="0.8" />
          <circle cx="34" cy="18" r="4" fill="#F59E0B" opacity="0.8" />
          <circle cx="48" cy="18" r="4" fill="#10B981" opacity="0.8" />
          <rect x="70" y="14" width="75" height="8" rx="4" fill="#334155" />
          
          {/* Wireframe blocks */}
          <rect x="20" y="34" width="40" height="48" rx="6" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="70" y="34" width="78" height="12" rx="4" fill="#38BDF8" fillOpacity="0.25" />
          <rect x="70" y="52" width="60" height="8" rx="3" fill="#64748B" fillOpacity="0.5" />
          <rect x="70" y="66" width="70" height="8" rx="3" fill="#64748B" fillOpacity="0.3" />
          
          {/* Floating badge */}
          <rect x="15" y="88" width="85" height="18" rx="9" fill="#0EA5E9" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="0.8" />
          <text x="57" y="100" fill="#38BDF8" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">REACT // SPA</text>
        </g>

        {/* 2. TOP AI & CLOUD SERVICES NODE */}
        <g transform="translate(540, 110)">
          <rect
            width="170"
            height="100"
            rx="12"
            fill="url(#heroCardGrad)"
            stroke="#818CF8"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <circle cx="25" cy="22" r="8" fill="#818CF8" fillOpacity="0.2" />
          <path d="M 21 22 L 29 22 M 25 18 L 25 26" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="42" y="18" width="90" height="8" rx="4" fill="#334155" />

          {/* Neural / Pipeline nodes */}
          <circle cx="40" cy="56" r="6" fill="#38BDF8" filter="url(#neonGlow)" />
          <circle cx="85" cy="42" r="5" fill="#818CF8" />
          <circle cx="85" cy="70" r="5" fill="#C084FC" />
          <circle cx="130" cy="56" r="6" fill="#38BDF8" />
          <line x1="40" y1="56" x2="85" y2="42" stroke="#818CF8" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="40" y1="56" x2="85" y2="70" stroke="#818CF8" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="85" y1="42" x2="130" y2="56" stroke="#818CF8" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="85" y1="70" x2="130" y2="56" stroke="#818CF8" strokeWidth="1.2" strokeOpacity="0.7" />

          {/* Badge */}
          <rect x="70" y="88" width="85" height="18" rx="9" fill="#818CF8" fillOpacity="0.2" stroke="#818CF8" strokeWidth="0.8" />
          <text x="112" y="100" fill="#A5B4FC" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">AI // ORCHESTRA</text>
        </g>

        {/* 3. CENTER: CORE API & BACKEND ENGINE (Main Hexagonal Core) */}
        <g transform="translate(320, 180)">
          {/* Outer glow ring */}
          <rect
            x="0"
            y="0"
            width="160"
            height="120"
            rx="16"
            fill="url(#heroCardGrad)"
            stroke="url(#cyanLine)"
            strokeWidth="2"
          />
          
          {/* Internal circuitry lines */}
          <path d="M 20 20 L 40 20 L 50 35 L 110 35 L 120 20 L 140 20" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          
          {/* Central processor badge */}
          <rect x="50" y="36" width="60" height="48" rx="10" fill="#0B132B" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M 68 52 L 92 52 M 68 60 L 86 60 M 68 68 L 90 68" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="80" cy="46" r="3" fill="#38BDF8" filter="url(#neonGlow)" />
          
          {/* Core Labels */}
          <text x="80" y="98" fill="#F8FAFC" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">
            CORE API GATEWAY
          </text>
          <text x="80" y="110" fill="#38BDF8" fontSize="8" fontFamily="monospace" textAnchor="middle">
            LARAVEL • DJANGO • RBAC
          </text>

          {/* Status pulse */}
          <circle cx="145" cy="16" r="4" fill="#10B981" />
          <circle cx="145" cy="16" r="7" stroke="#10B981" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" values="4;10;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* 4. BOTTOM DATABASE CLUSTERS (PostgreSQL & MySQL Isometric Cylinders) */}
        <g transform="translate(350, 360)">
          {/* Cylinder Top Base */}
          <ellipse cx="50" cy="15" rx="46" ry="12" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Cylinder Body */}
          <path d="M 4 15 L 4 45 C 4 54, 96 54, 96 45 L 96 15" fill="#0369A1" stroke="#38BDF8" strokeWidth="1.5" />
          <ellipse cx="50" cy="30" rx="46" ry="10" fill="none" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.4" />
          <ellipse cx="50" cy="45" rx="46" ry="10" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.2" />
          {/* Cylinder 2 Bottom */}
          <path d="M 4 45 L 4 75 C 4 84, 96 84, 96 75 L 96 45" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
          <ellipse cx="50" cy="60" rx="46" ry="10" fill="none" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.4" />
          <ellipse cx="50" cy="75" rx="46" ry="10" fill="#0C4A6E" stroke="#38BDF8" strokeWidth="1.5" />

          {/* Database Label */}
          <text x="50" y="48" fill="#F8FAFC" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
            POSTGRESQL // DB
          </text>
          <text x="50" y="68" fill="#7DD3FC" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
            INDEXED • -45% LATENCY
          </text>
        </g>

        {/* 5. BOTTOM LEFT: OFFLINE SYNC NODE */}
        <g transform="translate(180, 360)">
          <rect width="130" height="70" rx="10" fill="url(#heroCardGrad)" stroke="#818CF8" strokeWidth="1.2" strokeOpacity="0.6" />
          <circle cx="25" cy="25" r="10" fill="#818CF8" fillOpacity="0.15" />
          <path d="M 21 25 L 29 25 M 25 21 L 25 29" stroke="#818CF8" strokeWidth="1.5" />
          <text x="75" y="26" fill="#E2E8F0" fontSize="8.5" fontFamily="monospace" fontWeight="bold">OFFLINE SYNC</text>
          <text x="20" y="48" fill="#94A3B8" fontSize="7.5">IndexedDB • Queue</text>
          <path d="M 20 58 L 110 58" stroke="#334155" strokeWidth="2" />
          <path d="M 20 58 L 85 58" stroke="#818CF8" strokeWidth="2" />
        </g>

        {/* 6. BOTTOM RIGHT: CLOUD & VPS INFRA NODE */}
        <g transform="translate(490, 360)">
          <rect width="130" height="70" rx="10" fill="url(#heroCardGrad)" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.6" />
          <circle cx="25" cy="25" r="10" fill="#38BDF8" fillOpacity="0.15" />
          <rect x="20" y="20" width="10" height="10" rx="2" fill="#38BDF8" />
          <text x="75" y="26" fill="#E2E8F0" fontSize="8.5" fontFamily="monospace" fontWeight="bold">LINUX VPS / CDN</text>
          <text x="20" y="48" fill="#94A3B8" fontSize="7.5">Nginx • 99.9% Uptime</text>
          <rect x="20" y="54" width="90" height="6" rx="3" fill="#10B981" fillOpacity="0.25" />
          <rect x="20" y="54" width="75" height="6" rx="3" fill="#10B981" />
        </g>

        {/* Floating particles */}
        <circle cx="300" cy="130" r="2.5" fill="#38BDF8" opacity="0.6" />
        <circle cx="490" cy="140" r="2" fill="#818CF8" opacity="0.7" />
        <circle cx="260" cy="280" r="3" fill="#38BDF8" filter="url(#neonGlow)" />
        <circle cx="530" cy="280" r="2.5" fill="#C084FC" opacity="0.6" />
        <circle cx="400" cy="330" r="2" fill="#38BDF8" opacity="0.8" />
      </svg>
    </div>
  )
}
