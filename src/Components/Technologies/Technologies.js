import React from 'react'
import classes from "./Technologies.module.css"
import html from "../../Assets/Images/html.png"
import css from "../../Assets/Images/css.png"
import javascript from "../../Assets/Images/javascript.png"
import react from "../../Assets/Images/ReactJS.png"

const Technologies = () => {
  return (
    <section className={classes.associate_section}>
      <h2>Technologies</h2>

      <div className={classes.asscoiate_logo_wrapper}>
        <img
          src="https://camo.githubusercontent.com/d4d9d935f85b68223a3514c6a889ea3ed6a77afb5f560c05baa1a1b168077830/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/930c71eac967cc5cec61c0aa08ba3719f9cb68e28cdffa63b28b0a31be1663b4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/29d02b3669d6450d67e043cf5909e740dcb94c1e2306d88ac48b15b4ec55dc65/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/f93e05694a6f01f2f6a37713a454a942442a5ff2b33083891096a6f7e57842f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
          alt=""
        />
      </div>
    </section>
  );
}

export default Technologies;
