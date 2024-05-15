import style from "./careershero.module.css"

const CareersHero = () => {
  return (
    <section className={style.hero}>
        <div className={`container ${style.hero__container}`}>
            <h1>Be part of our mission</h1>
            <p>We invite you to join us in a journey of innovation and creativity. Our mission is to revolutionize the way people edit and transform visuals using the power of AI technology.</p>
            <a href='#positions'>View Openings</a>
        </div>
  </section>
  )
}

export default CareersHero