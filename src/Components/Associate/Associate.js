import React from 'react'
import classes from "./Associate.module.css"

const Associate = () => {
  return (
    <section className={classes.associate_section}>
        <h2>Associated With</h2>

        <div className={classes.asscoiate_logo_wrapper}>
            <img src="https://omnifood.dev/img/logos/techcrunch.png" alt=""/>
            <img src="https://omnifood.dev/img/logos/techcrunch.png" alt=""/>
            <img src="https://omnifood.dev/img/logos/techcrunch.png" alt=""/>
            <img src="https://omnifood.dev/img/logos/techcrunch.png" alt=""/>
        </div>
    </section>
  );
}

export default Associate;