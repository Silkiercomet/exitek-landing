import Img1 from "../../assets/main/section2-top.webp";
import Img2 from "../../assets/main/section2-bottom.webp";
import style from "./utils.module.css";
const Image2 = () => {
  return (
    <figure className={style.relative}>
      <img
        className={style.main}
        src={Img1}
        alt="placeholder image to showcase the body editing feature"
      />
      <img
        className={`${style.absolute} ${style.bottom} ${style.center} ${style.left}`}
        src={Img2}
        alt="placeholder image to showcase the body editing menu"
      />
    </figure>
  );
};

export default Image2;
