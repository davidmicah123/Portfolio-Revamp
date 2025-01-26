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
            I am a frontend developer with over 3 years of experience in
            building dynamic web applications and websites. My expertise lies in
            creating intuitive and user-friendly interfaces that enhance user
            experiences while maintaining modern design standards and best
            practices.
          </p>
          <p>
            I have had the opportunity to work with diverse teams on a variety
            of projects, contributing as both a team member and a team lead.
            These experiences have enhanced my adaptability, communication
            skills, and ability to ensure successful project execution from
            start to finish.
          </p>
          <div className={classes.contact_btn_wrapper}>
            <button className={`${classes.contact_me}, ${classes.custom_btn}`}>
              Contact Me
            </button>
            <button
              className={`${classes.download_resume}, ${classes.custom_btn}`}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;