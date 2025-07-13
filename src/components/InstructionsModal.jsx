// src/components/InstructionsModal.jsx
import React from 'react';
import { FiX } from 'react-icons/fi'; // Import the 'X' icon

function InstructionsModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FiX size={24} />
        </button>
        <h2>How to Play Simon</h2>
        <ol className="instructions-list">
          <li>Press the <strong>Start</strong> button to begin the game.</li>
          <li>Simon will light up the first color in the sequence.</li>
          <li>Your turn! Click the same color pad that just lit up.</li>
          <li>Simon will repeat the sequence and add one new color.</li>
          <li>Repeat the longer sequence back to Simon.</li>
          <li>Keep playing as long as you can remember the sequence! If you make a mistake, it's game over.</li>
        </ol>
      </div>
    </div>
  );
}

export default InstructionsModal;