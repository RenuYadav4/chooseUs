import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function QuestionPopup({ data, onSelect }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-200/50 via-pink-200/50 to-purple-200/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: "100vh", x: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ y: "-20vh", opacity: [0, 0.25, 0] }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <Heart
              size={14 + Math.random() * 16}
              className="text-pink-300"
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      >
        <Sparkles
          className="absolute -top-3 -right-3 text-pink-300 opacity-70"
          size={20}
        />
        <Sparkles
          className="absolute -top-3 -left-3 text-purple-300 opacity-60"
          size={18}
        />

        <div className="relative mb-7">
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart
                size={34}
                className="text-rose-500"
                fill="currentColor"
              />
            </motion.div>
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-center text-gray-800 leading-relaxed">
            {data.question}
          </h2>
        </div>

        <div className="space-y-3">
          {data.options.map((opt, i) => (
            <motion.button
              key={i}
              onClick={() => onSelect(opt)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 12px 30px rgba(236,72,153,0.25)"
              }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3.5 px-5 rounded-xl bg-white/90 text-gray-700 font-medium
                         border border-pink-200 hover:border-pink-300
                         transition-all duration-300 text-sm sm:text-base"
            >
              {opt}
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-7 text-lg opacity-80">
          <span>💕</span>
          <span>✨</span>
          <span>💖</span>
        </div>
      </motion.div>
    </div>
  );
}

export default QuestionPopup;
