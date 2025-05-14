import React, { useState, useEffect } from 'react';
import '../styles/DarkModeToggle.css';

interface DarkModeToggleProps {
  initialMode?: 'light' | 'dark';
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ initialMode = 'light' }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialMode === 'dark');

  useEffect(() => {
    // Apply dark mode class to body when component mounts or mode changes
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="dark-mode-toggle">
      <button 
        onClick={toggleDarkMode} 
        className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '☀️' : '🌙'}
        <span className="toggle-text">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </div>
  );
};

export default DarkModeToggle; 