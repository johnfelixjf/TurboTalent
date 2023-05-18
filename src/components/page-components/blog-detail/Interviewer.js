import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./Interviewer.module.css";

import interviewImage from "../../../assets/images/static/blog/no-call.webp";

const Interviewer = () => {
  return (
    <Grid container direction="column" className={styles.blogpostRoot}>
      {/* Blog post header */}
      <Grid item className={styles.blogpostHeaderBlock}>
        {/* Badge and date */}
        <div className={styles.headerBadge}>
          <div className={styles.headerBadgeLight}>
            <div>New</div>
          </div>
          <div>April 23, 2023</div>
        </div>
        {/* Blog title */}
        <div className={styles.blogpostTitle}>
          <Typography variant="h2">
            No Call from Your Interviewer? Here's What to Do Next.
          </Typography>
        </div>
        {/* Blog post content */}
        <Typography variant="body1" className={styles.paragraphLarge}>
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
        >
          <img
            src={interviewImage}
            loading="lazy"
            alt=""
            className={styles.blogpostImage}
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.pageElobrateContentContainer}>
          <p>
            Summary: Waiting for an interviewer to call you back after an
            interview can be nerve-wracking. However, there are several steps
            you can take to check for their intent, follow up professionally,
            and increase your chances of landing that dream job. In this blog
            post, we will guide you through each step in detail.
          </p>
          <p>Body: </p>
          <ol start="" role="list">
            <li>
              Wait for a reasonable amount of time: The first step is to wait
              for a reasonable amount of time before taking any action.
              Generally, it's reasonable to wait for a week or so after the
              scheduled interview date before following up. This gives the
              interviewer enough time to review the candidates and make a
              decision.
            </li>
            <li>
              Check for the intent: After waiting for a reasonable amount of
              time, try to check for their intent. It's possible that they may
              have forgotten to call or had an emergency. You can send them a
              polite email or make a phone call to inquire about the status of
              your application. Be specific in your inquiry, reminding them of
              the position you interviewed for and the date of the interview.
            </li>
            <li>
              Follow up professionally: When following up, it's important to
              maintain professionalism. Start by thanking them for their time
              and consideration during the interview process. Next, express your
              continued interest in the position and ask if they have any
              updates or feedback for you. Keep your tone friendly, but not
              overly familiar.
            </li>
            <li>
              Keep your options open: While waiting for the response, don't stop
              applying for other job opportunities. It's essential to keep your
              options open, so you don't miss out on any potential job offers.
              You can continue to pursue other job opportunities while waiting
              to hear back from the interviewer.
            </li>
            <li>
              Send a follow-up email: If you haven't received a response to your
              follow-up, consider sending another email. This can help keep your
              application at the top of their inbox. In this email, reiterate
              your interest in the position, and ask if there is any additional
              information they need from you. Again, keep your tone friendly,
              professional, and not pushy.
            </li>
            <li>
              Move on gracefully: If the interviewer still doesn't respond after
              multiple follow-ups, it's time to move on. Accept the fact that
              you may not get the job and focus on other opportunities. It's
              important to remain graceful and professional throughout the
              process, as you never know when your paths may cross again. You
              can thank them for the opportunity and let them know that you're
              still interested in working with them in the future.
            </li>
            <li>
              Takeaway Lessons: Every experience is a learning opportunity, so
              take the lessons you've learned from this process and use them to
              your advantage in the future. If you received feedback, use it to
              improve your interviewing skills. If you didn't receive feedback,
              analyze the situation and see if there's anything you could have
              done differently.
            </li>
            {/* <li>
              Keep it concise: ATS systems prefer concise resumes that are easy
              to scan. Keep your resume to one or two pages and avoid lengthy
              paragraphs or sections.
            </li>
            <li>
              Include relevant information: ATS systems are designed to identify
              specific information on your resume, such as job titles,
              companies, and dates of employment. Make sure to include this
              information in a clear and concise manner.
            </li>
            <li>
              Use a simple font: While using a unique font might make your
              resume stand out, it can be a hindrance in the ATS screening
              process. Stick to simple and commonly used fonts like Arial, Times
              New Roman, or Calibri.
            </li> */}
          </ol>
          <p>Conclusion:</p>
          <p>
            Waiting for an interviewer to call you back can be stressful, but
            it's important to remain patient, professional, and proactive.
            Following the steps outlined in this blog post can help you increase
            your chances of landing your dream job, even if the interviewer
            doesn't call you back on time. Remember that job hunting is a
            process, and every experience can help you improve your skills and
            find the right job for you.
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Interviewer;
