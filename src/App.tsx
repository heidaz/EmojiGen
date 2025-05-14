import React from 'react';
import EmojiGenerator from './components/EmojiGenerator';
import CustomEmojiCreator from './components/CustomEmojiCreator';
import RandomEmojiGenerator from './components/RandomEmojiGenerator';
import DarkModeToggle from './components/DarkModeToggle';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <DarkModeToggle />
      <header className="app-header">
        <h1>Emoji Generator</h1>
        <p>Generate and copy fun text-based emoji!</p>
      </header>
      <main>
        <RandomEmojiGenerator />
        <EmojiGenerator />
        <CustomEmojiCreator />
      </main>
      <footer className="app-footer">
        <p>Made with ♥ | Click on any emoji to copy to clipboard</p>
      </footer>
    </div>
  );
};

export default App; 