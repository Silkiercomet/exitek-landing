import style from "./navbar.module.css"
import logo_white from "../../assets/logo.svg"
import logo from "../../assets/logo-dark.svg"
import menu from "../../assets/menu.svg"
import menudark from "../../assets/menudark.svg"
import close from "../../assets/x-solid.svg"
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (

      <nav className={`${style.wrapper} ${isScrolled ? style.white : style.transp}`}>
      <div className={`${style.navbar} container`}>
        { isScrolled ? <a href="/"><img src={logo} alt="exitek logo to homepage" /></a> : <a href="/"><img src={logo_white} alt="exitek logo to homepage" /></a>}

        <div className={style.navbar__container}>
          <ul className={style.navbar__container_menu}>
            <li><a href='/'>Home</a></li>
            <li><a href='/aboutUs'>About Us</a></li>
            <li><a href='/careers'>Careers</a></li>
            <li><a href='/contactUs'>Contact Us</a></li>
          </ul>
          <a className={style.navbar__container_btn} href="/contactUs">Join Us</a>
          <img className={`${isScrolled && style.menudark} ${style.menu}`} onClick={() => handleMenu()} src={isScrolled ? menudark : menu} alt="mobile menu display" />
        </div>
        {/* mobile menu */}
        <div className={`${style.navbar__containermobile} ${isMenuOpen ? style.active : ""}`} >
          <header className={style.navbar__containermobile_header}>
            <a href="/" onClick={() => handleMenu()}><img src={logo_white} alt="exitek logo to homepage" /></a>
            <img src={close} alt="close button" onClick={() => handleMenu()} />
          </header>
          <ul className={style.navbar__containermobile_menu}>
            <li><a href='/' onClick={() => handleMenu()}>Home</a></li>
            <li><a href='/aboutUs' onClick={() => handleMenu()}>About Us</a></li>
            <li><a href='/careers' onClick={() => handleMenu()}>Careers</a></li>
            <li><a href='/contactUs' onClick={() => handleMenu()}>Contact Us</a></li>
          </ul>
          <a className={style.navbar__containermobile_btn} href="/contactUs">Join Us</a>
        </div>
      </div>
      </nav>

  )
}

export default Navbar