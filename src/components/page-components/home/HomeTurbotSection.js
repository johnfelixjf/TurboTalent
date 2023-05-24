import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TurbotFeatureItem from "components/page-components/home/TurbotFeatureItem";

import styles from "components/page-components/home/HomeTurbotSection.module.css";

import meetTurbotImage from "assets/images/static/meet-turbot.png";
import turbotSaveImage from "assets/images/static/turbot/save.png";
import turbotProvideImage from "assets/images/static/turbot/provide.png";
import turbotRecomendImage from "assets/images/static/turbot/recomend.png";

const turbotFeatures = [
  {
    title: "Save you the effort of repeat work AND do it in style",
    info: "Turbot can generate job descriptions, review and clean up resumes and ensure that time spent on grammar, spellings etc are a thing of the past.",
    image: turbotSaveImage,
  },
  {
    title: "Provide powerful insights to better prepare you",
    info: "Provide you with insights on how to improve your visibility and match your skills to job requirements and ensurie that your application materials are optimized for success.",
    image: turbotProvideImage,
  },
  {
    title:
      "Recommend the best opportunities for you AND prepare you before applying",
    info: "identify the best opportunities based on you skills, experience, and preferences. Turbot helps job seekers find the most relevant and promising job openings in their desired field.",
    image: turbotRecomendImage,
  },
];

const HomeTurbotSection = () => {
  useEffect(() => {
    AOS.init({
      delay: 400, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    }); // Initialize AOS library
  }, []);

  return (
    <div className={styles.turbot__section}>
      <Container maxWidth="xl" className={styles["turbot__section-container"]}>
        <Grid
          container
          maxWidth="xl"
          spacing={2}
          className={styles.turbot__container}
        >
          <Grid sm={12} md={6} className={styles["turbot__image-container"]}>
            <img
              src={meetTurbotImage}
              alt="Turbot"
              className={styles.turbot__image}
              data-aos="fade-up"
            />
          </Grid>

          <Grid sm={12} md={6}>
            <p className={styles.turbot__heading}>MEET TURBOT</p>

            <h1 className={styles.turbot__title}>
              Your own AI assistant dedicated to saving to time and effort
            </h1>

            <div className={styles.turbot__features} data-aos="fade-up">
              {turbotFeatures.map((item) => (
                <TurbotFeatureItem
                  key={item.title}
                  title={item.title}
                  info={item.info}
                  image={item.image}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeTurbotSection;
