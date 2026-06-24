import { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 800 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 60);
    return () => clearTimeout(timer);
  }, [started, displayed, text]);

  return (
    <span>
      {displayed}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypewriterText;
