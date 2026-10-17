import React from 'react'

export const AiNeuralSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      <svg
        viewBox="0 0 480 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-4 select-none"
      >
        <defs>
          <linearGradient id="aiCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="neuralGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        <g transform="translate(30, 25)">
          <rect width="420" height="220" rx="12" fill="url(#aiCard)" stroke="#C084FC" strokeWidth="1.2" strokeOpacity="0.4" />
          
          {/* Header */}
          <rect x="20" y="16" width="130" height="7" rx="3.5" fill="#E2E8F0" />
          <rect x="20" y="28" width="80" height="5" rx="2.5" fill="#64748B" />
          <rect x="290" y="14" width="110" height="20" rx="10" fill="#9333EA" fillOpacity="0.2" stroke="#C084FC" strokeWidth="0.8" />
          <text x="345" y="27" fill="#E9D5FF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">AI PROFILE ENGINE</text>

          {/* Left: Raw Data / Unstructured input */}
          <g transform="translate(20, 55)">
            <rect width="100" height="90" rx="8" fill="#020617" stroke="#334155" strokeWidth="1" />
            <text x="12" y="20" fill="#94A3B8" fontSize="8" fontFamily="monospace">INPUT: TEXT</text>
            <rect x="12" y="30" width="75" height="4" rx="2" fill="#475569" />
            <rect x="12" y="38" width="65" height="4" rx="2" fill="#475569" />
            <rect x="12" y="46" width="70" height="4" rx="2" fill="#475569" />
            <rect x="12" y="54" width="50" height="4" rx="2" fill="#475569" />
            <rect x="12" y="70" width="75" height="12" rx="3" fill="#1E293B" />
            <text x="50" y="79" fill="#A855F7" fontSize="7" fontFamily="monospace" textAnchor="middle">Datos Crudos</text>
          </g>

          {/* Middle: Neural Processing Nodes */}
          <g transform="translate(140, 50)">
            {/* Synapse Lines */}
            <line x1="20" y1="30" x2="60" y2="20" stroke="#A855F7" strokeWidth="1.2" opacity="0.6" />
            <line x1="20" y1="30" x2="60" y2="50" stroke="#A855F7" strokeWidth="1.2" opacity="0.6" />
            <line x1="20" y1="30" x2="60" y2="80" stroke="#A855F7" strokeWidth="1.2" opacity="0.6" />

            <line x1="20" y1="70" x2="60" y2="20" stroke="#A855F7" strokeWidth="1.2" opacity="0.6" />
            <line x1="20" y1="70" x2="60" y2="50" stroke="#A855F7" strokeWidth="1.2" opacity="0.6" />
            <line x1="20" y1="70" x2="60" y2="80" stroke="#A855F7" strokeWidth="1.2" opacity="0.6" />

            <line x1="60" y1="20" x2="105" y2="35" stroke="#38BDF8" strokeWidth="1.2" opacity="0.7" />
            <line x1="60" y1="50" x2="105" y2="35" stroke="#38BDF8" strokeWidth="1.2" opacity="0.7" />
            <line x1="60" y1="50" x2="105" y2="65" stroke="#38BDF8" strokeWidth="1.2" opacity="0.7" />
            <line x1="60" y1="80" x2="105" y2="65" stroke="#38BDF8" strokeWidth="1.2" opacity="0.7" />

            {/* Input layer nodes */}
            <circle cx="20" cy="30" r="7" fill="#9333EA" />
            <circle cx="20" cy="70" r="7" fill="#9333EA" />

            {/* Hidden layer nodes */}
            <circle cx="60" cy="20" r="6" fill="#C084FC" />
            <circle cx="60" cy="50" r="8" fill="#A855F7" />
            <circle cx="60" cy="80" r="6" fill="#C084FC" />

            {/* Output layer nodes */}
            <circle cx="105" cy="35" r="7" fill="#38BDF8" />
            <circle cx="105" cy="65" r="7" fill="#38BDF8" />
          </g>

          {/* Right: Structured Output / Smart Profile */}
          <g transform="translate(275, 55)">
            <rect width="125" height="90" rx="8" fill="#020617" stroke="#38BDF8" strokeWidth="1" />
            <circle cx="25" cy="25" r="10" fill="#38BDF8" fillOpacity="0.2" />
            <circle cx="25" cy="25" r="4" fill="#38BDF8" />
            <rect x="42" y="18" width="65" height="5" rx="2.5" fill="#E2E8F0" />
            <rect x="42" y="27" width="40" height="4" rx="2" fill="#38BDF8" />

            {/* Tags / Structured Skills */}
            <rect x="15" y="45" width="42" height="14" rx="4" fill="#38BDF8" fillOpacity="0.15" />
            <text x="36" y="55" fill="#38BDF8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Senior</text>

            <rect x="62" y="45" width="48" height="14" rx="4" fill="#C084FC" fillOpacity="0.15" />
            <text x="86" y="55" fill="#C084FC" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Cloud Arch</text>

            <rect x="15" y="65" width="95" height="16" rx="4" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="0.6" />
            <text x="62" y="76" fill="#34D399" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Perfil Estructurado ✓</text>
          </g>

          {/* Bottom AI Pipeline Indicators */}
          <g transform="translate(20, 160)">
            <rect width="380" height="42" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <circle cx="25" cy="21" r="5" fill="#C084FC" />
            <text x="40" y="24" fill="#E2E8F0" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Extracción con LLM • Vector Embeddings • Clasificación Automática</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
