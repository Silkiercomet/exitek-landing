import React from "react";
import style from "./heroabout.module.css";
const HeroAbout = () => {
  return (
    <main className={`${style.heroAbout}`}>
      <div className="container">
        <header>
          <h1>Innovating the future. Where imagination meets creation</h1>
          <p>
            Our mission is to empower creators with groundbreaking tools that
            unlock their creative potential, enabling them to turn their boldest
            ideas into reality.
          </p>
        </header>
        <ul className={style.heroAbout__list}>
          <li>
            <strong>2020</strong>
            <span>Company founded</span>
          </li>
          <li>
            <strong>11</strong>
            <span>Passionate people</span>
          </li>
          <li>
            <strong>5 M+</strong>
            <span>Monthly active users</span>
          </li>
          <li>
            <strong>7</strong>
            <span>Created projects</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default HeroAbout;
