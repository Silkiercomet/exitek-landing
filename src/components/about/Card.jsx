import style from "./card.module.css"

const Card = ({title, content, icon}) => {
  return (
    <div className={style.card}>
        <img src={icon} alt="icon placeholder" />
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Card