import React from 'react';
import Guess from '../Guess';

function GuessesResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
    </div>
  );
}

export default GuessesResults;
