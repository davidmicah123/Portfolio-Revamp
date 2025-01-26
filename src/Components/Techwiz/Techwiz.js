import React from 'react'
import classes from "./Techwiz.module.css"
import Techwiz5 from "../../Assets/Images/Techwiz 5.jpg"
import Techwiz4 from "../../Assets/Images/Techwiz 4.jpg";

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
              Lorem ipsum hi dolor sit amet consectetur, Lorem ipsum dolor, sit
              amet consectetur adipisicing. Lorem, ipsum dolor. adipisicing
              elit. Ducimus ab quasi libero fuga consectetur aliquam, corrupti,
              voluptas, praesentium sint neque laborum iste eum hic ad
              distinctio. Expedita quis molestias sequi?
            </p>
          </div>
          <div>
            <h3>Techwiz 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              quibusdam porro suscipit laudantium aspernatur dolor laboriosam
              esse dolorem reiciendis nostrum, autem, corporis optio quisquam
              non iusto rerum. Sequi ullam amet ea quaerat labore voluptates
              accusamus provident animi illum aliquid? Aliquam repudiandae
              cumque fugiat at ipsum?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techwiz;