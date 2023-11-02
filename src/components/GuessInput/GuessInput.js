import React from 'react';

function GuessInput({ handlerNewGuess }) {
    const MIN_LENGTH = 1;
    const MAX_LENGTH = 5;

    const [word, setWord] = React.useState('');

    return (
        <form className="guess-input-wrapper"
              onSubmit={event => {
                  event.preventDefault();
                  handlerNewGuess(word);
                  setWord('');
              }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text"
                   minLength={MIN_LENGTH}
                   maxLength={MAX_LENGTH}
                   value={word}
                   onChange={event => {
                       setWord(event.target.value.toUpperCase());
                   }}/>
        </form>
    );
}

export default GuessInput;
