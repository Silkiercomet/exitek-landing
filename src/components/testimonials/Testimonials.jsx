import React from 'react'
import style from "./testi.module.css"
import downloads from "../../assets/main/downloads.svg"
import users from "../../assets/main/users.svg"
import star from "../../assets/main/star.svg"
import photo from "../../assets/main/photo.svg"
import Testimonial from './Testimonial'

const content = [
    {
    title: "32 Million +",
    img: downloads,
    sub: "Downloads worldwide"
    },
    {
    title: "5 Million +",
    img: users,
    sub: "Monthly active users"
    },
    {
    title: "4.8",
    img: star,
    sub: "Downloads worldwide"
    },
    {
    title: "2 Million +",
    img: photo,
    sub: "Photos processed daily"
    }
]
const Testimonials = () => {
  return (
    <ul className={style.testimonials}>
        {
            content.map((e) => <Testimonial title={e.title} img={e.img} sub={e.sub} />)
        }
    </ul>
  )
}

export default Testimonials