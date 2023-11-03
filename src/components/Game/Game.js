import React from 'react';

import GuessInput from '../GuessInput';
import GuessesResults from '../GuessesList';
import BannerHappy from '../BannerHappy';
import BannerSad from '../BannerSad';
import { checkGuess } from '../../game-helpers';
import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import {
  GAME_STATUSES,
  MAX_WORD_LENGTH,
  NUM_OF_GUESSES_ALLOWED,
} from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
function generateEmptyWordsGrid() {
  return range(0, NUM_OF_GUESSES_ALLOWED).map(() =>
    range(0, MAX_WORD_LENGTH).map(() => ({
      id: crypto.randomUUID(),
      letter: '',
    }))
  );
}

console.info({ answer });

function Game() {
  const initialState = generateEmptyWordsGrid();
  const [guesses, setGuesses] = React.useState(initialState);
  const [attemptNumber, setAttemptNumber] = React.useState(0);

  const [gameStatus, setGameStatus] = React.useState(GAME_STATUSES.PLAYING);

  const handleGuessInput = (text) => {
    if (gameStatus !== GAME_STATUSES.PLAYING) {
      return;
    }

    const attempt = attemptNumber + 1;
    setAttemptNumber(attempt);

    if (text === answer) {
      setGameStatus(GAME_STATUSES.WON);
    } else if (attempt >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUSES.LOST);
    }

    const checkedGuess = checkGuess(text, answer);

    const newList = [...guesses];
    newList[attemptNumber] = newList[attemptNumber].map((current, index) => ({
      ...current,
      ...checkedGuess[index],
    }));

    setGuesses(newList);
  };

  return (
    <>
      <GuessesResults guesses={guesses}></GuessesResults>
      <GuessInput onSubmit={handleGuessInput}></GuessInput>
      {gameStatus === GAME_STATUSES.WON && (
        <BannerHappy count={attemptNumber} />
      )}
      {gameStatus === GAME_STATUSES.LOST && <BannerSad answer={answer} />}
    </>
  );
}

export default Game;
