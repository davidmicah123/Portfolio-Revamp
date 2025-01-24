import React from 'react'
import classes from "./HomepageHero.module.css"
import hero_img from "../../Assets/Images/me - Copy.jpg"

const HomepageHero = () => {
  return (
    <section className={classes.homepage_hero}>
      <div className={classes.hero_content_wrapper}>
        <div className={classes.hero_txt_content}>
          <p>Hi, I'm</p>
          <h1>David Micah-Daniels</h1>
          <p className={classes.hero_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt rem soluta ratione repellat voluptas sequi quaerat numquam
            vitae earum. Commodi quo distinctio minima dolores.
          </p>
          <div className={classes.hero_btn_wrapper}>
            <button className={classes.custom_btn}>Contact Me</button>
            <button className={classes.custom_btn}>Download Resume</button>
          </div>
        </div>
        <div className={classes.hero_img_Wrapper}>
          <img src={hero_img} alt="" className={classes.hero_img} />
        </div>
      </div>
    </section>
  );
}

export default HomepageHero;