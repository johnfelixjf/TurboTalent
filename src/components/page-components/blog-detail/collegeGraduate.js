import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./collegeGraduate.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

import collegeGraduateImage from "../../../assets/images/static/blog/navigate-job.png";

const CollegeGraduate = () => {
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
            Navigating the Job Market as a Recent College Graduate.
          </Typography>
        </div>
        {/* Blog post content */}
        <Typography
          variant="body1"
          className={styles.paragraphLarge}
          data-aos="fade-up"
        >
          <p>
            Entering the job market as a recent college graduate can be
            intimidating and overwhelming. With so many options and so much
            competition, it's important to have a plan in place and know how to
            stand out from the crowd. In this blog post, we'll offer advice and
            tips for recent college graduates on how to navigate the job market
            successfully.
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
        >
          <img
            src={collegeGraduateImage}
            loading="lazy"
            alt=""
            className={styles.blogpostImage}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.pageElobrateContentContainer}>
          <p data-aos="fade-up">
            Entering the job market as a recent college graduate can be both
            exciting and daunting. While it's a time to celebrate your academic
            achievements, it's also a time to start planning for your
            professional future. The job market is competitive, and as a recent
            graduate, you'll be competing against candidates with more
            experience. However, there are steps you can take to stand out from
            the crowd and land your dream job. In this blog post, we'll offer
            advice and tips for navigating the job market as a recent college
            graduate. From developing a plan to networking, preparing for
            interviews, and staying positive, we'll cover everything you need to
            know to kickstart your career.
          </p>
          <ul
            start=""
            role="list"
            className={styles.pageElobrateContentUnorderList}
            data-aos="fade-up"
          >
            <li>
              Start with a Plan: Before diving into the job market, take some
              time to develop a plan. Research industries that interest you,
              consider the skills and experience you have to offer, and
              determine what types of positions align with your goals.
            </li>
            <li>
              Tailor Your Resume: A great resume is key to getting noticed by
              potential employers. Make sure to tailor your resume to the job
              you're applying for, highlighting your relevant skills and
              experience. Consider including any internships, volunteer work, or
              extracurricular activities that showcase your abilities.
            </li>
            <li>
              Utilize Networking: Networking is a valuable tool for job seekers,
              especially recent college graduates. Attend job fairs, industry
              events, and connect with alumni from your school. Reach out to
              family and friends and let them know you're on the job market.
            </li>
            <li>
              Be Proactive: Don't just sit and wait for job opportunities to
              come to you. Be proactive and search for job openings, research
              companies you're interested in, and make connections with
              potential employers. Consider reaching out to recruiters, applying
              to entry-level positions, and considering internships or freelance
              work to build your portfolio.
            </li>
            <li>
              Prepare for Interviews: Once you land an interview, make sure
              you're prepared. Research the company, prepare answers to common
              interview questions, and practice your responses with a friend or
              family member. Dress professionally and arrive on time for the
              interview.
            </li>
            <li>
              Follow Up: After an interview, make sure to follow up with a
              thank-you email or letter. Reiterate your interest in the
              position, and thank the interviewer for their time. This can help
              keep you top of mind and showcase your professionalism.
            </li>
            <li>
              Stay Positive: Job hunting can be a long and challenging process,
              but it's important to stay positive and persistent. Don't get
              discouraged by rejection or lack of response. Keep working on your
              skills, make connections, and continue to pursue opportunities
              that align with your goals.
            </li>
          </ul>
          <p data-aos="fade-up">
            Navigating the job market as a recent college graduate can be
            overwhelming, but with a plan, preparation, and persistence, you can
            stand out from the crowd and land your dream job. Follow the tips
            and advice outlined in this blog post, and remember to stay positive
            and focused on your goals. With dedication and hard work, you'll
            find success in the job market. ‍
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default CollegeGraduate;
