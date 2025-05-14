import React, { useState } from 'react';
import '../styles/CustomEmojiCreator.css';

interface EmojiPart {
  id: string;
  options: string[];
}

const CustomEmojiCreator: React.FC = () => {
  const [customEmoji, setCustomEmoji] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const emojiParts: EmojiPart[] = [
    { id: 'leftBracket', options: ['(', '༼', '〈', '【', '⸜', '｡', ''] },
    { id: 'leftEye', options: ['◕', 'ಠ', '￣', '＾', '°', '>','•', '◠', '・', 'T', '^', '¬', 'ʘ', '-', '≧', '⊙', ';','＞', '︣'] },
    { id: 'nose', options: ['ω', '_', '‿', '▽', 'Д', '□', '◡', '▿', '౪', 'o', '∀', 'ェ', '◕', '.', ''] },
    { id: 'rightEye', options: ['◕', 'ಠ', '￣', '＾', '°', '<','•', '◠', '・', 'T', '^', '¬', 'ʘ', '-', '≦', '⊙', ';','＜', '︣'] },
    { id: 'rightBracket', options: [')', '༽', '〉', '】', '⸝', '｡', ''] }
  ];

  const [selectedParts, setSelectedParts] = useState<Record<string, string>>({
    leftBracket: '(',
    leftEye: '◕',
    nose: '‿',
    rightEye: '◕',
    rightBracket: ')'
  });

  const updatePart = (partId: string, value: string) => {
    const newParts = { ...selectedParts, [partId]: value };
    setSelectedParts(newParts);
    
    const newEmoji = 
      newParts.leftBracket + 
      newParts.leftEye + 
      newParts.nose + 
      newParts.rightEye + 
      newParts.rightBracket;
    
    setCustomEmoji(newEmoji);
  };

  const handleCopy = () => {
    if (!customEmoji) return;
    
    navigator.clipboard.writeText(customEmoji)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="custom-emoji-container">
      <h2>Create Your Own Emoji</h2>
      
      <div className="emoji-preview" onClick={handleCopy}>
        {customEmoji || '(◕‿◕)'}
        {copied && <div className="copied-bubble">Copied!</div>}
      </div>
      
      <div className="emoji-parts-container">
        {emojiParts.map(part => (
          <div key={part.id} className="part-selector">
            <label>{part.id.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
            <div className="options-grid">
              {part.options.map(option => (
                <button
                  key={option}
                  className={selectedParts[part.id] === option ? 'selected' : ''}
                  onClick={() => updatePart(part.id, option)}
                >
                  {option || 'none'}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomEmojiCreator; 