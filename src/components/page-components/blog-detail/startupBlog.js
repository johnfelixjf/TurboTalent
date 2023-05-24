import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./startupBlog.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

import Startup from "../../../assets/images/static/blog/work-startup.png";

const StartupBlog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      delay: 400, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    }); // Initialize AOS library
  }, []);

  return (
    <Grid container direction="column" className={styles.blogpostRoot}>
      {/* Blog post header */}
      <Grid item className={styles.blogpostHeaderBlock} data-aos="fade-up">
        {/* Badge and date */}
        <div className={styles.headerBadge}>
          <div className={styles.headerBadgeLight} data-aos="fade-up">
            <div>New</div>
          </div>
          <div data-aos="fade-up">April 23, 2023</div>
        </div>
        {/* Blog title */}
        <div className={styles.blogpostTitle} data-aos="fade-up">
          <Typography variant="h2">
            Pros and Cons of Working for a Startup.
          </Typography>
        </div>
        {/* Blog post content */}
        <Typography
          variant="body1"
          className={styles.paragraphLarge}
          data-aos="fade-up"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            mauris tincidunt, porttitor sapien et, fringilla ligula. Etiam vel
            ligula enim. Sed neque lorem, maximus et sapien vitae.
          </p>
        </Typography>
      </Grid>
      {/* Blog post image */}
      <Grid item>
        <div
          className={styles.blogpostImageWrapper}
          sx={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            opacity: 1,
            transformStyle: "preserve-3d",
          }}
          data-aos="fade-up"
        >
          <img
            src={Startup}
            loading="lazy"
            alt=""
            className={styles.blogpostImage}
            data-aos="fade-up"
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.pageElobrateContentContainer} data-aos="fade-up">
          <p>
            Working for a startup can be an enticing career move, with the
            promise of innovative projects, a fast-paced environment, and the
            potential for significant career growth. Startups are often seen as
            the ideal place for young, ambitious professionals looking to make
            their mark in their industry. However, while working for a startup
            can offer many benefits, it's important to carefully consider the
            potential downsides before accepting a job offer.
          </p>
          <p>
            In the Indian context, startups have been on the rise in recent
            years, with a growing number of entrepreneurs launching new ventures
            in various sectors. With a booming economy and a vast pool of
            skilled talent, India has become a hub for startups in areas like
            technology, e-commerce, and healthcare. However, working for a
            startup in India can come with its own set of unique challenges,
            such as regulatory hurdles, funding constraints, and market
            competition.
          </p>
          <p>
            In this article, we'll explore the pros and cons of working for a
            startup, with a specific focus on the Indian context. We'll look at
            the benefits and drawbacks of working for a startup in India and
            provide tips on how to navigate the unique challenges of the Indian
            startup ecosystem. Whether you're a recent graduate, a mid-career
            professional, or an entrepreneur yourself, this article will help
            you make an informed decision about whether working for a startup is
            the right choice for you.
          </p>
          <p>Pros: </p>
          <ul
            start=""
            role="list"
            className={styles.pageElobrateContentUnorderList}
          >
            <li>
              Exciting Work Environment: Startups are known for their fast-paced
              and exciting work environment. Employees are often working on
              innovative projects that are pushing the boundaries of their
              industry.
            </li>
            <li>
              Opportunity to Learn and Grow: Working for a startup can provide
              the opportunity to learn new skills and gain valuable experience.
              Employees often have the chance to take on more responsibility and
              have a greater impact on the company's success.
            </li>
            <li>
              Flexibility: Startups are known for their flexibility, which can
              be a significant advantage for employees. This can include
              flexible work hours, remote work options, and the ability to work
              on projects that align with their interests and strengths.
            </li>
            <li>
              Sense of Ownership: Employees at startups often have a sense of
              ownership and pride in the company's success. They feel like they
              are making a difference and are part of something meaningful.
            </li>
          </ul>
          <p>Cons: </p>
          <ul
            start=""
            role="list"
            className={styles.pageElobrateContentUnorderList}
          >
            <li>
              High Risk: Startups are inherently risky, with a high failure
              rate. This means that there is a risk that the company may not
              succeed, leaving employees without a job.
            </li>
            <li>
              Limited Resources: Startups often have limited resources, which
              can impact the company's ability to pay competitive salaries and
              benefits. This can make it challenging for employees to make ends
              meet, especially in high-cost cities.
            </li>
            <li>
              Uncertainty: Working for a startup can be uncertain, with
              constantly changing priorities and goals. This can be challenging
              for employees who thrive in a more structured environment.
            </li>
            <li>
              Long Hours: Startups often require long hours and hard work to
              succeed, which can be demanding for employees who value work-life
              balance.
            </li>
          </ul>
          <p>Conclusion: </p>

          <p>
            Working for a startup can be an exciting and rewarding experience,
            but it's important to weigh the pros and cons before making a
            decision. In the Indian context, startups offer unique challenges
            and opportunities, and it's important to consider these when
            deciding whether to work for a startup. Startups offer a dynamic
            work environment that can provide employees with valuable
            experience, flexibility, and a sense of ownership. However, they
            also come with risks, uncertainty, limited resources, and long
            hours. If you're considering a startup job in India, it's important
            to do your research, ask questions, and make an informed decision
            based on your priorities and goals.
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default StartupBlog;
