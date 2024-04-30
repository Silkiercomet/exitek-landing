import style from "./utils.module.css";
import Img1 from "../../assets/main/section1-top.webp";
import Img2 from "../../assets/main/section1-bottom.webp";
const Image1 = () => {
  return (
    <figure className={style.relative}>
      <img
        className={style.main}
        src={Img1}
        alt="placeholder image to showcase the magic retouch feature"
      />
      <img
        className={`${style.absolute} ${style.bottom} ${style.center}`}
        src={Img2}
        alt="placeholder image to showcase the magic retouch menu"
      />
    </figure>
  );
};

export default Image1;
