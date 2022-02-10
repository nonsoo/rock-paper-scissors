import { FC } from "react";

interface Props {
  currScore: number;
}

const Header: FC<Props> = ({ currScore }) => {
  return (
    <section className="Header">
      <p className="Header__Title">Rock Paper Scissors</p>
      <div className="Header__Score">
        <p className="Header__ScoreName">Score</p>
        <p className="Header__ScoreNum">{currScore}</p>
      </div>
    </section>
  );
};

export default Header;
