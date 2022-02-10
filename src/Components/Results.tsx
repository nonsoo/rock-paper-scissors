import { FC } from "react";
import OptionResults from "./OptionResults";

interface Props {
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
}

const Results: FC<Props> = ({ setGame, img }) => {
  return (
    <section className="ResultsSection">
      <div className="ResultChoise">
        <p className="resultChoise__player">You Picked</p>
        <OptionResults img={img} />
      </div>

      <div className="gameStatus">
        <p className="gameStatus__Name">You Win</p>
        <button className="gameStatus__Btn" onClick={() => setGame(true)}>
          Play Again
        </button>
      </div>
      <div className="ResultChoise">
        <p className="resultChoise__player">The house picked</p>
        <OptionResults img={img} />
      </div>
    </section>
  );
};

export default Results;
