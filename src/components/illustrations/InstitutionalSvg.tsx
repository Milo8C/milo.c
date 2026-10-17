import React from 'react'

export const InstitutionalSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      <svg
        viewBox="0 0 480 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-4 select-none"
      >
        <defs>
          <linearGradient id="instCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Workflow Diagram Main Area */}
        <g transform="translate(30, 25)">
          <rect width="420" height="220" rx="12" fill="url(#instCard)" stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.4" />
          
          {/* Header */}
          <rect x="20" y="16" width="120" height="7" rx="3.5" fill="#E2E8F0" />
          <rect x="20" y="28" width="70" height="5" rx="2.5" fill="#64748B" />

          {/* RBAC Badge */}
          <rect x="300" y="14" width="100" height="20" rx="10" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="0.8" />
          <text x="350" y="27" fill="#38BDF8" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RBAC // SECURITY</text>

          {/* Workflow Pipeline Nodes */}
          {/* Node 1: Solicitud */}
          <g transform="translate(20, 60)">
            <rect width="105" height="75" rx="8" fill="#020617" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="20" cy="22" r="8" fill="#0284C7" fillOpacity="0.3" />
            <path d="M 17 22 L 23 22 M 20 19 L 20 25" stroke="#38BDF8" strokeWidth="1.2" />
            <text x="34" y="24" fill="#F8FAFC" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Recepción</text>
            <rect x="15" y="38" width="75" height="5" rx="2.5" fill="#64748B" />
            <rect x="15" y="48" width="55" height="4" rx="2" fill="#475569" />
            <text x="15" y="66" fill="#38BDF8" fontSize="7" fontFamily="monospace">Folio #9821</text>
          </g>

          {/* Arrow 1 -> 2 */}
          <path d="M 130 98 L 155 98" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="157,98 152,95 152,101" fill="#38BDF8" />

          {/* Node 2: Validación & Firma */}
          <g transform="translate(160, 60)">
            <rect width="105" height="75" rx="8" fill="#020617" stroke="#6366F1" strokeWidth="1" />
            <circle cx="20" cy="22" r="8" fill="#6366F1" fillOpacity="0.3" />
            <path d="M 16 22 L 19 25 L 25 19" stroke="#818CF8" strokeWidth="1.5" />
            <text x="34" y="24" fill="#F8FAFC" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Validación</text>
            <rect x="15" y="38" width="75" height="5" rx="2.5" fill="#64748B" />
            <rect x="15" y="48" width="60" height="4" rx="2" fill="#475569" />
            <text x="15" y="66" fill="#818CF8" fontSize="7" fontFamily="monospace">Firma Digital</text>
          </g>

          {/* Arrow 2 -> 3 */}
          <path d="M 270 98 L 295 98" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="297,98 292,95 292,101" fill="#6366F1" />

          {/* Node 3: Dictamen & Conclusión */}
          <g transform="translate(300, 60)">
            <rect width="100" height="75" rx="8" fill="#020617" stroke="#10B981" strokeWidth="1" />
            <circle cx="20" cy="22" r="8" fill="#10B981" fillOpacity="0.3" />
            <path d="M 16 22 L 19 25 L 25 19" stroke="#34D399" strokeWidth="1.5" />
            <text x="34" y="24" fill="#F8FAFC" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Dictamen</text>
            <rect x="15" y="38" width="70" height="5" rx="2.5" fill="#64748B" />
            <rect x="15" y="48" width="50" height="4" rx="2" fill="#475569" />
            <text x="15" y="66" fill="#34D399" fontSize="7" fontFamily="monospace">Aprobado ✓</text>
          </g>

          {/* Bottom Audit Trail Row */}
          <g transform="translate(20, 155)">
            <rect width="380" height="48" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <circle cx="25" cy="24" r="5" fill="#38BDF8" />
            <text x="40" y="21" fill="#E2E8F0" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Bitácora de Auditoría en Tiempo Real</text>
            <text x="40" y="34" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">Trazabilidad inmutable de eventos, fecha/hora y usuario responsable</text>
            
            <rect x="290" y="14" width="75" height="20" rx="4" fill="#1E293B" />
            <text x="327" y="27" fill="#67E8F9" fontSize="8" fontFamily="monospace" textAnchor="middle">100% AUDITADO</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
