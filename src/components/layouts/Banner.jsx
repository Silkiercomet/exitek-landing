import style from "./banner.module.css"
import arrow from "../../assets/arrow.svg"
const Banner = () => {
  return (
    <div className={style.banner}>
        <p>Join our team</p>
        <p>We extend a warm invitation to talented individuals like you to become an integral part of our vibrant and forward-thinking team.</p>
        <a className={style.banner_btn} href="/contactUs">
            Learn More <i><svg xmlns="http://www.w3.org/2000/png" width="32" height="32" viewBox="0 0 32 32" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5664 21.3439L20.9329 17.9774H9.33325C9.05201 17.9774 8.82258 17.8837 8.63586 17.697C8.44914 17.5102 8.35547 17.2808 8.35547 16.9996C8.35547 16.7184 8.44914 16.4889 8.63586 16.3022C8.82258 16.1155 9.05201 16.0218 9.33325 16.0218H20.9329L17.5386 12.6275C17.3406 12.4295 17.2444 12.1992 17.2444 11.9301C17.2444 11.6611 17.3406 11.4308 17.5386 11.2328C17.7367 11.0347 17.9669 10.9385 18.236 10.9385C18.5051 10.9385 18.7354 11.0347 18.9334 11.2328L24.0167 16.3161C24.1159 16.4152 24.1828 16.5192 24.2216 16.6278C24.2623 16.7419 24.2832 16.8656 24.2832 16.9996C24.2832 17.1336 24.2623 17.2572 24.2216 17.3714C24.1828 17.48 24.1159 17.584 24.0167 17.6831L18.9056 22.7942C18.7286 22.9713 18.5086 23.0607 18.236 23.0607C17.9669 23.0607 17.7367 22.9644 17.5386 22.7664C17.3424 22.5702 17.25 22.3373 17.2582 22.0591C17.2664 21.7782 17.3683 21.542 17.5664 21.3439Z" fill="#080226"></path>
</svg></i>
        </a>
    </div>
  )
}

export default Banner