import React from 'react';

import GuessInput from '../GuessInput';
import GuessesResults from '../GuessesList';
import Keyboard from '../KeyboardButton';
import BannerHappy from '../BannerHappy';
import BannerSad from '../BannerSad';
import { GameContext } from '../GameProvider';
import { GAME_STATUSES } from '../../constants';

function Game() {
  const { answer, status, attemptNumber } = React.useContext(GameContext);
  return (
    <>
      <GuessesResults></GuessesResults>
      <GuessInput></GuessInput>
      <Keyboard></Keyboard>
      {status === GAME_STATUSES.WON && <BannerHappy count={attemptNumber} />}
      {status === GAME_STATUSES.LOST && <BannerSad answer={answer} />}
    </>
  );
}

export default Game;
