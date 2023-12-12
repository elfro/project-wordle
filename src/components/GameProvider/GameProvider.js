import React, { useMemo } from 'react';
import { useGameState } from './useGameState';

export const GameContext = React.createContext();
function GameProvider({ children }) {
  const state = useGameState();
  console.log(state);
  return (
    <GameContext.Provider
      value={useMemo(
        () => ({
          ...state,
        }),
        [state]
      )}
    >
      {children}
    </GameContext.Provider>
  );
}

export default React.memo(GameProvider);
