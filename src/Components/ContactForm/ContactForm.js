import React from 'react'
import classes from "./ContactForm.module.css"

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
            <input type="text" name="" placeholder="Enter your fullname" />
          </div>
          <div className={classes.input_box}>
            <label for="">Email Address:</label>
            <input type="text" name="" placeholder="Enter your fullname" />
          </div>
          <div className={classes.input_box}>
            <label for="">Message:</label>
            <textarea
              name=""
              id=""
              placeholder="Enter your message here..."
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
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <p>+234 703 532 6207</p>
                </li>
                <li>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  <p>+234 913 185 8421</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className={classes.details}>
                <li>
                  <ion-icon name="mail-outline"></ion-icon>
                  <p>micahdanielsd@gmail.com</p>
                </li>
                <li>
                  <ion-icon name="mail-outline"></ion-icon>
                  <p>micahdanielsdavid2007@gmail.com</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className={classes.details}>
                <li>
                  <ion-icon name="logo-twitter"></ion-icon>
                  <p>Davidmicdan_</p>
                </li>
                <li>
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <p>davidmicahdaniels</p>
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