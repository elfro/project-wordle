import React from 'react';

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map((item) => {
        const className = item.status ? `cell ${item.status}` : 'cell';
        return (
          <span key={item.id} className={className}>
            {' '}
            {item.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
