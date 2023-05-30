import './App.css';
//Extensions
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//Pages
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import ModeButton from './Elements/ModeButtons';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Layout/Footer';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <ModeButton/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
