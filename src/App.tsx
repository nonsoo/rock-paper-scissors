import { FC, useState, useRef } from "react";
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
  const userInput = useRef<HTMLImageElement | null>(null);
  type move = "Scissors" | "Paper" | "Rock";

  const possibleMoves: move[] = ["Scissors", "Paper", "Rock"];

  console.log(userInput.current);

  const gameFunc = (): void => {
    const compMove: number = Math.floor(Math.random() * possibleMoves.length);

    console.log(compMove);
  };
  return (
    <div className="Game--site">
      <div className="Game">
        <Header />
        {gameState ? (
          <div className="options">
            <Options
              img={Rock}
              setGame={setGameState}
              gameMove={gameFunc}
              exId="rock"
              refs={userInput}
            />
            <Options
              img={Scissors}
              setGame={setGameState}
              gameMove={gameFunc}
              exId="scissors"
              refs={userInput}
            />
            <Options
              img={Paper}
              setGame={setGameState}
              gameMove={gameFunc}
              exId="paper"
              refs={userInput}
            />
          </div>
        ) : (
          <Results
            img={Paper}
            img2={Rock}
            setGame={setGameState}
            gameStatus="you win"
          />
        )}
      </div>
    </div>
  );
};

export default App;
