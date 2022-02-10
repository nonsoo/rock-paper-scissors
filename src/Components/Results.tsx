import { FC } from "react";
import OptionResults from "./OptionResults";

interface Props {
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
  img2: string;
}

const Results: FC<Props> = ({ setGame, img, img2 }) => {
  return (
    <section className="ResultsSection">
      <div className="ResultChoise player1">
        <p className="resultChoise__player">You Picked</p>
        <OptionResults img={img} exCss="paper" />
      </div>

      <div className="gameStatus">
        <p className="gameStatus__Name">You Win</p>
        <button className="gameStatus__Btn" onClick={() => setGame(true)}>
          Play Again
        </button>
      </div>
      <div className="ResultChoise player2">
        <p className="resultChoise__player">The house picked</p>
        <OptionResults img={img2} exCss="rock" />
      </div>
    </section>
  );
};

export default Results;
