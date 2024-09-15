import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from '../components/Navbar/Navbar';
import Home from '../screens/Home/Home';
import Education from '../screens/Education/Education';
import Services from '../screens/Services/Services';
import Testimonials from '../screens/Testimonials/Testimonials';
import Contact from '../screens/Contact/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Home/>
     <Education/>
     <Services/>
     <Testimonials/>
     <Contact/>
    </>
  )
}

export default App
