import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)} 
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;
