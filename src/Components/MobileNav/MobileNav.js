import React from 'react'
import classes from "./MobileNav.module.css"
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <nav className={classes.mobile_nav}>
      <div className={classes.mobile_nav_contant_wrapper}>
        <div className={classes.nav_closer}>
          <ion-icon name="close-outline"></ion-icon>
        </div>

        <h1 className={classes.logo}>DMD</h1>
        <ul className={classes.mobile_nav_list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;