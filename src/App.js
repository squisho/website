import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import useLocalStorage from 'use-local-storage'
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    console.log("switching theme");
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Navbar theme={theme} switchTheme={switchTheme} />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/portfolio' exact element={<Projects />} />
          <Route path='/research' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;