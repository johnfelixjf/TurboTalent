import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./resume.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

import resume from "../../../assets/images/static/blog/write-resume.png";

const Resume = () => {
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
            Writing a resume for AI because AI is most likely to see it first.
          </Typography>
        </div>
        {/* Blog post content */}
        <Typography
          variant="body1"
          className={styles.paragraphLarge}
          data-aos="fade-up"
        >
          <p>
            {" "}
            The skills you need to write a standout resume are essential in
            today's job market. With the rise of Applicant Tracking Systems
            (ATS) based on Artificial Intelligence (AI), you must also ensure
            that your resume passes the digital screening process. Here are some
            tips for navigating the market.
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
            src={resume}
            loading="lazy"
            alt=""
            className={styles.blogpostImage}
            data-aos="fade-up"
          />
        </div>
      </Grid>
      <Grid item>
        <div className={styles.pageElobrateContentContainer}>
          <p data-aos="fade-up">
            In today's job market, creating a resume that stands out is crucial.
            However, with the rise of Artificial Intelligence (AI) based
            Applicant Tracking Systems (ATS), it is equally important to ensure
            that your resume passes the digital screening process. According to
            Zety, a recruiter receives more than 250 resumes for an open
            position, on average — only 12% meet the requirements for the
            position. Additionally, over 98% of Fortune 500 companies use ATS
            systems to filter out resumes in the initial screening process, as
            found in a study by Jobscan.
          </p>
          <p data-aos="fade-up">
            Resume screening tools typically fall into one of three categories:
            keyword-based, grammar-based, and statistical, as described in an
            article by TopResume. These systems use AI to analyze resumes and
            filter out candidates based on specific criteria. However, a study
            by Ideal found that AI-based screening tools can reduce the time to
            hire by up to 75%, with an average time savings of 23 hours per
            hire.
          </p>
          <p data-aos="fade-up">
            So, how can you create a resume that is likely to do better in
            AI-based ATS systems? Here are some tips to consider:
          </p>
          <ul
            start=""
            role="list"
            className={styles.pageElobrateContentUnorderList}
            data-aos="fade-up"
          >
            <li>
              Use relevant keywords: Keyword-based ATS systems scan resumes for
              specific words and phrases that match the job description. So,
              it's important to use relevant keywords and phrases that align
              with the job requirements. According to a survey by CareerBuilder,
              55% of HR managers use some form of AI-based resume screening
              tools to filter out resumes.
            </li>
            <li>
              Tailor your resume for each job: Customizing your resume for each
              job you apply for is essential. Use the job description as a guide
              to identify the most important requirements and tailor your resume
              accordingly. A survey of 1,000 recruiters conducted by Jobvite
              found that 53% of recruiters reported using some form of AI-based
              tools to screen candidates.
            </li>
            <li>
              Use simple and clear formatting: While a visually appealing resume
              might grab a recruiter's attention, it might not fare well in an
              ATS. It's best to stick to simple and clear formatting, as found
              in an article by TopResume. A study by Ideal found that 75% of
              resumes are rejected before they ever reach a human recruiter due
              to being filtered out by an ATS system.
            </li>
            <li>
              Use standard section headings: Standard section headings like
              "Work Experience," "Education," "Skills," etc. make it easier for
              ATS systems to scan your resume. These section headings act as
              signposts that direct the ATS to the relevant information on your
              resume.
            </li>
            <li>
              Spell-check and proofread your resume: Grammar-based and
              statistical ATS systems use predefined rules to analyze the text
              on your resume. Avoid grammatical errors and spelling mistakes, as
              they might confuse the ATS and lead to your resume being rejected.
            </li>
            <li>
              Use bullet points: Bullet points make it easier for ATS systems to
              scan your resume and identify the most important information. Use
              bullet points to highlight your achievements, responsibilities,
              and skills.
            </li>
            <li>
              Avoid images and graphics: Images and graphics might make your
              resume visually appealing, but they can confuse ATS systems. Stick
              to text-based resumes, as they are more likely to pass the ATS
              screening process.
            </li>
            <li>
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
            </li>
          </ul>
          <p data-aos="fade-up">
            In conclusion, with the rise of AI-based ATS systems, it's important
            to optimize your resume to pass the initial screening process. By
            incorporating these tips, you can create a resume that is likely to
            do better in ATS systems and increase your chances of landing an
            interview.
          </p>
          <p data-aos="fade-up">
            It's important to note that while optimizing your resume for ATS
            systems is essential, it's equally important to create a resume that
            appeals to human recruiters. After all, ATS systems are designed to
            filter out candidates based on specific criteria, but it's
            ultimately up to human recruiters to make the final hiring
            decisions.
          </p>
          <p data-aos="fade-up">
            Therefore, it's essential to strike a balance between optimizing
            your resume for ATS systems and creating a resume that showcases
            your skills and achievements. By doing so, you can create a resume
            that stands out to both ATS systems and human recruiters.
          </p>
          <p data-aos="fade-up">
            In summary, optimizing your resume for AI-based ATS systems is
            crucial in today's job market. By using relevant keywords, tailoring
            your resume for each job, using simple formatting and standard
            section headings, spell-checking and proofreading, using bullet
            points, avoiding images and graphics, keeping it concise, including
            relevant information, and using a simple font, you can create a
            resume that is likely to pass the ATS screening process.
          </p>
          <p data-aos="fade-up">
            However, it's important to remember that ATS systems are just one
            aspect of the job application process. Networking, gaining
            experience, and building your skills are all important components of
            landing your dream job. By combining these strategies with an
            optimized resume, you can increase your chances of success in
            today's competitive job market.
          </p>
          <p data-aos="fade-up">
            <strong>References:</strong>
          </p>
          <ul
            start=""
            role="list"
            className={styles.pageElobrateContentRef}
            data-aos="fade-up"
          >
            <li className={styles.pageElobrateContentRefLi}>
              Zety:{" "}
              <a href="https://zety.com/blog/how-many-resumes-do-recruiters-receive">
                https://zety.com/blog/how-many-resumes-do-recruiters-receive
              </a>
            </li>
            <li className={styles.pageElobrateContentRefLi}>
              Jobscan:{" "}
              <a href="https://www.jobscan.co/blog/resume-statistics/">
                https://www.jobscan.co/blog/resume-statistics/
              </a>
            </li>
            <li className={styles.pageElobrateContentRefLi}>
              TopResume:{" "}
              <a href="https://www.topresume.com/career-advice/how-to-write-an-attractive-resume">
                https://www.topresume.com/career-advice/how-to-write-an-attractive-resume
              </a>
            </li>
            <li className={styles.pageElobrateContentRefLi}>
              Ideal:{" "}
              <a href="https://ideal.com/ai-recruiting-stats/">
                https://ideal.com/ai-recruiting-stats/
              </a>
            </li>
            <li className={styles.pageElobrateContentRefLi}>
              CareerBuilder:{" "}
              <a href="https://www.careerbuilder.com/advice/human-capital-management/ai-and-the-hiring-process">
                https://www.careerbuilder.com/advice/human-capital-management/ai-and-the-hiring-process
              </a>
            </li>
            <li className={styles.pageElobrateContentRefLi}>
              Jobvite:{" "}
              <a href="https://www.jobvite.com/blog/2019-recruiting-benchmark-report/">
                https://www.jobvite.com/blog/2019-recruiting-benchmark-report/
              </a>
            </li>
            <li className={styles.pageElobrateContentRefLi}>
              The Balance Careers:{" "}
              <a href="https://www.thebalancecareers.com/how-to-beat-resume-screening-systems-2058491">
                https://www.thebalancecareers.com/how-to-beat-resume-screening-systems-2058491
              </a>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default Resume;
