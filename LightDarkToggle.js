import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const LightDarkToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="absolute top-4 right-4 p-2">
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
};

export default LightDarkToggle;
