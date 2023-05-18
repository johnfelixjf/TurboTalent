import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePreRegisterForm from "components/page-components/home/HomePreRegisterForm";

import styles from "components/page-components/home/HomeHeroSection.module.css";

import heroImage from "assets/images/static/hero.png";

const HomeHeroSection = () => {
  useEffect(() => {
    AOS.init({
      delay: 500, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    }); // Initialize AOS library
  }, []);

  return (
    <div className={styles.hero__section}>
      <Container maxWidth="xl">
        <Grid
          container
          maxWidth="xl"
          spacing={2}
          direction={{ xs: "column-reverse", md: "row" }}
          className={styles.hero__container}
        >
          <Grid sm={12} md={6}>
            <h1 className={styles.hero__text}>
              The Future of Careers Powered by the Future of Technology - Coming
              Soon
            </h1>

            <div className={styles["hero__form-container"]}>
              <HomePreRegisterForm />
            </div>
          </Grid>

          <Grid sm={12} md={6} className={styles["hero__image-container"]}>
            <img src={heroImage} alt="Hero" className={styles.hero__image} />
          </Grid>
        </Grid>
      </Container>

      <div className={styles.slogan__container}>
        <p className={styles.slogan__text} data-aos="zoom-in">
          <strong>Work with</strong> the <strong>next generation</strong> of{" "}
          <stong>companies</stong>
        </p>
      </div>
    </div>
  );
};

export default HomeHeroSection;
