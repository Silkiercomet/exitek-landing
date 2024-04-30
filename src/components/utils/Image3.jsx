import Img1 from "../../assets/main/section3-top.webp";
import Img2 from "../../assets/main/section3-bottom.webp";
import style from "./utils.module.css";

const Image3 = () => {
  return (
    <figure className={style.relative}>
      <img
        className={style.main}
        src={Img1}
        alt="placeholder image to showcase the Magic Protection feature"
      />
      <img
        className={`${style.absolute} ${style.top} ${style.center} ${style.left3}`}
        src={Img2}
        alt="placeholder image to showcase the Magic Protection menu"
      />
    </figure>
  )
}

export default Image3