import React from 'react'
import { Heart } from 'lucide-react'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        
        {/* Heart Pulse */}
        <div className="relative">
          <Heart
            size={64}
            className="text-rose-500 animate-heartbeat"
            fill="currentColor"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-rose-400/40 blur-xl animate-pulse" />
        </div>

        {/* Text */}
        <p className="text-white font-serif text-sm tracking-wide opacity-90 animate-soft-fade">
          Unlocking something special… 💖
        </p>
      </div>
    </div>
  )
}

export default Loader
