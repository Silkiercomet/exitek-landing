import React from 'react'
import style from "./ourvaluecard.module.css"
const OurValuesCard = ({title, content}) => {
  return (
    <div className={style.container}>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
  )
}

export default OurValuesCard