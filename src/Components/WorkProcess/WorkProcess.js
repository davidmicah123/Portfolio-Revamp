import React from 'react'
import classes from "./WorkProcess.module.css"

const WorkProcess = () => {
  return (
    <section className={classes.work_process}>
      <div className={classes.work_process_content_wrapper}>
        <div className={classes.work_process_diff1}>
          <h1>My Work Process</h1>
          <p>
            My work process defines the structured approach I use to deliver
            successful projects. From planning and design to development and
            deployment, each step ensures efficiency, quality, and
            functionality.
          </p>
          <p>
            This approach keeps me organized and focused, enabling me to achieve
            impactful results while maintaining attention to detail and
            adaptability.
          </p>
        </div>
        <div className={classes.process_cards_wrapper}>
          <div className={classes.process_card}>
            <ion-icon name="bar-chart-outline"></ion-icon>
            <h3>Planning and Strategy</h3>
            <p>
              Define objectives, research requirements, and create a clear
              roadmap for success
            </p>
          </div>
          <div className={classes.process_card}>
            <ion-icon name="alarm-outline"></ion-icon>
            <h3>Design and Prototyping</h3>
            <p>
              Develop user-friendly designs and prototypes focused on
              functionality.
            </p>
          </div>
          <div className={classes.process_card}>
            <ion-icon name="contract-outline"></ion-icon>
            <h3>Development</h3>
            <p>
              Build scalable, efficient systems using modern tools and coding
              best practices.
            </p>
          </div>
          <div className={classes.process_card}>
            <ion-icon name="cloud-upload-outline"></ion-icon>
            <h3>Testing and Deployment</h3>
            <p>
              Thorough testing and deploy projects to ensure optimal performance
              and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;