import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects'
import Experience from "./pages/Experience/Experience"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';


function App() {
 
  return (

    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path="/" element={<Projects />}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<Home/>} />
        <Route path="/experience" element={<Experience />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects/:prjId" element={<Projects />}/>
      </Routes>

      <Footer />
      
    </BrowserRouter>
      
  )

}

export default App
