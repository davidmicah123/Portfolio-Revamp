import React from "react";
import classes from "./ProjectMain.module.css";
import project_img from "../../Assets/Images/project_img.png";
import huddle from "../../Assets/Images/huddle_webpage.png";
import foodmania from "../../Assets/Images/foodmania-screenshot.png";
import techpathinsight from "../../Assets/Images/techpath-insight-screenshot.png";
import avero from "../../Assets/Images/avero-screenshot.png";
import soccerverse from "../../Assets/Images/soccerverse-screenshot.png";
import { Link } from "react-router-dom";
import travelsmart from "../../Assets/Images/travelsmart-screenshot.png";

const ProjectMain = () => {
  return (
    <section className={classes.projects_display_section}>
      <ul className={classes.project_tags_wrapper}>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>JSON</li>
        {/* <li>XML</li>
        <li>PHP</li> */}
      </ul>

      <div className={classes.project_Card_wrapper}>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={huddle} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>Huddle Project</h1>
            <p>
              A practice project I built in 2022 to practice HTML and CSS and
              just my knoledge of css styling and positioning, A sinle page
              website to practice, I completed it in few hours.
            </p>
            <div className={classes.action_btn_wrapper}>
              <Link
                to="https://davidmicah123.github.io/Huddle-Project/"
                target="_blank"
              >
                <button className={classes.custom_btn}>Preview</button>
              </Link>
              <Link
                to="https://github.com/davidmicah123/Huddle-Project"
                target="_blank"
              >
                <button className={classes.custom_btn}>View Docs</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={soccerverse} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>Soccer Verse</h1>
            <p>
              As a memeber of Team Emerald, I was involved in developing
              Soccerverse, an advance football management system We ended up top
              5% at Techwiz 4.
            </p>
            <div className={classes.action_btn_wrapper}>
              <Link
                to="https://emerald-techwiz-project.netlify.app/"
                target="_blank"
              >
                <button className={classes.custom_btn}>Preview</button>
              </Link>
              <Link
                to="https://github.com/oluwatobiMeti/Emerald-build"
                target="_blank"
              >
                <button className={classes.custom_btn}>View Docs</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={travelsmart} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>TravelSmart</h1>
            <p>
              As the Teamlead of team VertexCoders in the creation of
              TravelSmart, a dynamic travel web app with flight booking. Built
              in 72 hours, our innovation secured 1st place at Techwiz 5.
            </p>
            <div className={classes.action_btn_wrapper}>
              <Link
                to="https://travelsmart-vertex-coders-techwiz5.netlify.app/"
                target="_blank"
              >
                <button className={classes.custom_btn}>Preview</button>
              </Link>
              <Link
                to="https://github.com/davidmicah123/TravelSmart"
                target="_blank"
              >
                <button className={classes.custom_btn}>View Docs</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={techpathinsight} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>Techpath Insights</h1>
            <p>
              I developed TechPath Insight's wensite - a Data Brain Box brand
              empowering small businesses to scale up through Data-driven
              Solutions, Tech Consultation, Mentorship and AI/ML Expertise.
            </p>
            <div className={classes.action_btn_wrapper}>
              <Link to="https://techpath-insights.netlify.app/" target="_blank">
                <button className={classes.custom_btn}>Preview</button>
              </Link>
              <Link to="#" target="_blank">
                <button className={classes.custom_btn}>View Docs</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={foodmania} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>Foodmania</h1>
            <p>
              A JSON driven e-commerce website, all data and information
              displayed on the website are fetched from JSON data. The main aim
              of the project was to develop a JSON driven website.
            </p>
            <div className={classes.action_btn_wrapper}>
              <Link to="https://foodmania-dmd.netlify.app/" target="_blank">
                <button className={classes.custom_btn}>Preview</button>
              </Link>
              <Link
                to="https://github.com/davidmicah123/foodmania"
                target="_blank"
              >
                <button className={classes.custom_btn}>View Docs</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={huddle} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>Zuri Clone</h1>
            <p>
              A practice project I built in 2022 to practice HTML and CSS and
              just my knoledge of css styling and positioning, A sinle page
              website to practice, I completed it in few hours. 
            </p>
            <div className={classes.action_btn_wrapper}>
              <Link
                to="https://davidmicah123.github.io/Huddle-Project/"
                target="_blank"
              >
                <button className={classes.custom_btn}>Preview</button>
              </Link>
              <Link
                to="https://github.com/davidmicah123/Huddle-Project"
                target="_blank"
              >
                <button className={classes.custom_btn}>View Docs</button>
              </Link>
            </div>
          </div>
        </div> */}
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={avero} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>Avero</h1>
            <p>
              A website that owned by imigration experts that provides
              imigration services to people in need of it. Fully respinsive and
              user friendly, Completed within 3 days of development.
            </p>
            <div className={classes.action_btn_wrapper}>
              <Link to="https://avero.netlify.app/" target="_blank">
                <button className={classes.custom_btn}>Preview</button>
              </Link>
              <Link to="#" target="_blank">
                <button className={classes.custom_btn}>View Docs</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.project_nav_icons_wrapper}>
        <div className={classes.icon_Wrapper}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div>1</div>
        <div>2</div>
        <div className={classes.icon_Wrapper}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    </section>
  );
};

export default ProjectMain;
