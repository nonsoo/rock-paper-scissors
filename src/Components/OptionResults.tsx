import { FC } from "react";
interface Props {
  img: string;
  exCss?: string;
}

const OptionResults: FC<Props> = ({ img, exCss }) => {
  return (
    <>
      <img src={img} alt="" className={`imgClass ${exCss}`} />
    </>
  );
};

export default OptionResults;
