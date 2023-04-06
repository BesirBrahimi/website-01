import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 import Courses from "./pages/Courses/Courses"
 import Pricing from "./pages/Pricing/Pricing"
 import Projects from "./pages/Projects/Projects"
 import SignUp from "./pages/SignUp/SignUp"
 import Slides from "./pages/Slider/Slides"
 import Navbar from "./components/Navbar/Navbar"
 import './App.css'



function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Slides" element={<Slides />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
