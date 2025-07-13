// src/App.jsx
import { useState, useEffect } from 'react';
import ColorPad from './components/ColorPad';
import InstructionsModal from './components/InstructionsModal';
import Footer from './components/Footer'; // Import the new Footer
import { FiHelpCircle } from 'react-icons/fi';
import './main.css';

const colors = ['green', 'red', 'yellow', 'blue'];

function App() {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [activePad, setActivePad] = useState('');
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setScore(0);
    setGameState('watching');
  };

  // All the useEffect hooks for game logic remain the same...
  useEffect(() => {
    if (gameState === 'watching') {
      const nextColor = colors[Math.floor(Math.random() * 4)];
      const newSequence = [...sequence, nextColor];
      setSequence(newSequence);
      setPlayerSequence([]);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'watching' && sequence.length > 0) {
      let i = 0;
      const interval = setInterval(() => {
        setActivePad(sequence[i]);
        setTimeout(() => setActivePad(''), 300);
        i++;
        if (i >= sequence.length) {
          clearInterval(interval);
          setGameState('playing');
        }
      }, 600);
    }
  }, [sequence, gameState]);

  useEffect(() => {
    if (gameState === 'playing' && playerSequence.length > 0) {
      const lastPlayerColor = playerSequence[playerSequence.length - 1];
      const correspondingSequenceColor = sequence[playerSequence.length - 1];

      if (lastPlayerColor !== correspondingSequenceColor) {
        setGameState('gameover');
        return;
      }

      if (playerSequence.length === sequence.length) {
        setScore(sequence.length);
        setGameState('watching');
        setTimeout(() => {}, 1000);
      }
    }
  }, [playerSequence, sequence, gameState]);

  const handlePadClick = (color) => {
    if (gameState !== 'playing') return;
    setPlayerSequence([...playerSequence, color]);
  };

  return (
    <div className="app-container">
      {showInstructions && <InstructionsModal onClose={() => setShowInstructions(false)} />}
      
      <div className="game-board">
        {/* ... Game board JSX remains the same ... */}
        <div className="center-circle">
          {gameState === 'start' && <button onClick={startGame}>Start</button>}
          {gameState === 'watching' && <p>Watch</p>}
          {gameState === 'playing' && <p>Your Turn</p>}
          {gameState === 'gameover' && (
            <div>
              <p>Game Over</p>
              <p className="final-score">Score: {score}</p>
              <button onClick={startGame}>Retry</button>
            </div>
          )}
        </div>
        {colors.map((color) => (
          <ColorPad
            key={color}
            color={color}
            isActive={activePad === color}
            onClick={() => handlePadClick(color)}
          />
        ))}
      </div>
      
      <button className="instructions-button" onClick={() => setShowInstructions(true)}>
        <FiHelpCircle size={24} />
        <span>How to Play</span>
      </button>

      {/* Render the new Footer component here */}
      <Footer />
    </div>
  );
}

export default App;