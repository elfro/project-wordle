import React from 'react';

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map((item) => (
        <span key={item.id} className={`cell ${item.status}`}>
          {' '}
          {item.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
