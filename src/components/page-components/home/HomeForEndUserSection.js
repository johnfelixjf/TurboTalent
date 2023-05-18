import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import styles from "components/page-components/home/HomeForEndUserSection.module.css";

import forJobSeekersImage from "assets/images/static/job-seekers.png";
import forRecruitersImage from "assets/images/static/for-recruiters.png";

const HomeForEndUserSection = () => {
  return (
    <div className={styles.for__section}>
      <Container maxWidth="xl">
        <div className={styles["for__section-container"]}>
          <Grid
            container
            maxWidth="xl"
            spacing={2}
            direction={{ xs: "column-reverse", md: "row" }}
            className={styles.for__container}
          >
            <Grid sm={12} md={6} className={styles["for__image-container"]}>
              <img
                src={forJobSeekersImage}
                alt="Recruiters"
                className={styles.for__image}
              />
            </Grid>

            <Grid sm={12} md={6}>
              <h1 className={styles.for__title}>For Job Seekers</h1>

              <ul className={styles.for__info}>
                <li className={styles["for__info-item"]}>
                  AI-powered job matching tools to help you find opportunities
                  that you are best suited for
                </li>
                <li className={styles["for__info-item"]}>
                  Build stunning and impactful resumes with our AI-powered
                  resume builder
                </li>
                <li className={styles["for__info-item"]}>
                  Present yourself in the best light and get noticed by the top
                  employers
                </li>

                <h3 className={styles["for__sub-title"]}>
                  Make your profile future ready.
                </h3>
              </ul>
            </Grid>
          </Grid>

          <Grid
            container
            maxWidth="xl"
            spacing={2}
            className={styles.for__container}
          >
            <Grid sm={12} md={6}>
              <h1 className={styles.for__title}>For Recruiters</h1>

              <ul className={styles.for__info}>
                <li className={styles["for__info-item"]}>
                  Reduce candidate screening time by as much as 90% with our
                  detailed and robust screening assessments
                </li>
                <li className={styles["for__info-item"]}>
                  Create the perfect job descriptions with support from our AI
                  assistant
                </li>
                <li className={styles["for__info-item"]}>
                  Detailed reports evaluating the candidates hard skills, soft
                  skills and other valuable metrics
                </li>

                <h3 className={styles["for__sub-title"]}>
                  Gatekeep your time only for the best candidates.
                </h3>
              </ul>
            </Grid>

            <Grid sm={12} md={6} className={styles["for__image-container"]}>
              <img
                src={forRecruitersImage}
                alt="Job Seekers"
                className={styles.for__image}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default HomeForEndUserSection;
