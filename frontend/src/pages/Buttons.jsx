import React, { useState } from 'react';
import './Buttons.css';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Buttons = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);

  const toggleLetter = (letter) => {
    setSelectedLetters(prev =>
      prev.includes(letter)
        ? prev.filter(l => l !== letter)
        : [...prev, letter]
    );
  };

  const numButtons = selectedLetters.length;

  // 🔢 Decide number of rows you want (between 1 and 4)
  let rows = 1;
  if (numButtons > 6) rows = 2;
  if (numButtons > 12) rows = 3;
  if (numButtons > 18) rows = 4;

  // 🔠 Calculate columns per row, rounded up
  const columns = Math.ceil(numButtons / rows);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="dropdown">
          <button className="dropbtn">abc</button>
          <div className="dropdown-content">
            <div className="column">
              {alphabet.slice(0, 13).map(letter => (
                <label key={letter}>
                  <input
                    type="checkbox"
                    checked={selectedLetters.includes(letter)}
                    onChange={() => toggleLetter(letter)}
                  />
                  {letter}
                </label>
              ))}
            </div>
            <div className="column">
              {alphabet.slice(13).map(letter => (
                <label key={letter}>
                  <input
                    type="checkbox"
                    checked={selectedLetters.includes(letter)}
                    onChange={() => toggleLetter(letter)}
                  />
                  {letter}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="nav-fixed-letters">
          <span>A</span>
          <span>B</span>
        </div>
      </nav>

      {/* Bottom 40vh area: always fully filled, balanced rows/columns */}
      <div
        className="letter-buttons-area"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${columns}, 1fr)`
        }}
      >
        {selectedLetters.map(letter => (
          <button key={letter} className="letter-btn">
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;



