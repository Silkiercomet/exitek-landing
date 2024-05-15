import style from "./offercard.module.css"

const OfferCard = ({icon, title, content}) => {
  return (
    <li className={style.container}>
        <img src={icon} />
        <div className={style.container__text}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </li>
  )
}

export default OfferCard