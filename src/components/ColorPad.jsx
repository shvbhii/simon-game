import React from 'react';

function ColorPad({ color, isActive, onClick }) {
  return (
    <div
      className={`color-pad ${color} ${isActive ? 'active' : ''}`}
      onClick={onClick}
    ></div>
  );
}

export default ColorPad;