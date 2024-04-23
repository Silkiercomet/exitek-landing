import style from "./navbar.module.css"
import logo from "../../assets/logo.svg"
import logo_white from "../../assets/logo-dark.svg"
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

      window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

      <nav className={`${style.wrapper} ${isScrolled ? style.white : style.transp}`}>
      <div className={`${style.navbar} container`}>
        { isScrolled ? <a href="/"><img src={logo_white} alt="exitek logo to homepage" /></a> : <a href="/"><img src={logo} alt="exitek logo to homepage" /></a>}

        <div className={style.navbar__container}>
          <ul className={style.navbar__container_menu}>
            <li><a href='/'>Home</a></li>
            <li><a href='/aboutUs'>About Us</a></li>
            <li><a href='/careers'>Careers</a></li>
            <li><a href='/contactUs'>Contact Us</a></li>
          </ul>
          <a className={style.navbar__container_btn} href="/contactUs">Join Us</a>
        </div>
      </div>
      </nav>

  )
}

export default Navbar