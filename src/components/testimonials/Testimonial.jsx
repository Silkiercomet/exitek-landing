import React from 'react'
import style from "./testi.module.css"

const Testimonial = ({title, img, sub}) => {
  return (
    <li className={style.testimonials__element}>
        <img src={img} alt="placeholder image" />
        <div>
            <h2>{title}</h2>
            <div>{sub}</div>
        </div>
    </li>
  )
}

export default Testimonial