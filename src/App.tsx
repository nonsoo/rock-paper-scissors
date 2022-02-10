import { FC, useState } from "react";
import "./css/layout.css";
import "./css/header.css";
import "./css/optionComp.css";
import "./css/results.css";
import Header from "./Components/Header";
import Options from "./Components/Option";
import Results from "./Components/Results";

import Paper from "./imgs/icon-paper.svg";
import Rock from "./imgs/icon-rock.svg";
import Scissors from "./imgs/icon-scissors.svg";

const App: FC = () => {
  const [gameState, setGameState] = useState<boolean>(true);
  return (
    <div className="Game--site">
      <div className="Game">
        <Header />
        {gameState ? (
          <div className="options">
            <Options img={Paper} setGame={setGameState} />
            <Options img={Scissors} setGame={setGameState} />
            <Options img={Rock} setGame={setGameState} />
          </div>
        ) : (
          <Results img={Paper} img2={Rock} setGame={setGameState} />
        )}
      </div>
    </div>
  );
};

export default App;
