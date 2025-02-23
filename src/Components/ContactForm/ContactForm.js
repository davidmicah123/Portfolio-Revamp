import React from 'react'
import classes from "./ContactForm.module.css"
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <section className={classes.contact_section}>
      <h2>Contact Me</h2>

      <div className={classes.details_area}>
        <form action="#" className={classes.form_box}>
          <div className={classes.input_box}>
            <label for="">Fullname:</label>
            <input type="text" name="" placeholder="Enter your fullname" />
          </div>
          <div className={classes.input_box}>
            <label for="">Message Title:</label>
            <input type="text" name="" placeholder="Enter your Message title" />
          </div>
          <div className={classes.input_box}>
            <label for="">Email Address:</label>
            <input type="text" name="" placeholder="Enter your address" />
          </div>
          <div className={classes.input_box}>
            <label for="">Message:</label>
            <textarea
              name=""
              id=""
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
        <div className={classes.details_box}>
          <h2 className={classes.contact_details_header}>My Contact Details</h2>
          <ul className={classes.contact_details_list}>
            <li>
              <ul className={classes.details}>
                <li>
                  <ion-icon name="logo-twitter"></ion-icon>
                  <Link to="https://x.com/Davidmicdan_" target="blank">
                    <p>Davidmicdan_</p>
                  </Link>
                </li>
                <li>
                  <ion-icon name="logo-github"></ion-icon>
                  <Link to="https://github.com/davidmicah123" target="blank">
                    <p>davidmicah123</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className={classes.details}>
                <li>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <Link to="https://wa.link/utqwmz" target="blank">
                    <p>+234 703 532 6207</p>
                  </Link>
                </li>
                <li>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <Link to="https://wa.link/teqlws" target="blank">
                    <p>+234 913 185 8421</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className={classes.details}>
                <li>
                  <ion-icon name="location-outline"></ion-icon>
                  <p>NO 2 Ojokondo Street</p>
                </li>
                <li>
                  <ion-icon name="location-outline"></ion-icon>
                  <p>Water Bus stop, Agbowo, Ibadan</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className={classes.details}>
                <li>
                  <ion-icon name="mail-outline"></ion-icon>
                  <Link to="mailto:micahdanielsd@gmail.com">
                    <p>micahdanielsd@gmail.com</p>
                  </Link>
                </li>
                <li>
                  <ion-icon name="mail-outline"></ion-icon>
                  <Link
                    to="mailto:micahdanielsdavid2007@gmail.com"
                  >
                    <p>micahdanielsdavid2007@gmail.com</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;