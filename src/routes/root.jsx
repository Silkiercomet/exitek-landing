import { useState } from "react";
//import reactLogo from '../assets/react.svg'
import Hero from "../components/layouts/Hero";
import Testimonials from "../components/testimonials/Testimonials";
import ImageWithText from "../components/layouts/ImageWithText";
import Image1 from "../components/utils/Image1";
import Image2 from "../components/utils/Image2";
import Image3 from "../components/utils/Image3";
import Image4 from "../components/utils/Image4";
import Banner from "../components/layouts/Banner";
// add an array of objecs fill with the content of the Imagewithtext component
const contentRoot = [
  {
    title: "Body Editor",
    text: "Our groundbreaking technology empowers individuals of all backgrounds to effortlessly transform their bodies to perfection. With our user-friendly interface, no prior skills or expertise are required.",
    img: <Image1 />,
  },
  {
    title: "Magic Retouch",
    text: "Our groundbreaking technology empowers individuals of all backgrounds to effortlessly transform their bodies to perfection. With our user-friendly interface, no prior skills or expertise are required.",
    img: <Image2 />,
  },
  {
    title: "Magic Remover",
    text: "Our advanced technology seamlessly integrates body adjustments while expertly safeguarding the background from any distortions.",
    img: <Image3 />,
  },
  {
    title: "Magic Remover",
    text: "It works tirelessly to automatically detect objects within your visuals, leaving you with the ease of a single click to remove them",
    img: <Image4 />,
  },
];
function Root() {
  return (
    <>
      <Hero />
      <Testimonials />
      {contentRoot.map((e, i) => (
        <ImageWithText
          title={e.title}
          text={e.text}
          reverse={i === 1 || i === 3 ? true : false}
        >
          {e.img}
        </ImageWithText>
      ))}
      <Banner />
    </>
  );
}

export default Root;
