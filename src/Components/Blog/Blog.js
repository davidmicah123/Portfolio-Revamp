import React from 'react'
import classes from "./Blog.module.css"
import blog_img from "../../Assets/Images/me.jpg"
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className={classes.blog_section}>
      <h1 className={classes.section_header}>My Blogs</h1>

      <div className={classes.blog_cards_wrapper}>
        <div className={classes.blog_card}>
          <div className={classes.blog_img_wrapper}>
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3XS-8r8adjnRoNH4YjKXpw.png"
              alt=""
              className={classes.blog_card_img}
            />
          </div>
          <div className={classes.blog_txt_wrapper}>
            <Link
              to="https://levelup.gitconnected.com/the-5-paid-subscriptions-i-actually-use-in-2025-as-a-staff-software-engineer-98033c94566e"
              target="_blank"
            >
              <h3>
                The 5 paid subscriptions I actually use in 2025 as a Staff
                Software Engineer
              </h3>
            </Link>
          </div>
        </div>
        <div className={classes.blog_card}>
          <div className={classes.blog_img_wrapper}>
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*sZ6Y-aV5lEnU0tjNgcoNgQ.png"
              alt=""
              className={classes.blog_card_img}
            />
          </div>
          <div className={classes.blog_txt_wrapper}>
            <Link
              to="https://medium.com/flutter-uae/introducing-mirai-a-server-driven-ui-framework-for-flutter-d020fd0c387d"
              target="_blank"
            >
              <h3>
                🚀 Introducing Mirai — A Server Driven UI framework for Flutter
              </h3>
            </Link>
          </div>
        </div>
        <div className={classes.blog_card}>
          <div className={classes.blog_img_wrapper}>
            <img
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*dJGNVpOdGGXkdhS1"
              alt=""
              className={classes.blog_card_img}
            />
          </div>
          <div className={classes.blog_txt_wrapper}>
            <Link
              to="https://medium.com/wise-well/how-25-years-of-life-online-have-rewired-relationships-1d94db766945"
              target="_blank"
            >
              <h3>How 25 Years of Life Online Have Rewired Relationships</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;