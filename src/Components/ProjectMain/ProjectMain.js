import React from 'react'
import classes from "./ProjectMain.module.css";
import project_img from "../../Assets/Images/project_img.png"
import huddle from "../../Assets/Images/huddle_webpage.png"

const ProjectMain = () => {
  return (
    <section className={classes.projects_display_section}>
      <ul className={classes.project_tags_wrapper}>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>JSON</li>
        <li>XML</li>
        <li>PHP</li>
      </ul>

      <div className={classes.project_Card_wrapper}>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={huddle} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <h1>Huddle Project</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at
              distinctio facilis nam, possimus eaque, facere similique atque
              nemo quo magnam. Molestias ad, eaque neque accusantium illum aut
              labore eveniet!
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={project_img} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at
              distinctio facilis nam, possimus eaque, facere similique atque
              nemo quo magnam. Molestias ad, eaque neque accusantium illum aut
              labore eveniet!
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={project_img} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at
              distinctio facilis nam, possimus eaque, facere similique atque
              nemo quo magnam. Molestias ad, eaque neque accusantium illum aut
              labore eveniet!
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={project_img} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at
              distinctio facilis nam, possimus eaque, facere similique atque
              nemo quo magnam. Molestias ad, eaque neque accusantium illum aut
              labore eveniet!
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={project_img} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at
              distinctio facilis nam, possimus eaque, facere similique atque
              nemo quo magnam. Molestias ad, eaque neque accusantium illum aut
              labore eveniet!
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
            </div>
          </div>
        </div>
        <div className={classes.project_card}>
          <div className={classes.project_img_wrapper}>
            <img src={project_img} alt="" className={classes.project_img} />
          </div>
          <div className={classes.project_description_area}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at
              distinctio facilis nam, possimus eaque, facere similique atque
              nemo quo magnam. Molestias ad, eaque neque accusantium illum aut
              labore eveniet!
            </p>
            <div className={classes.action_btn_wrapper}>
              <button className={classes.custom_btn}>Preview</button>
              <button className={classes.custom_btn}>View Docs</button>
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
}

export default ProjectMain;