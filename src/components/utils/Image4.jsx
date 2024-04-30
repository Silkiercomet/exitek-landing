import Img1 from "../../assets/main/section4-top.webp";
import Img2 from "../../assets/main/section4-bottom.webp";
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
        className={`${style.absolute} ${style.last}`}
        src={Img2}
        alt="placeholder image to showcase the Magic Protection menu"
      />
    </figure>
  )
}

export default Image3