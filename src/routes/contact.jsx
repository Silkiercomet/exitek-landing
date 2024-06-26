import style from "./routes.module.css"
const Contact = () => {
  return (
    <section className={`${style.contact} ` }>
      <div className={`${style.contact_hero} container`}>
      <div>
        <h1>Let’s talk</h1>
        <p>Got a question about Exitek?<br/> Let us know.</p>
      </div>
      <div>
      <a href="mailto:info@exitek.io">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM20 8L12.525 12.675C12.4417 12.725 12.3542 12.7625 12.2625 12.7875C12.1708 12.8125 12.0833 12.825 12 12.825C11.9167 12.825 11.8292 12.8125 11.7375 12.7875C11.6458 12.7625 11.5583 12.725 11.475 12.675L4 8V18H20V8ZM12 11L20 6H4L12 11ZM4 8.25V6.775V6.8V6.7875V8.25Z"
              fill="white"
            />
          </svg>
        </i>
        <span>info@exitek.io</span>
        <i className={style.arrowContact}  >
          <svg
            xmlns="http://www.w3.org/2000/png"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"

          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5664 21.3439L20.9329 17.9774H9.33325C9.05201 17.9774 8.82258 17.8837 8.63586 17.697C8.44914 17.5102 8.35547 17.2808 8.35547 16.9996C8.35547 16.7184 8.44914 16.4889 8.63586 16.3022C8.82258 16.1155 9.05201 16.0218 9.33325 16.0218H20.9329L17.5386 12.6275C17.3406 12.4295 17.2444 12.1992 17.2444 11.9301C17.2444 11.6611 17.3406 11.4308 17.5386 11.2328C17.7367 11.0347 17.9669 10.9385 18.236 10.9385C18.5051 10.9385 18.7354 11.0347 18.9334 11.2328L24.0167 16.3161C24.1159 16.4152 24.1828 16.5192 24.2216 16.6278C24.2623 16.7419 24.2832 16.8656 24.2832 16.9996C24.2832 17.1336 24.2623 17.2572 24.2216 17.3714C24.1828 17.48 24.1159 17.584 24.0167 17.6831L18.9056 22.7942C18.7286 22.9713 18.5086 23.0607 18.236 23.0607C17.9669 23.0607 17.7367 22.9644 17.5386 22.7664C17.3424 22.5702 17.25 22.3373 17.2582 22.0591C17.2664 21.7782 17.3683 21.542 17.5664 21.3439Z"
              fill="white"
            ></path>
          </svg>
        </i>
      </a>
      </div>
      </div>
    </section>
  );
};

export default Contact;
