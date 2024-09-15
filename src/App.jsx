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
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="0, 255, 255"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.5}
      />
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
