import React from "react";
import { useQuiz } from "../context/createContext";
import { Heart, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { playSound } from "../utils/sound";

const Letter = () => {
  const { letterData } = useQuiz();
  playSound("success");

  if (!letterData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart size={64} className="text-rose-500 mb-4" fill="currentColor" />
        </motion.div>
        <p className="text-lg text-gray-700 font-medium">Preparing something special for you... 💕</p>
      </div>
    );
  }

  const {
    nickname,
    loveLetter,
    teasing,
    futureDream,
    compatibility,
  } = letterData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: "110vh", x: `${Math.random() * 100}%` }}
            animate={{ y: "-10vh" }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <Heart 
              size={16 + Math.random() * 24} 
              className="text-pink-300 opacity-20" 
              fill="currentColor" 
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: Math.random() * 3 
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Sparkles size={12 + Math.random() * 16} className="text-yellow-400" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-2xl w-full border-4 border-pink-200 z-10"
      >
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-rose-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-pink-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-rose-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <Sparkles className="absolute -top-6 left-1/4 text-yellow-400 animate-bounce" size={24} />
        <Sparkles className="absolute -top-6 right-1/4 text-pink-400 animate-bounce" size={20} style={{ animationDelay: '0.3s' }} />

        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart size={32} className="text-rose-500 animate-pulse" fill="currentColor" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Hey {nickname} 💕
          </h1>
          <Heart size={32} className="text-rose-500 animate-pulse" fill="currentColor" />
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          <Heart size={16} className="text-pink-400" fill="currentColor" />
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl border border-pink-300 shadow-sm"
        >
          <p className="italic text-rose-700 text-center font-medium text-sm sm:text-base md:text-lg">
            "{teasing}" 😏
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 p-4 sm:p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-pink-200 shadow-sm"
        >
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            {loveLetter}
          </p>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-6 p-4 sm:p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-200 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <Star size={24} className="text-purple-500 flex-shrink-0 mt-1" fill="currentColor" />
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              {futureDream}
            </p>
          </div>
        </motion.div>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          <Sparkles size={16} className="text-yellow-400" />
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl p-1 shadow-lg">
            <div className="bg-white rounded-xl p-4 sm:p-5 text-center">
              <p className="text-gray-600 text-sm font-medium mb-2">Our Compatibility</p>
              <div className="flex items-center justify-center gap-2">
                <Heart size={28} className="text-rose-500" fill="currentColor" />
                <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  {compatibility}%
                </p>
                <Heart size={28} className="text-rose-500" fill="currentColor" />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Perfect match! 💖</p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3 mt-8 text-2xl sm:text-3xl">
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>💕</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}>✨</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}>💖</motion.span>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">Forever yours,</p>
          <p className="text-base sm:text-lg font-bold text-rose-600">Your Girl 💋</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Letter;