import React from 'react'

export const EcommerceSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      <svg
        viewBox="0 0 480 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-4 select-none"
      >
        <defs>
          <linearGradient id="ecomCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Left Side: Modern Digital Payment Card */}
        <g transform="translate(35, 45)">
          <rect width="190" height="115" rx="12" fill="url(#cardGrad)" stroke="#38BDF8" strokeWidth="1" />
          {/* Card Chip */}
          <rect x="20" y="20" width="30" height="22" rx="4" fill="#FDE047" opacity="0.9" />
          <path d="M 28 20 L 28 42 M 36 20 L 36 42 M 20 31 L 50 31" stroke="#CA8A04" strokeWidth="1" />
          
          {/* Contactless symbol */}
          <path d="M 62 25 C 65 28, 65 34, 62 37" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
          <path d="M 68 22 C 73 27, 73 35, 68 40" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />

          {/* Card Numbers */}
          <text x="20" y="70" fill="#FFFFFF" fontSize="11" fontFamily="monospace" letterSpacing="2" fontWeight="bold">•••• 8829</text>
          
          {/* Cardholder label */}
          <text x="20" y="94" fill="#BAE6FD" fontSize="7.5" fontFamily="sans-serif">MEMBRESÍA VIP</text>
          <text x="140" y="94" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">12/28</text>
        </g>

        {/* Floating Transaction Pill */}
        <g transform="translate(35, 175)">
          <rect width="190" height="42" rx="8" fill="url(#ecomCard)" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="20" cy="21" r="5" fill="#10B981" />
          <text x="32" y="18" fill="#F8FAFC" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold">Cobro Recurrente Procesado</text>
          <text x="32" y="30" fill="#34D399" fontSize="7.5" fontFamily="monospace">Stripe • Webhook 200 OK</text>
        </g>

        {/* Right Side: Subscription & Checkout Panel */}
        <g transform="translate(250, 35)">
          <rect width="195" height="190" rx="12" fill="url(#ecomCard)" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.4" />
          
          {/* Header */}
          <rect x="15" y="15" width="80" height="7" rx="3.5" fill="#E2E8F0" />
          <rect x="15" y="26" width="50" height="5" rx="2.5" fill="#64748B" />

          {/* Plan 1 */}
          <g transform="translate(15, 42)">
            <rect width="165" height="38" rx="6" fill="#020617" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="15" cy="19" r="6" fill="#38BDF8" fillOpacity="0.2" />
            <circle cx="15" cy="19" r="2.5" fill="#38BDF8" />
            <text x="28" y="18" fill="#F8FAFC" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Suscripción Mensual</text>
            <text x="28" y="28" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">Acceso a mentoría & red</text>
            <text x="135" y="22" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="bold">$99</text>
          </g>

          {/* Plan 2 */}
          <g transform="translate(15, 88)">
            <rect width="165" height="38" rx="6" fill="#020617" stroke="#334155" strokeWidth="1" />
            <circle cx="15" cy="19" r="6" fill="#334155" />
            <text x="28" y="18" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Plan Anual Corporativo</text>
            <text x="28" y="28" fill="#64748B" fontSize="7" fontFamily="sans-serif">Facturación CFDI incluida</text>
            <text x="130" y="22" fill="#94A3B8" fontSize="9" fontFamily="monospace">$890</text>
          </g>

          {/* Gateways Supported Badge */}
          <g transform="translate(15, 138)">
            <rect width="165" height="36" rx="6" fill="#0F172A" />
            <text x="82" y="16" fill="#94A3B8" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Pasarelas Integradas</text>
            <text x="82" y="28" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">STRIPE • PAYPAL • OPENPAY</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
