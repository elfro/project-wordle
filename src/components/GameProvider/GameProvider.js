import React from 'react';
import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import {
  GAME_STATUSES,
  MAX_WORD_LENGTH,
  NUM_OF_GUESSES_ALLOWED,
} from '../../constants';
import { checkGuess } from '../../game-helpers';
import BannerHappy from '../BannerHappy';
import BannerSad from '../BannerSad';

export const GameContext = React.createContext();
function GameProvider({ children }) {
  const initialState = generateEmptyWordsGrid();
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState(initialState);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUSES.PLAYING);
  const [attemptNumber, setAttemptNumber] = React.useState(0);

  function resetGame() {
    console.log('resetting...');
    setAnswer(sample(WORDS));
    setGameStatus(GAME_STATUSES.PLAYING);
    setGuesses(generateEmptyWordsGrid());
    setAttemptNumber(0);
  }

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

  console.log({ answer, guesses, gameStatus, attemptNumber });

  return (
    <GameContext.Provider
      value={{ answer, guesses, gameStatus, resetGame, handleGuessInput }}
    >
      {children}
      {/*ToDo: revisit banner inside the provider*/}
      {gameStatus === GAME_STATUSES.WON && (
        <BannerHappy count={attemptNumber} />
      )}
      {gameStatus === GAME_STATUSES.LOST && <BannerSad answer={answer} />}
    </GameContext.Provider>
  );
}

function generateEmptyWordsGrid() {
  return range(0, NUM_OF_GUESSES_ALLOWED).map(() =>
    range(0, MAX_WORD_LENGTH).map(() => ({
      id: crypto.randomUUID(),
      letter: '',
    }))
  );
}

export default React.memo(GameProvider);
