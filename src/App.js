import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
// import useLocalStorage from 'use-local-storage'
// import { Divider } from '@mui/material';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
                <Navbar theme={theme} switchTheme={switchTheme} />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/portfolio' exact element={<Projects />} />
          <Route path='/resume' exact element={<Resume />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
    </div>

  );
}

export default App;