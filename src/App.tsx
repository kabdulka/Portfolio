import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { BrowserRouter, BrowserRouterProps, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects'
import Experience from "./pages/Experience/Experience"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Navbar2 from './components/Navbar/Navbar2';

 

function App() {

  const [count, setCount] = useState(0)

  // const num: number = 2;

  return (

    <BrowserRouter>

      <Navbar />
      {/* <Navbar2 /> */}
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/experience" element={<Experience />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
      
  )

}

export default App
