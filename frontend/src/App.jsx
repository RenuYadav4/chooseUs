import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
// import Validate from "./pages/Validate"
import Quizz from "./pages/Quizz"
import Letter from "./pages/Letter"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/our-special-date" element={<Validate />} /> */}
        <Route path="/i-must-know" element={<Quizz />} />
        <Route path="/for-you" element={<Letter />} />
      </Routes>
    </>
  )
}

export default App
