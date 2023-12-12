import React from 'react';
import { GameContext } from '../GameProvider';
import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../../constants';

function GuessInput() {
  const emptyString = '';
  const [word, setWord] = React.useState(emptyString);
  const { handleGuessInput } = React.useContext(GameContext);
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (word === emptyString) {
          return;
        }
        handleGuessInput(word);
        setWord(emptyString);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        ref={inputRef}
        id="guess-input"
        type="text"
        required
        pattern={`\\S{${MIN_WORD_LENGTH},${MAX_WORD_LENGTH}}`}
        title={`From ${MIN_WORD_LENGTH} to ${MAX_WORD_LENGTH} characters`}
        value={word}
        onChange={(event) => {
          setWord(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
