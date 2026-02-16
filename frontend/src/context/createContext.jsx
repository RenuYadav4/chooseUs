import { createContext, useContext, useEffect, useState } from "react";

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
const [letterData, setLetterData] = useState(() => {
    const stored = localStorage.getItem("letterData");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (letterData) {
      localStorage.setItem("letterData", JSON.stringify(letterData));
    }
  }, [letterData]);

  return (
    <QuizContext.Provider value={{ letterData, setLetterData }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
