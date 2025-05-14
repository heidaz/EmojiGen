import React, { useState } from 'react';
import '../styles/EmojiGenerator.css';

export interface Emoji {
  id: number;
  face: string;
  name: string;
  category?: string;
}

export const EMOJI_LIST: Emoji[] = [
  { id: 1, face: 'ヽ(＾Д＾)ﾉ', name: 'Excited', category: 'Happy' },
  { id: 2, face: '(╯°□°）╯︵ ┻━┻', name: 'Table Flip', category: 'Angry' },
  { id: 3, face: '(¬‿¬)', name: 'Smirk', category: 'Mischievous' },
  { id: 4, face: '(≧◡≦)', name: 'Happy', category: 'Happy' },
  { id: 5, face: '(°▽°)', name: 'Joyful', category: 'Happy' },
  { id: 6, face: '( ︶︿︶)', name: 'Upset', category: 'Sad' },
  { id: 7, face: '(⊙_⊙)', name: 'Surprised', category: 'Surprised' },
  { id: 8, face: '(¬_¬)', name: 'Suspicious', category: 'Skeptical' },
  { id: 9, face: '(◕‿◕)', name: 'Cute', category: 'Happy' },
  { id: 10, face: '(；￣Д￣)', name: 'Worried', category: 'Worried' },
  { id: 11, face: '(￣ω￣)', name: 'Indifferent', category: 'Neutral' },
  { id: 12, face: 'ಠ_ಠ', name: 'Disapproval', category: 'Skeptical' },
  { id: 13, face: '(っ˘̩╭╮˘̩)っ', name: 'Hug Me', category: 'Sad' },
  { id: 14, face: '(づ｡◕‿‿◕｡)づ', name: 'Sending Love', category: 'Happy' },
  { id: 15, face: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', name: 'Sparkles', category: 'Happy' },
  { id: 16, face: '(╥﹏╥)', name: 'Crying', category: 'Sad' },
  { id: 17, face: "(ง'-')ง", name: 'Fighting', category: 'Angry' },
  { id: 18, face: '(ᵔᴥᵔ)', name: 'Dog', category: 'Animals' },
  { id: 19, face: '(=^･ω･^=)', name: 'Cat', category: 'Animals' },
  { id: 20, face: '(•ω•)', name: 'Curious', category: 'Surprised' }
];

const EmojiGenerator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(EMOJI_LIST.map(emoji => emoji.category)))];
  
  const filteredEmoji = EMOJI_LIST.filter(emoji => {
    const matchesSearch = emoji.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || emoji.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopy = (emojiId: number, emojiText: string) => {
    navigator.clipboard.writeText(emojiText)
      .then(() => {
        setCopiedId(emojiId);
        setTimeout(() => setCopiedId(null), 1500);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="emoji-container">
      <div className="search-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by emotion..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="category-filter">
          <label htmlFor="category-select">Category:</label>
          <select 
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="emoji-grid">
        {filteredEmoji.length > 0 ? (
          filteredEmoji.map(emoji => (
            <div 
              key={emoji.id}
              className="emoji-card"
              onClick={() => handleCopy(emoji.id, emoji.face)}
            >
              <div className="emoji-face">{emoji.face}</div>
              <div className="emoji-name">{emoji.name}</div>
              {emoji.category && (
                <div className="emoji-category">{emoji.category}</div>
              )}
              {copiedId === emoji.id && (
                <div className="copied-notification">Copied!</div>
              )}
            </div>
          ))
        ) : (
          <div className="no-results">No emoji found. Try a different search term.</div>
        )}
      </div>
    </div>
  );
};

export default EmojiGenerator; 