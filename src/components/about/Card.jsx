import React from 'react'

const Card = ({title, content, icon}) => {
  return (
    <div>
        <img src={icon} alt="icon placeholder" />
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Card