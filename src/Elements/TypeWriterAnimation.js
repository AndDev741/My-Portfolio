import React, { useEffect, useState } from 'react';
import styles from './TypeWriterAnimation.module.css'

const TypewriterAnimation = () => {    

  const [words, setWords] = useState([
    'Fast learning', 
    'Front-end developer', 
    'Lover of web-development'
]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let wordTimer;

    if (isDeleting) {
       wordTimer = setTimeout(() => {
        setCurrentWord((prevWord) => prevWord.slice(0, -1));
      }, 100);

      if (currentWord === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
         wordTimer = setTimeout(() => {
        if (currentWord === word) {
          setIsDeleting(true);
        } else {
          setCurrentWord((prevWord) => prevWord + word[currentWord.length]);
        }
      }, 200);

      if (currentWord === word && !isDeleting) {
        setTypingComplete(true)
      } else {
        setTypingComplete(false)
      }

      return () => clearTimeout(wordTimer);
    }
  }, [currentWord, currentWordIndex, isDeleting, words]);

  useEffect(() => {
    const typingIndicatorTime = setInterval(() => {
        setTypingComplete((prevTypingComplete) => !prevTypingComplete);
    }, 450)

    return () => clearInterval(typingIndicatorTime)
  }, [currentWordIndex, words])



  return (
    <div className={styles.typewriter}>
        <span>{currentWord}</span>
        <div className={styles.border}>
      <span className={`border ${typingComplete ? 'fade' : ''}`}>|</span>
      </div>
    </div>
  );
};

export default TypewriterAnimation;
