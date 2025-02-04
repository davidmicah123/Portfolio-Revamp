import React from 'react'
import classes from "./HomepageProject.module.css"
import project_img from "../../Assets/Images/project_img.png"
import { Link } from 'react-router-dom';
import soccerverse from "../../Assets/Images/soccerverse-screenshot.png";
import travelsmart from "../../Assets/Images/travelsmart-screenshot.png";

const HomepageProject = () => {
  return (
    <section className={classes.homepage_project_section}>
      <p className={classes.project_header}>Projects</p>
      <h1>DMD's Has Completed 25+ Frontend Projects</h1>

      <div className={classes.project_card_wrapper}>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={travelsmart} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h3>TravelSmart</h3>
            <p>
              An travel website developed by "Team VertexCoders" which i was the
              TeamLead for Aptech's Techwiz 5 hackathon. The project was
              completed within 72 hours of concentrated coding. We Emerged 1st
              in the website design and development category.
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={soccerverse} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h3>SoccerVerse</h3>
            <p>
              I was a member of "Team Emerald" for Aptech Techwiz 4 hackathon,
              we developed Soccerverse within 72 hours from planning to
              deployment stage and we emerged top 5 in the Website design and
              development category
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
            </div>
          </div>
        </div>
        <div className={classes.technologies_list}>
          <h3>Technologies and best practices:</h3>
          <ul>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>HTML5</p>
            </li>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>CSS3</p>
            </li>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>Bootstrap</p>
            </li>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>JavaScript ES6</p>{" "}
            </li>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>Responsive</p>
            </li>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>React JSX</p>
            </li>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>SPA</p>
            </li>
            <li>
              <ion-icon name="checkmark-done-outline"></ion-icon>
              <p>Json Driven</p>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/projects">
        <div className={classes.project_action_area}>
          <p>See all projects</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </Link>
    </section>
  );
}

export default HomepageProject;