import React from 'react'
import style from "./ImageWithText.module.css"
const ImageWithText = ({children, title, text, reverse = false}) => {
  return (
    <section className={`${style.container} ${reverse ? style.reverse : ""}`}>
        {children}
        <div className={style.container__text}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </section>
  )
}

export default ImageWithText