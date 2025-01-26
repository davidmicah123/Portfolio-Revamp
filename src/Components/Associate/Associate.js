import React from 'react'
import classes from "./Associate.module.css"
import soccerverse from "../../Assets/Images/soccerverse.png"
import travelsmart from "../../Assets/Images/travelsmart.png"
import foodmania from "../../Assets/Images/foodmania.png"

const Associate = () => {
  return (
    <section className={classes.associate_section}>
        <h2>Associated With</h2>

        <div className={classes.asscoiate_logo_wrapper}>
            <img src={foodmania} alt=""/>
            <img src={soccerverse} alt=""/>
            <img src={travelsmart} alt=""/>
            <img src={foodmania} alt=""/>
        </div>
    </section>
  );
}

export default Associate;