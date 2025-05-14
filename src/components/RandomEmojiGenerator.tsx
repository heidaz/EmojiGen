import React, { useState } from 'react';
import '../styles/RandomEmojiGenerator.css';

// Import the emoji list from EmojiGenerator
import { EMOJI_LIST, Emoji } from './EmojiGenerator';

const RandomEmojiGenerator: React.FC = () => {
  const [randomEmoji, setRandomEmoji] = useState<Emoji>(EMOJI_LIST[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateRandomEmoji = () => {
    setIsAnimating(true);
    
    // Simulate "spinning" through multiple emoji before landing on one
    let counter = 0;
    const totalSpins = 10;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * EMOJI_LIST.length);
      setRandomEmoji(EMOJI_LIST[randomIndex]);
      counter++;
      
      if (counter >= totalSpins) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 100);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(randomEmoji.face)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="random-emoji-container">
      <h2>Random Emoji Generator</h2>
      <div className="random-emoji-box">
        <div 
          className={`random-emoji ${isAnimating ? 'animating' : ''}`}
          onClick={handleCopy}
        >
          {randomEmoji.face}
          <div className="emoji-name-label">{randomEmoji.name}</div>
          {copied && <div className="copied-bubble">Copied!</div>}
        </div>
      </div>
      <button 
        className="generate-button" 
        onClick={generateRandomEmoji}
        disabled={isAnimating}
      >
        Generate Random Emoji
      </button>
    </div>
  );
};

export default RandomEmojiGenerator; 