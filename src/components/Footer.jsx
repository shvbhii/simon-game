// src/components/Footer.jsx
import React from 'react';
import SocialLink from './SocialLink';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- CONFIGURATION ---
// Change these URLs to your own!
const GITHUB_URL = "https://github.com/shvbhii/simon-game"; // <-- CHANGE THIS
const LINKEDIN_URL = "https://www.linkedin.com/in/shvbhi/"; // <-- CHANGE THIS
// ---------------------

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <SocialLink 
          Icon={FaLinkedin} 
          href={LINKEDIN_URL} 
          text="Connect via LinkedIn" 
        />
        <SocialLink 
          Icon={FaGithub} 
          href={GITHUB_URL} 
          text="View Source on GitHub" 
        />
      </div>
      <div className="creator-credit">
        <p>Made by Shubhi Sharma</p>
      </div>
    </footer>
  );
}

export default Footer;