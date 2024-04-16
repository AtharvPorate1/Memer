// App.jsx
import './App.css'
import MemesApp from './MemesApp'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { CiGlobe } from "react-icons/ci";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <h1>Memer</h1>
        </div>
        <div className="navbar-right">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/atharvporate/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/AtharvPorate" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/atharvporate" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/AtharvPorate1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.atharvporate.me/" target="_blank" rel="noopener noreferrer"><CiGlobe /></a>
          </div>
        </div>
      </header>
      <div>
        <MemesApp />
      </div>
    </>
  )
}

export default App
