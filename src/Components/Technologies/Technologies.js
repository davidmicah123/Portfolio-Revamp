import React from 'react'
import classes from "./Technologies.module.css"
import html from "../../Assets/Images/html.png"
import css from "../../Assets/Images/css.png"
import javascript from "../../Assets/Images/javascript.png"
import react from "../../Assets/Images/ReactJS.png"

const Technologies = () => {
  return (
    <section className={classes.associate_section}>
        <h2>Technologies</h2>

        <div className={classes.asscoiate_logo_wrapper}>
            <img src={html} alt=""/>
            <img src={css} alt=""/>
            <img src={javascript} alt=""/>
            <img src={react} alt=""/>
        </div>
    </section>
  );
}

export default Technologies;
