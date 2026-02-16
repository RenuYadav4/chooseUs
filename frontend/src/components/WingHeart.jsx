import React from 'react';

const WingedHeart = () => {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 ">
      
      {/* Left Wing */}
      <div className="absolute left-15 top-1/2 -translate-y-1/2 -translate-x-10 sm:-translate-x-12 md:-translate-x-14 animate-flap-left origin-right">
        <svg width="70" height="80" viewBox="0 0 60 70" className="drop-shadow-lg">
          <path
            d="M 55 35 Q 45 15, 30 8 Q 15 2, 8 18 Q 2 32, 8 45 Q 15 58, 30 52 Q 45 46, 55 35"
            fill="url(#wingGradient)"
            stroke="#f9a8d4"
            strokeWidth="1.5"
          />
          <path d="M 50 35 Q 35 30, 25 28" stroke="#fff" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 48 40 Q 33 37, 23 36" stroke="#fff" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 45 45 Q 30 43, 20 42" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.3" />
          <defs>
            <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fce7f3" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Wing */}
      <div className="absolute right-15 top-1/2 -translate-y-1/2 translate-x-10 sm:translate-x-12 md:translate-x-14 animate-flap-right origin-left">
        <svg width="70" height="80" viewBox="0 0 60 70" className="drop-shadow-lg">
          <path
            d="M 5 35 Q 15 15, 30 8 Q 45 2, 52 18 Q 58 32, 52 45 Q 45 58, 30 52 Q 15 46, 5 35"
            fill="url(#wingGradient2)"
            stroke="#f9a8d4"
            strokeWidth="1.5"
          />
          <path d="M 10 35 Q 25 30, 35 28" stroke="#fff" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 12 40 Q 27 37, 37 36" stroke="#fff" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M 15 45 Q 30 43, 40 42" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.3" />
          <defs>
            <linearGradient id="wingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#fce7f3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Heart */}
      <div className="absolute inset-0 flex items-center justify-center animate-float-gentle">
        <svg viewBox="0 0 120 110" className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
          
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="shadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#be123c" floodOpacity="0.5"/>
            </filter>
          </defs>

          <path
            d="M 60,95 C 48,83 12,60 12,36 C 12,18 24,6 39,6 C 48,6 54,12 60,21 C 66,12 72,6 81,6 C 96,6 108,18 108,36 C 108,60 72,83 60,95 Z"
            fill="#fb7185"
            opacity="0.3"
            filter="url(#glow)"
          />

          <path
            d="M 60,95 C 48,83 12,60 12,36 C 12,18 24,6 39,6 C 48,6 54,12 60,21 C 66,12 72,6 81,6 C 96,6 108,18 108,36 C 108,60 72,83 60,95 Z"
            fill="#be123c"
            opacity="0.25"
            transform="translate(3, 4)"
          />

          <path
            d="M 60,95 C 48,83 12,60 12,36 C 12,18 24,6 39,6 C 48,6 54,12 60,21 C 66,12 72,6 81,6 C 96,6 108,18 108,36 C 108,60 72,83 60,95 Z"
            fill="url(#realisticHeartGradient)"
            stroke="#be123c"
            strokeWidth="1.5"
            filter="url(#shadow)"
            className="animate-heartbeat-realistic"
          />

          <ellipse cx="42" cy="28" rx="18" ry="24" fill="white" opacity="0.4" className="animate-shine-move" />
          <ellipse cx="45" cy="32" rx="12" ry="16" fill="white" opacity="0.25" />
          <circle cx="38" cy="24" r="6" fill="white" opacity="0.6" className="animate-sparkle-shine" />
          <circle cx="50" cy="20" r="4" fill="white" opacity="0.5" />

          <g>
            <ellipse cx="42" cy="39" rx="6" ry="6" fill="white" />
            <circle cx="43" cy="39.5" r="3.5" fill="#4a1f1f" />
            <circle cx="43" cy="39.5" r="2" fill="#1a1a1a" />
            <circle cx="44" cy="38" r="1.2" fill="white" opacity="0.9" />
            <path 
              d="M 36,38 Q 42,36 48,38" 
              stroke="#4a1f1f" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round"
            />
            <path 
              d="M 37,41 Q 42,43 47,41" 
              stroke="#4a1f1f" 
              strokeWidth="1.2" 
              fill="none" 
              strokeLinecap="round"
            />
            <line x1="37" y1="37" x2="35" y2="34" stroke="#3a1515" strokeWidth="1" strokeLinecap="round" />
            <line x1="42" y1="36" x2="42" y2="33" stroke="#3a1515" strokeWidth="1" strokeLinecap="round" />
            <line x1="47" y1="37" x2="49" y2="34" stroke="#3a1515" strokeWidth="1" strokeLinecap="round" />
          </g>

          <g>
            <ellipse cx="78" cy="39" rx="6" ry="6" fill="white" />
            <circle cx="77" cy="39.5" r="3.5" fill="#4a1f1f" />
            <circle cx="77" cy="39.5" r="2" fill="#1a1a1a" />
            <circle cx="76" cy="38" r="1.2" fill="white" opacity="0.9" />
            <path 
              d="M 72,38 Q 78,36 84,38" 
              stroke="#4a1f1f" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round"
            />
            <path 
              d="M 73,41 Q 78,43 83,41" 
              stroke="#4a1f1f" 
              strokeWidth="1.2" 
              fill="none" 
              strokeLinecap="round"
            />
            <line x1="73" y1="37" x2="71" y2="34" stroke="#3a1515" strokeWidth="1" strokeLinecap="round" />
            <line x1="78" y1="36" x2="78" y2="33" stroke="#3a1515" strokeWidth="1" strokeLinecap="round" />
            <line x1="83" y1="37" x2="85" y2="34" stroke="#3a1515" strokeWidth="1" strokeLinecap="round" />
          </g>

          <ellipse cx="30" cy="47" rx="10" ry="7" fill="#f43f5e" opacity="0.4" />
          <ellipse cx="90" cy="47" rx="10" ry="7" fill="#f43f5e" opacity="0.4" />

          <g>
            <path
              d="M 48,58 Q 60,66 72,58"
              stroke="#be123c"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            
            <path
              d="M 52,60 Q 60,64 68,60"
              stroke="#f43f5e"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </g>

          <defs>
            <linearGradient id="realisticHeartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="30%" stopColor="#f43f5e" />
              <stop offset="70%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute animate-sparkle-out-1">
          <svg width="8" height="8" viewBox="0 0 10 10">
            <path d="M 5,0 L 6,4 L 10,5 L 6,6 L 5,10 L 4,6 L 0,5 L 4,4 Z" fill="#fbbf24" opacity="0.8" />
          </svg>
        </div>
        
        <div className="absolute animate-sparkle-out-2">
          <svg width="6" height="6" viewBox="0 0 10 10">
            <path d="M 5,0 L 6,4 L 10,5 L 6,6 L 5,10 L 4,6 L 0,5 L 4,4 Z" fill="#f472b6" opacity="0.8" />
          </svg>
        </div>
        
        <div className="absolute animate-sparkle-out-3">
          <svg width="7" height="7" viewBox="0 0 10 10">
            <path d="M 5,0 L 6,4 L 10,5 L 6,6 L 5,10 L 4,6 L 0,5 L 4,4 Z" fill="#fb923c" opacity="0.8" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes flap-left {
          0%, 100% { transform: translateY(-50%) translateX(-2.5rem) rotateY(0deg); }
          50% { transform: translateY(-50%) translateX(-2.5rem) rotateY(-12deg); }
        }

        @keyframes flap-right {
          0%, 100% { transform: translateY(-50%) translateX(2.5rem) rotateY(0deg); }
          50% { transform: translateY(-50%) translateX(2.5rem) rotateY(12deg); }
        }

        @keyframes heartbeat-realistic {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.03); }
          20% { transform: scale(1); }
          30% { transform: scale(1.03); }
          40% { transform: scale(1); }
        }

        @keyframes shine-move {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-2px, -2px); }
        }

        @keyframes sparkle-shine {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes sparkle-out-1 {
          0% { 
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% { 
            transform: translate(18px, -22px) scale(1);
            opacity: 0;
          }
        }

        @keyframes sparkle-out-2 {
          0% { 
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% { 
            transform: translate(-15px, -28px) scale(1);
            opacity: 0;
          }
        }

        @keyframes sparkle-out-3 {
          0% { 
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% { 
            transform: translate(22px, -18px) scale(1);
            opacity: 0;
          }
        }

        @media (min-width: 640px) {
          .animate-flap-left { animation: flap-left 3s ease-in-out infinite; }
          .animate-flap-right { animation: flap-right 3s ease-in-out infinite; }
        }

        @media (max-width: 639px) {
          .animate-flap-left { 
            transform: translateY(-50%) translateX(-2.5rem);
            animation: flap-left 3s ease-in-out infinite;
          }
          .animate-flap-right { 
            transform: translateY(-50%) translateX(2.5rem);
            animation: flap-right 3s ease-in-out infinite;
          }
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .animate-heartbeat-realistic {
          animation: heartbeat-realistic 4s ease-in-out infinite;
        }

        .animate-shine-move {
          animation: shine-move 3s ease-in-out infinite;
        }

        .animate-sparkle-shine {
          animation: sparkle-shine 2s ease-in-out infinite;
        }

        .animate-sparkle-out-1 {
          animation: sparkle-out-1 2s ease-out infinite;
        }

        .animate-sparkle-out-2 {
          animation: sparkle-out-2 2.3s ease-out infinite 0.4s;
        }

        .animate-sparkle-out-3 {
          animation: sparkle-out-3 2.1s ease-out infinite 0.8s;
        }
      `}</style>
    </div>
  );
};

export default WingedHeart;