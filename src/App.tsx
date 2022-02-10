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
  const [gameStatuss, setGameStatuss] = useState<string>("");
  const [userMoves, setUserMove] = useState<string | null | undefined>(null);
  const [score, setScore] = useState<number>(0);

  type move = "Scissors" | "Paper" | "Rock";

  const possibleMoves: move[] = ["Scissors", "Paper", "Rock"];

  const gameFunc = (): void => {
    const compMove: number = Math.floor(Math.random() * possibleMoves.length);

    console.log(`This is the comps move: ${possibleMoves[compMove]}`);
    console.log(`this is the users move: ${userMoves}`);

    if (
      (userMoves === possibleMoves[0] &&
        possibleMoves[compMove] === possibleMoves[1]) ||
      (userMoves === possibleMoves[1] &&
        possibleMoves[compMove] === possibleMoves[2]) ||
      (userMoves === possibleMoves[2] &&
        possibleMoves[compMove] === possibleMoves[0])
    ) {
      setGameStatuss("you win");
      setScore((prev) => prev + 1);
    } else if (userMoves === possibleMoves[compMove]) {
      setGameStatuss("its a tie");
    } else {
      setGameStatuss("you lose");
    }
  };
  return (
    <div className="Game--site">
      <div className="Game">
        <Header currScore={score} />
        {gameState ? (
          <div className="options">
            <Options
              img={Rock}
              setGame={setGameState}
              gameMove={gameFunc}
              exId="Rock"
              setUserMoveFunc={setUserMove}
            />
            <Options
              img={Scissors}
              setGame={setGameState}
              gameMove={gameFunc}
              exId="Scissors"
              setUserMoveFunc={setUserMove}
            />
            <Options
              img={Paper}
              setGame={setGameState}
              gameMove={gameFunc}
              exId="Paper"
              setUserMoveFunc={setUserMove}
            />
          </div>
        ) : (
          <Results
            img={Paper}
            img2={Rock}
            setGame={setGameState}
            gameStatus={gameStatuss}
          />
        )}
      </div>
    </div>
  );
};

export default App;
