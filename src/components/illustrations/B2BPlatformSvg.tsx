import React from 'react'

export const B2BPlatformSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      <svg
        viewBox="0 0 480 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-4 select-none"
      >
        <defs>
          <linearGradient id="b2bCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="accentIndigo" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Left Side: Business Dashboard & Analytics */}
        <g transform="translate(25, 25)">
          <rect width="255" height="215" rx="10" fill="url(#b2bCard)" stroke="#6366F1" strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Header */}
          <rect x="15" y="15" width="80" height="7" rx="3.5" fill="#E2E8F0" />
          <rect x="15" y="27" width="50" height="5" rx="2.5" fill="#64748B" />

          {/* Quick Stats Grid */}
          <g transform="translate(15, 45)">
            <rect width="68" height="42" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <rect x="8" y="10" width="30" height="4" rx="2" fill="#64748B" />
            <text x="8" y="32" fill="#38BDF8" fontSize="12" fontFamily="monospace" fontWeight="bold">$48.2k</text>

            <rect x="76" y="0" width="68" height="42" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <rect x="84" y="10" width="35" height="4" rx="2" fill="#64748B" />
            <text x="84" y="32" fill="#10B981" fontSize="12" fontFamily="monospace" fontWeight="bold">+142</text>

            <rect x="152" y="0" width="72" height="42" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <rect x="160" y="10" width="30" height="4" rx="2" fill="#64748B" />
            <text x="160" y="32" fill="#A5B4FC" fontSize="12" fontFamily="monospace" fontWeight="bold">99.8%</text>
          </g>

          {/* Business Chart Bars */}
          <g transform="translate(15, 105)">
            <rect width="224" height="65" rx="6" fill="#020617" />
            {/* Chart Grid Lines */}
            <line x1="15" y1="20" x2="210" y2="20" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="15" y1="40" x2="210" y2="40" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
            {/* Bars */}
            <rect x="25" y="35" width="16" height="25" rx="3" fill="#334155" />
            <rect x="55" y="25" width="16" height="35" rx="3" fill="#4F46E5" />
            <rect x="85" y="15" width="16" height="45" rx="3" fill="#6366F1" />
            <rect x="115" y="30" width="16" height="30" rx="3" fill="#4F46E5" />
            <rect x="145" y="10" width="16" height="50" rx="3" fill="#38BDF8" />
            <rect x="175" y="18" width="16" height="42" rx="3" fill="url(#accentIndigo)" />
          </g>

          {/* Status Bar */}
          <g transform="translate(15, 182)">
            <rect width="224" height="22" rx="5" fill="#0F172A" />
            <circle cx="12" cy="11" r="3.5" fill="#10B981" />
            <text x="22" y="15" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Módulo B2B: Catálogos, Cotizaciones & Membresías Activas</text>
          </g>
        </g>

        {/* Right Side: Real-Time Chat & Landing Generator Mockup */}
        <g transform="translate(295, 25)">
          <rect width="160" height="110" rx="10" fill="url(#b2bCard)" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Live Chat Title */}
          <rect x="15" y="12" width="60" height="6" rx="3" fill="#E2E8F0" />
          <circle cx="140" cy="15" r="4" fill="#10B981" />

          {/* Message 1 */}
          <g transform="translate(12, 28)">
            <rect width="105" height="20" rx="5" fill="#334155" />
            <text x="8" y="13" fill="#E2E8F0" fontSize="7" fontFamily="sans-serif">¿Disponible para cotización?</text>
          </g>
          {/* Message 2 (Response) */}
          <g transform="translate(42, 54)">
            <rect width="105" height="20" rx="5" fill="#4F46E5" />
            <text x="8" y="13" fill="#FFFFFF" fontSize="7" fontFamily="sans-serif">Propuesta enviada en PDF</text>
          </g>
          {/* Input bar */}
          <rect x="12" y="82" width="135" height="16" rx="4" fill="#020617" stroke="#334155" strokeWidth="0.8" />
          <circle cx="138" cy="90" r="4" fill="#38BDF8" />
        </g>

        {/* Landing Page Generator Mini Card */}
        <g transform="translate(295, 145)">
          <rect width="160" height="95" rx="10" fill="url(#b2bCard)" stroke="#334155" strokeWidth="1" />
          <rect x="15" y="12" width="90" height="6" rx="3" fill="#A5B4FC" />
          <rect x="15" y="24" width="130" height="30" rx="5" fill="#020617" stroke="#6366F1" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="80" y="42" fill="#38BDF8" fontSize="8" fontFamily="monospace" textAnchor="middle">Landing Generator // Multi-Tenant</text>
          <rect x="15" y="62" width="60" height="18" rx="4" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="0.8" />
          <text x="45" y="74" fill="#34D399" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Generar URL</text>
        </g>
      </svg>
    </div>
  )
}
