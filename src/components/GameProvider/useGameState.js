import { useState } from 'react';
import { range, sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import {
  GAME_STATUSES,
  MAX_WORD_LENGTH,
  NUM_OF_GUESSES_ALLOWED,
} from '../../constants';

function generateEmptyWordsGrid() {
  return range(0, NUM_OF_GUESSES_ALLOWED).map(() =>
    range(0, MAX_WORD_LENGTH).map(() => ({
      id: crypto.randomUUID(),
      letter: '',
    }))
  );
}

const emptyWordsGrid = generateEmptyWordsGrid();

const makeInitialState = () => ({
  answer: sample(WORDS),
  guesses: emptyWordsGrid,
  status: GAME_STATUSES.PLAYING,
  attemptNumber: 0,
});

const makeActions = (set) => ({
  resetGame: () => set(makeInitialState()),
  handleGuessInput: (text) =>
    set((prev) => {
      if (prev.status !== GAME_STATUSES.PLAYING) {
        return prev;
      }

      const attempt = prev.attemptNumber + 1;
      let nextGameStatus = prev.status;
      if (text === prev.answer) {
        nextGameStatus = GAME_STATUSES.WON;
      } else if (attempt >= NUM_OF_GUESSES_ALLOWED) {
        nextGameStatus = GAME_STATUSES.LOST;
      }

      const checkedGuess = checkGuess(text, prev.answer);

      const newList = [...prev.guesses];
      newList[prev.attemptNumber] = newList[prev.attemptNumber].map(
        (current, index) => ({
          ...current,
          ...checkedGuess[index],
        })
      );

      return {
        ...prev,
        guesses: newList,
        status: nextGameStatus,
        attemptNumber: attempt,
      };
    }),
});

export const useGameState = () => {
  const [state, setState] = useState(makeInitialState);
  const [actions] = useState(() => makeActions(setState));

  return {
    ...state,
    ...actions,
  };
};
