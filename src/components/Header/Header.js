import React from 'react';
import { RefreshCw } from 'react-feather';
import { GameContext } from '../GameProvider';

function Header() {
  const { resetGame } = React.useContext(GameContext);
  return (
    <header>
      <h1>Word Game</h1>
      <div className="side">
        <button
          aria-label="Reset game"
          title="Reset game"
          onClick={() => resetGame()}
        >
          <RefreshCw size={26}></RefreshCw>
        </button>
      </div>
    </header>
  );
}

export default Header;
