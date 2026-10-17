import React from 'react'

export const OfflineSyncSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-amber-500/10 pointer-events-none" />
      <svg
        viewBox="0 0 480 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-4 select-none"
      >
        <defs>
          <linearGradient id="offCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="amberCyan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Device on the Left (Tablet / Mobile capturing offline data) */}
        <g transform="translate(30, 30)">
          <rect width="170" height="210" rx="14" fill="url(#offCard)" stroke="#F59E0B" strokeWidth="1.5" />
          {/* Device Speaker / Camera */}
          <circle cx="85" cy="12" r="3" fill="#64748B" />
          
          {/* Offline status indicator */}
          <g transform="translate(15, 25)">
            <rect width="140" height="24" rx="6" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="0.8" />
            <circle cx="14" cy="12" r="4" fill="#F59E0B" />
            <text x="24" y="15" fill="#FCD34D" fontSize="8" fontFamily="sans-serif" fontWeight="bold">MODO OFFLINE ACTIVO</text>
          </g>

          {/* Form fields in Tablet */}
          <g transform="translate(15, 58)">
            <rect width="140" height="28" rx="5" fill="#020617" stroke="#334155" strokeWidth="0.8" />
            <rect x="10" y="8" width="60" height="4" rx="2" fill="#64748B" />
            <rect x="10" y="16" width="90" height="5" rx="2" fill="#94A3B8" />
          </g>

          <g transform="translate(15, 94)">
            <rect width="140" height="45" rx="5" fill="#020617" stroke="#334155" strokeWidth="0.8" />
            <rect x="10" y="8" width="80" height="4" rx="2" fill="#64748B" />
            <rect x="10" y="16" width="115" height="5" rx="2" fill="#94A3B8" />
            <rect x="10" y="26" width="70" height="5" rx="2" fill="#94A3B8" />
          </g>

          {/* Local IndexedDB Pill */}
          <g transform="translate(15, 150)">
            <rect width="140" height="40" rx="6" fill="#0B132B" stroke="#06B6D4" strokeWidth="0.8" />
            <text x="70" y="16" fill="#67E8F9" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">INDEXED-DB LOCAL</text>
            <text x="70" y="30" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">12 Registros en espera</text>
          </g>
        </g>

        {/* Middle Sync Queue & Connection Status */}
        <g transform="translate(215, 80)">
          {/* Sync arrows */}
          <path
            d="M 10 30 C 35 10, 55 10, 80 30"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 4"
          >
            <animate attributeName="stroke-dashoffset" values="40;0" dur="2s" repeatCount="indefinite" />
          </path>
          <path
            d="M 80 50 C 55 70, 35 70, 10 50"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 4"
          >
            <animate attributeName="stroke-dashoffset" values="0;40" dur="2s" repeatCount="indefinite" />
          </path>
          {/* Central Queue Box */}
          <rect x="15" y="22" width="60" height="36" rx="6" fill="#020617" stroke="#06B6D4" strokeWidth="1" />
          <text x="45" y="36" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SYNC</text>
          <text x="45" y="47" fill="#A5B4FC" fontSize="6.5" fontFamily="monospace" textAnchor="middle">QUEUE</text>
        </g>

        {/* Right Side: Central Server & Resolution Engine */}
        <g transform="translate(315, 30)">
          <rect width="140" height="210" rx="14" fill="url(#offCard)" stroke="#06B6D4" strokeWidth="1.5" />
          <rect x="15" y="15" width="80" height="6" rx="3" fill="#E2E8F0" />
          <text x="15" y="34" fill="#06B6D4" fontSize="8.5" fontFamily="monospace" fontWeight="bold">SERVIDOR CENTRAL</text>

          {/* Database nodes */}
          <g transform="translate(15, 45)">
            <rect width="110" height="30" rx="5" fill="#020617" stroke="#334155" strokeWidth="0.8" />
            <circle cx="15" cy="15" r="4" fill="#10B981" />
            <text x="25" y="18" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace">PostgreSQL DB</text>
          </g>

          {/* Conflict Resolution badge */}
          <g transform="translate(15, 85)">
            <rect width="110" height="50" rx="5" fill="#020617" stroke="#334155" strokeWidth="0.8" />
            <text x="10" y="18" fill="#94A3B8" fontSize="7" fontFamily="sans-serif">Control de versiones:</text>
            <text x="10" y="32" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">✓ Sin Colisiones</text>
            <text x="10" y="42" fill="#64748B" fontSize="6.5" fontFamily="monospace">Timestamp + UUID</text>
          </g>

          {/* Auto Reconnect badge */}
          <g transform="translate(15, 145)">
            <rect width="110" height="45" rx="6" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="0.8" />
            <circle cx="15" cy="22" r="4" fill="#10B981" />
            <text x="26" y="20" fill="#34D399" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Auto-Reconexión</text>
            <text x="26" y="32" fill="#A7F3D0" fontSize="6.5" fontFamily="sans-serif">Reanudación sin pérdida</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
