import Card from '../components/about/Card'
import Banner from '../components/layouts/Banner'
import HeroAbout from '../components/layouts/HeroAbout'
import bulb from "../assets/about/bulb.svg"
import tools from "../assets/about/tools.svg"
import upArrow from "../assets/about/upArrow.svg"
import OurValuesCard from '../components/about/OurValuesCard'
import style from "./routes.module.css"

const About = () => {
  return (
    <>
    <HeroAbout />
    <div className={`container`}>
    <section className={style.aboutWrapper}>
      <h2>Who we are</h2>
      <div className={style.card__container}>
        <Card title={"Innovation Pioneers"} content={"Our team comprises a dynamic group of forward-thinking individuals who are driven by an insatiable passion for both technology and creativity."} icon={bulb} />
        <Card title={"Remarkable growth"} content={"Created in 2020, Plasma is profitable and used by millions every month. We have the foundations and ambition to build a healthy fast-growing company."} icon={tools} />
        <Card title={"Creative visionaries"} content={"Our diverse team of artists, developers, and visionaries collaborates seamlessly to create tools that empower creators worldwide."} icon={upArrow} />
      </div>
    </section>
    <section className={`container ${style.valuesContainer}`}>
      <h3>Our values</h3>
      <div>
        <OurValuesCard title={"Growth"} content={"We are goal-orientated, effective and fast. We learn from our mistakes. Personal development is just as important as the development of the entire company."} />
        <OurValuesCard title={"Self-Responsibility"} content={"We proactively take responsibility for our work and our teams. We foster trust and transparent communication."} />
        <OurValuesCard title={"Collaboration"} content={"Collaboration is at the core of our culture, fostering an environment where diverse perspectives are valued, and ideas are freely shared."} />
      </div>
    </section>
    </div>
    <Banner />
    </>
  )
}

export default About