import Game from '../Game';
import Header from '../Header';
import GameProvider from '../GameProvider';

function App() {
  return (
    <GameProvider>
      <div className="wrapper">
        <Header />

        <div className="game-wrapper">
          <Game />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
