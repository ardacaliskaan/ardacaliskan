import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.substring(0, text.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export default useTypingEffect;