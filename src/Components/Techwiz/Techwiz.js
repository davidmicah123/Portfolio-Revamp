import React from 'react'
import classes from "./Techwiz.module.css"
import Techwiz5 from "../../Assets/Images/Techwiz 5.jpg"
import Techwiz4 from "../../Assets/Images/Techwiz 4.jpg";
import { Link } from 'react-router-dom';

const Techwiz = () => {
  return (
    <section className={classes.techwiz_section}>
      <h2>Techwiz Hackathon</h2>

      <div className={classes.techwiz_content_wrapper}>
        <div className={classes.img_wrapper}>
          <img src={Techwiz5} alt="" />
          <img src={Techwiz4} alt="" className={classes.techwiz4} />
        </div>
        <div className={classes.text_content_wrapper}>
          <div>
            <h3>Techwiz 5</h3>
            <p>
              I served as the team lead for Team Vertex-Coders in the Aptech
              Techwiz 5 competition. Together, we developed TravelSmart, a
              dynamic travel web app providing essential travel information and
              resources, including flight booking options all completed within
              72 hours. Our innovative approach earned us the 1st position in
              the competition, showcasing our teamwork and technical expertise.
            </p>
            <Link to="https://travelsmart-vertex-coders-techwiz5.netlify.app/">
              View live website
            </Link>
          </div>
          <div>
            <h3>Techwiz 4</h3>
            <p>
              I was a team member of Team Emerald in the Aptech Techwiz 4
              competition, where our team emerged among the top 5. We developed
              Soccerverse, a comprehensive football management system providing
              league tables, football scores, player details, and more. This
              innovative project was successfully completed within 72 hours.
            </p>
            <Link to="https://emerald-techwiz-project.netlify.app/">
              View live website
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techwiz;