import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 500,
  className = '',
  cursor = true,
  cursorChar = '|',
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const typingTimeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, isTyping, speed, text, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && isTyping && currentIndex < text.length && (
        <span className="animate-pulse text-inherit">{cursorChar}</span>
      )}
    </span>
  );
};

export default Typewriter;