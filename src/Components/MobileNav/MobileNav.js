import React from "react";
import classes from "./MobileNav.module.css";
import { Link } from "react-router-dom";
import { HashLink as ScrollLink } from "react-router-hash-link";

const MobileNav = ({ closeNav }) => {
  return (
    <nav className={classes.mobile_nav}>
      <div className={classes.mobile_nav_contant_wrapper}>
        <div className={classes.nav_closer} onClick={closeNav}>
          <ion-icon name="close-outline"></ion-icon>
        </div>

        <Link to="/" onClick={closeNav}>
          <h1 className={classes.logo}>DMD</h1>
        </Link>
        <ul className={classes.mobile_nav_list}>
          <li>
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <ScrollLink smooth to="/#about">
              About
            </ScrollLink>
          </li>
          <li>
            <Link to="/Projects" onClick={closeNav}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNav}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
