'use client';
import { useState, useEffect, useRef } from 'react';

/**
 * Typing effect hook with multiple texts rotation
 * @param {string[]} texts - Array of texts to type
 * @param {number} typingSpeed - Speed of typing in ms
 * @param {number} deletingSpeed - Speed of deleting in ms
 * @param {number} pauseTime - Pause time between texts in ms
 */
export function useTypingEffect(
  texts = ['Developer'],
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000
) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (texts.length === 0) return;

    const handleTyping = () => {
      const fullText = texts[currentIndex];

      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
}