import { FC } from "react";

const Header: FC = () => {
  return (
    <section className="Header">
      <p className="Header__Title">Rock Paper Scissors</p>
      <div className="Header__Score">
        <p className="Header__ScoreName">Score</p>
        <p className="Header__ScoreNum">12</p>
      </div>
    </section>
  );
};

export default Header;
