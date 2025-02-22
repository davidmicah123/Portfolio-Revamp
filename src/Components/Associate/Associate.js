import React from 'react'
import classes from "./Associate.module.css"
// import soccerverse from "../../Assets/Images/soccerverse.png"
import travelsmart from "../../Assets/Images/travelsmart.png"
import foodmania from "../../Assets/Images/foodmania.png"
import huddle from "../../Assets/Images/huddle.png";

const Associate = () => {
  return (
    <section className={classes.associate_section}>
      <h2>Associated With</h2>

      <div className={classes.asscoiate_logo_wrapper}>
        <img src={foodmania} alt="" />
        <img src={huddle} alt="" />
        <img src={travelsmart} alt="" />
        <img
          src="https://techpath-insights.netlify.app/static/media/8.7aae5ae3b90d4171aa28.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Associate;