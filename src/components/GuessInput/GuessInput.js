import React from 'react';
import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../../constants';

function GuessInput({ onSubmit }) {
  const emptyString = '';
  const [word, setWord] = React.useState(emptyString);

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (word === emptyString) {
          return;
        }
        onSubmit(word);
        setWord(emptyString);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern={`.{${MIN_WORD_LENGTH},${MAX_WORD_LENGTH}}`}
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
