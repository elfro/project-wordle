import React from 'react';
import { GameContext } from '../GameProvider';
import { flatArray } from '../../utils';

const keyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A'],
  ['S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];
function Keyboard() {
  const { guesses } = React.useContext(GameContext);
  const letters = getLetters(guesses);

  return (
    // ToDo: fix layout, wrap in div
    <>
      {keyboard.map((row, index) => (
        <div key={`row-${index}`} className="keyboard-row">
          {row.map((button) => {
            const buttonClass =
              letters.find((item) => item.letter === button)?.status ||
              'unused';
            return (
              <span
                key={button}
                id={button}
                className={`keyboard-button ${buttonClass}`}
              >
                {button}
              </span>
            );
          })}
        </div>
      ))}
    </>
  );
}

function getLetters(guesses) {
  const filteredLetters = flatArray(guesses).filter(
    ({ letter }) => letter !== ''
  );

  return [
    ...new Map(filteredLetters.map((item) => [item.letter, item])).values(),
  ];
}
export default Keyboard;
