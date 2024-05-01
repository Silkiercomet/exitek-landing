import React from 'react'
import style from "./footer.module.css"
import logo from "../../assets/logo.svg"
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        <a href="/"><img src={logo} alt="exitek logo and main page link" /></a>

        <ul>
            <li>
              <a href="/aboutUs">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contactUs">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
        </ul>
      </div>
      <hr />
      <p>© 2022-2023 EXITEK LTD. All rights reserved.</p>
    </footer>
  )
}

export default Footer