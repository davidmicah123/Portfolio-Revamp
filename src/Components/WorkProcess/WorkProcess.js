import React from 'react'
import classes from "./WorkProcess.module.css"

const WorkProcess = () => {
  return (
    <section className={classes.work_process}>
        <div className={classes.work_process_content_wrapper}>
            <div className={classes.work_process_diff1}>
                <h1>My Work Process</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi possimus voluptas rem delectus, fugit temporibus nobis natus quos nulla.</p>
                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi  amet consectetur adipisicing elit. Dolores, ea maxime inventore porro pariatur dolorem.</p>
            </div>
            <div className={classes.process_cards_wrapper}>
                <div className={classes.process_card}>
                    <ion-icon name="bar-chart-outline"></ion-icon>
                    <h3>First Process</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, adipisci.</p>
                </div>
                <div className={classes.process_card}>
                    <ion-icon name="alarm-outline"></ion-icon>
                    <h3>First Process</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, adipisci.</p>
                </div>
                <div className={classes.process_card}>
                    <ion-icon name="contract-outline"></ion-icon>
                    <h3>First Process</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, adipisci.</p>
                </div>
                <div className={classes.process_card}>
                    <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                    <h3>First Process</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, adipisci.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkProcess;