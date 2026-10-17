import React from 'react'

export const EdTechSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      <svg
        viewBox="0 0 480 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-4 select-none"
      >
        <defs>
          <linearGradient id="edCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Video Player Mockup */}
        <g transform="translate(30, 30)">
          <rect width="250" height="150" rx="10" fill="url(#edCard)" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.4" />
          {/* Header bar */}
          <rect x="0" y="0" width="250" height="24" rx="10" fill="#0B132B" />
          <circle cx="16" cy="12" r="3.5" fill="#EF4444" opacity="0.7" />
          <circle cx="28" cy="12" r="3.5" fill="#F59E0B" opacity="0.7" />
          <circle cx="40" cy="12" r="3.5" fill="#10B981" opacity="0.7" />
          <rect x="60" y="9" width="100" height="6" rx="3" fill="#334155" />

          {/* Video canvas center */}
          <rect x="15" y="36" width="220" height="90" rx="6" fill="#020617" />
          {/* Play button */}
          <circle cx="125" cy="78" r="20" fill="url(#cyanGrad)" />
          <polygon points="120,70 135,80 120,90" fill="#FFFFFF" />

          {/* Progress bar */}
          <rect x="15" y="132" width="220" height="4" rx="2" fill="#1E293B" />
          <rect x="15" y="132" width="150" height="4" rx="2" fill="url(#cyanGrad)" />
        </g>

        {/* Right Panel: Course Modules & Payment Badge */}
        <g transform="translate(295, 30)">
          <rect width="155" height="205" rx="10" fill="url(#edCard)" stroke="#334155" strokeWidth="1" />
          <rect x="15" y="15" width="80" height="8" rx="4" fill="#94A3B8" />

          {/* Module 1 */}
          <g transform="translate(15, 35)">
            <rect width="125" height="32" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="16" cy="16" r="6" fill="#10B981" fillOpacity="0.2" />
            <path d="M 13 16 L 15 18 L 19 14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="30" y="11" width="65" height="5" rx="2" fill="#E2E8F0" />
            <rect x="30" y="19" width="40" height="4" rx="2" fill="#64748B" />
          </g>

          {/* Module 2 */}
          <g transform="translate(15, 75)">
            <rect width="125" height="32" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <circle cx="16" cy="16" r="6" fill="#38BDF8" fillOpacity="0.2" />
            <circle cx="16" cy="16" r="2.5" fill="#38BDF8" />
            <rect x="30" y="11" width="75" height="5" rx="2" fill="#E2E8F0" />
            <rect x="30" y="19" width="50" height="4" rx="2" fill="#64748B" />
          </g>

          {/* Module 3 */}
          <g transform="translate(15, 115)">
            <rect width="125" height="32" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <circle cx="16" cy="16" r="6" fill="#64748B" fillOpacity="0.2" />
            <rect x="30" y="11" width="60" height="5" rx="2" fill="#64748B" />
            <rect x="30" y="19" width="35" height="4" rx="2" fill="#475569" />
          </g>

          {/* Stripe Badge */}
          <g transform="translate(15, 160)">
            <rect width="125" height="32" rx="6" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="1" strokeOpacity="0.5" />
            <rect x="12" y="11" width="22" height="10" rx="3" fill="#6366F1" />
            <text x="42" y="21" fill="#C7D2FE" fontSize="8" fontFamily="monospace" fontWeight="bold">STRIPE CHECKOUT</text>
          </g>
        </g>

        {/* Bottom Metrics Pill */}
        <g transform="translate(30, 195)">
          <rect width="250" height="40" rx="8" fill="url(#edCard)" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="25" cy="20" r="5" fill="#10B981" />
          <text x="40" y="23" fill="#E2E8F0" fontSize="10" fontFamily="sans-serif" fontWeight="bold">98% Satisfacción • Facturación CFDI Automática</text>
        </g>
      </svg>
    </div>
  )
}
