import React from 'react'
import classes from "./Footer.js.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_content_wrapper}>
        <div className={classes.footer_main}>
          <div className={classes.footer_main_txt}>
            <h2>David Micah-Daniels</h2>
            <p>
              I am a frontend developer with 3+ years of experience delivering
              web projects, combining technical expertise in web and software
              development with strong team collaboration skills.
            </p>
          </div>

          <ul className={classes.page_links}>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact Me</li>
          </ul>

          <ul className={classes.social_links_wrapper}>
            <li>
              <ion-icon name="logo-twitter"></ion-icon>
              <p>Twitter</p>
            </li>
            <li>
              <ion-icon name="logo-linkedin"></ion-icon>
              <p>LinkedIn</p>
            </li>
            <li>
              <ion-icon name="logo-medium"></ion-icon>
              <p>Medium</p>
            </li>
            <li>
              <ion-icon name="logo-whatsapp"></ion-icon>
              <p>Whatsapp</p>
            </li>
          </ul>
        </div>
        <div className={classes.footer_base}>
          <strong>
            <p>Copyright &copy; David Micah-Daniels 2024 </p>
          </strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;