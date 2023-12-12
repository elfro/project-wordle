import React from 'react';
import Guess from '../Guess';
import { GameContext } from '../GameProvider';

function GuessesResults() {
  const { guesses } = React.useContext(GameContext);
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
    </div>
  );
}

export default GuessesResults;
