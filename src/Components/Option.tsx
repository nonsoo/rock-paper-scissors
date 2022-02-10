import { FC } from "react";

interface Props {
  img: string;
  exCss?: string;
  setGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const Option: FC<Props> = ({ img, exCss, setGame }) => {
  return (
    <>
      <img
        src={img}
        alt=""
        className={`imgClass ${exCss}`}
        onClick={() => setGame(false)}
      />
    </>
  );
};

export default Option;
