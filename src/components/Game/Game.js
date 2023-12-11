import React from 'react';

import GuessInput from '../GuessInput';
import GuessesResults from '../GuessesList';
import Keyboard from '../KeyboardButton';

function Game() {
  return (
    <>
      <GuessesResults></GuessesResults>
      <GuessInput></GuessInput>
      <Keyboard></Keyboard>
    </>
  );
}

export default Game;
