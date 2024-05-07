import React from 'react'

const AboutCard = ({icon, title, content}) => {
  return (
    <li>
        <img src={icon} />
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </li>
  )
}

export default AboutCard