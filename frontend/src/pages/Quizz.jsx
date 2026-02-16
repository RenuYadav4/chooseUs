// Quiz.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { allQuestionSets } from "../data/allQuestionSets";
import QuestionPopup from "../components/QuestionPopup";
import WaitScreen from "../components/WaitScreen";
import { Heart, Sparkles } from "lucide-react";
import { useQuiz } from "../context/createContext";
import { generateLetter } from "../services/service";


export default function Quiz() {
  const navigate = useNavigate();

  const [setIndex,setSetIndex] = useState(
    Number(localStorage.getItem("currentSet")) || 0
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const safeSetIndex =
    setIndex >= allQuestionSets.length ? 0 : setIndex;

  const currentSet = allQuestionSets[safeSetIndex];
  const currentQuestion = currentSet?.[questionIndex];

  const introTexts = [
    "Let me know you better...",
    "Answer from your heart ",
    "Ready? Let's begin! "
  ];
  const [currentIntroText, setCurrentIntroText] = useState(0);

  useEffect(() => {
  const storedSet = Number(localStorage.getItem("currentSet")) || 0;

  const nextSet = (storedSet + 1) % allQuestionSets.length;

  localStorage.setItem("currentSet", nextSet);

  setSetIndex(nextSet);
  setQuestionIndex(0);
  setAnswers([]);
}, []);



  useEffect(() => {
    if (showIntro) {
      const textInterval = setInterval(() => {
        setCurrentIntroText(prev => {
          if (prev < introTexts.length - 1) {
            return prev + 1;
          } else {
            clearInterval(textInterval);
            setTimeout(() => setShowIntro(false), 1500);
            return prev;
          }
        });
      }, 2000);

      return () => clearInterval(textInterval);
    }
  }, [showIntro]);

  const handleSelect = (answer) => {
    setAnswers(prev => [
      ...prev,
      {
        question: currentQuestion.question,
        answer
      }
    ]);

    if (questionIndex < currentSet.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setWaiting(true);
    }
  };

  const { setLetterData } = useQuiz();

  const handleFinish = async () => {
    try {
      const data = await generateLetter(answers);
      console.log(data);
      setLetterData(data);
    const nextSet = (setIndex + 1) % allQuestionSets.length;


      localStorage.setItem("currentSet", nextSet);
        setSetIndex(nextSet);
        localStorage.setItem("letterData", JSON.stringify(data));

      navigate("/for-you");
    } catch (error) {
      console.error(error);
      alert("Something went wrong Please try again.");
    }
  };


  if (waiting) {
    return <WaitScreen onFinish={handleFinish} />;
  }

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ y: "100vh", x: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{ y: "-10vh", opacity: [0, 0.5, 0] }}
              transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
            >
              <Heart size={20 + Math.random() * 30} className="text-pink-300" fill="currentColor" />
            </motion.div>
          ))}

          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <Sparkles size={16 + Math.random() * 20} className="text-yellow-300" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            key={currentIntroText}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex justify-center"
            >
              <Heart size={80} className="text-rose-500 drop-shadow-lg" fill="currentColor" />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-rose-500 via-pink-300 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
              {introTexts[currentIntroText]}
            </h1>

            {/* Progress indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {introTexts.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentIntroText ? 'bg-rose-500' : 'bg-rose-200'}`}
                  animate={i === currentIntroText ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              ))}
            </div>

            {/* Emoji decoration */}
            <motion.div
              className="flex justify-center gap-4 text-4xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>💖</span>
              <span>✨</span>
              <span>💕</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">

      <div className="fixed top-0 left-0 right-0 z-40">
        <div className="h-2 bg-pink-200">
          <motion.div
            className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${((questionIndex + 1) / currentSet.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="bg-white/80 backdrop-blur-sm py-3 px-6 text-center">
          <p className="text-sm font-semibold text-gray-700">
            Question {questionIndex + 1} of {currentSet.length}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: "100vh", x: `${Math.random() * 100}%` }}
            animate={{ y: "-10vh" }}
            transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
          >
            <Sparkles size={12 + Math.random() * 16} className="text-pink-300 opacity-40" />
          </motion.div>
        ))}
      </div>

      <QuestionPopup
        data={currentQuestion}
        onSelect={handleSelect}
      />
    </div>
  );
}