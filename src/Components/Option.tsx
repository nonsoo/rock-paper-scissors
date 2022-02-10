import { FC } from "react";

interface Props {
  img: string;
  exCss?: string;
  exId?: string;
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
  refs: React.MutableRefObject<HTMLImageElement | null>;
  gameMove: () => void;
}

const Option: FC<Props> = ({ img, exCss, setGame, gameMove, exId, refs }) => {
  const execute = (): void => {
    setGame(false);
    gameMove();
  };
  return (
    <>
      <img
        src={img}
        alt=""
        className={`imgClass ${exCss}`}
        onClick={() => execute()}
        id={exId}
        ref={refs}
      />
    </>
  );
};

export default Option;
