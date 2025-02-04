import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import MobileNav from "../../Components/MobileNav/MobileNav";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const closeMobileNav = () => {
    setIsMobileNavVisible(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.nav_content_wrapper}>
        <Link to="/">
          <h1 className={classes.logo}>DMD</h1>
        </Link>
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

        <div className={classes.mobile_nav_toogler} onClick={toggleMobileNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>

        {isMobileNavVisible && <MobileNav closeNav={closeMobileNav} />}
      </div>
    </nav>
  );
};

export default Navbar;
