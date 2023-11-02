import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
    const MAX_LENGTH = 5;
    const validatedResponse = checkGuess(guess.item.label, answer);

    const columns = range(0, MAX_LENGTH).map(index => {
        const data = validatedResponse && validatedResponse[index] ? validatedResponse[index] : { letter: '' };
        data.id = crypto.randomUUID();

        return data;
    });

    return (
        <p key={guess.id} className="guess">
            {columns.map(column => (
                <span key={column.id} className={`cell ${column.status}`}> {column.letter}</span>
            ))}
        </p>);
}

export default Guess;
