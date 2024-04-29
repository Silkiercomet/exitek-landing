import React from 'react'
import style from "./hero.module.css"
import image from "../../assets/homepage-laptop-bg.webp"
const Hero = () => {
  return (
    <section className={style.hero}>
        <div className={style.hero__overlay_t}></div>
        <div className={style.hero__text}>
            <h1>Empowering creativity and beauty with innovative AI product</h1>
            <p>Exitek stands as a software company that delivers cutting-edge beauty and creative solutions to a worldwide clientele encompassing global consumers.</p>
        </div>
        <img className={style.hero__img} src={image} alt="laptop image" />
    </section>
  )
}

export default Hero