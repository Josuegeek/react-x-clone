import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/HomePage";
import Profile from "./pages/ProfllePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
