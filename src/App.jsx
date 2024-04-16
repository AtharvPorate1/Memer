// App.jsx
import './App.css'
import MemesApp from './MemesApp'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { CiGlobe } from "react-icons/ci";



function App() {
  return (
    <>
      <div>
        <MemesApp />
      </div>
      <footer className="footer">
        <div className="social-icons">
          <h1>Socials</h1>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer"><CiGlobe /></a>
        </div>
        
      </footer>
    </>
  )
}

export default App
