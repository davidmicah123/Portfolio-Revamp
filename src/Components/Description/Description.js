import React from 'react'
import classes from "./Description.module.css"
import user_img from "../../Assets/Images/me - Copy.jpg"

const Description = () => {
  return (
    <section className={classes.description}>
      <div className={classes.description_container}>
          <div className={classes.img_wrapper}>
            <img src={user_img} alt="" className={classes.img} />
          </div>
          <div className={classes.description_content_wrapper}>
            <h2>I'm an Experienced Frontend developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ullam
              quae doloremque aliquam illo distinctio? Necessitatibus neque vitae
              a. Aut Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              necessitatibus possimus qui sit dignissimos dicta Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequuntur.
            </p>
            <div className={classes.contact_btn_wrapper}>
              <button className={`${classes.contact_me}, ${classes.custom_btn}`}>Contact Me</button>
              <button className={`${classes.download_resume}, ${classes.custom_btn}`}>Download CV</button>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Description;