import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessesResults from '../GuessesList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    function handleAddGuesses(guess) {
        const newItem = {
            label: guess,
            id: crypto.randomUUID(),
        };

        const newList = [...guesses, newItem];
        setGuesses(newList);
    }

    return (
        <>
            <GuessesResults guesses={guesses} answer={answer}></GuessesResults>
            <GuessInput handlerNewGuess={handleAddGuesses}></GuessInput>
        </>
    );
}

export default Game;
