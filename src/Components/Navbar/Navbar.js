import React from 'react'
import classes from "./Navbar.module.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.nav_content_wrapper}>
        <h1 className={classes.logo}>DMD</h1>
        <ul className={classes.nav_list}>
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

        <div className={classes.mobile_nav_toogler}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
}

export default Navbar