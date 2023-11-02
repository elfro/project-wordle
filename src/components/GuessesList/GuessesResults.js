import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessesResults({ guesses, answer }) {
    const rows = range(0, NUM_OF_GUESSES_ALLOWED).map(index => ({
        id: crypto.randomUUID(),
        item: guesses[index] || {}
    }));
    return (
        <div className="guess-results">
            {
                rows.map(guess => (
                    <Guess guess={guess} answer={answer}/>
                ))
            }
        </div>);
}

export default GuessesResults;
