import { FC } from "react";

interface Props {
  img: string;
  exCss?: string;
  exId?: string;
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
  setUserMoveFunc: React.Dispatch<
    React.SetStateAction<string | undefined | null>
  >;
  gameMove: () => void;
}

const Option: FC<Props> = ({
  img,
  exCss,
  setGame,
  gameMove,
  exId,
  setUserMoveFunc,
}) => {
  const execute = (): void => {
    setGame(false);
    gameMove();
    setUserMoveFunc(exId);
  };
  return (
    <>
      <img
        src={img}
        alt=""
        className={`imgClass ${exCss}`}
        onClick={() => execute()}
        id={exId}
      />
    </>
  );
};

export default Option;
