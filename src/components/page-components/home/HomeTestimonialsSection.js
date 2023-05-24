import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AOS from "aos";
import "aos/dist/aos.css";

import NextButton from "components/ui-components/NextButton";
import PreviousButton from "components/ui-components/PreviousButton";

import styles from "components/page-components/home/HomeTestimonialsSection.module.css";

import turboTalentLogoSquareImage from "assets/images/static/logo/turbo-talent-square.png";
import ilangovanImage from "assets/images/static/testimonials/ilangovan.png";
import anjaliImage from "assets/images/static/testimonials/anjali.png";

const testimonials = [
  {
    name: "Ilangovan",
    role: "Senior Frontend Developer",
    testimony:
      "Turbotalent helped me land a coding job with ease. Its intuitive interface made the job search process a breeze. Highly recommended for coders",
    image: ilangovanImage,
  },
  {
    name: "Anjali",
    role: "Senior Marketing Manager",
    testimony:
      "Turbotalent and its AI assistant Turbot made my job search effortless. It helped me find relevant opportunities and the career that I always wanted.",
    image: anjaliImage,
  },
];

const HomeTestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      delay: 500, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    }); // Initialize AOS library
  }, []);

  const [currentTestimony, setCurrentTestimony] = useState(0);

  const previousTestimonyHandler = () => {
    if (currentTestimony !== 0) {
      setCurrentTestimony((state) => state - 1);
    }
  };

  const nextTestimonyHandler = () => {
    if (currentTestimony + 1 !== testimonials.length) {
      setCurrentTestimony((state) => state + 1);
    }
  };

  return (
    <div className={styles.testimonials__section}>
      <Container maxWidth="xl">
        <p className={styles.testimonials__heading} data-aos="fade-up">
          TESTIMONIALS
        </p>

        <h1 className={styles.testimonials__title} data-aos="fade-up">
          See what our early users say about our job platform
        </h1>

        <Grid
          container
          maxWidth="xl"
          spacing={2}
          className={styles.testimonials__container}
        >
          <Grid
            xs={12}
            md={4}
            className={styles["testimonials__text-container"]}
            data-aos="fade-up"
          >
            <div className={styles["testimonials__logo-container"]}>
              <div className={styles.testimonials__logo}>
                <img src={turboTalentLogoSquareImage} alt="TurboTalent" />
              </div>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
                className={styles["testimonials__logo-buttons"]}
              >
                <PreviousButton
                  onClick={previousTestimonyHandler}
                  disabled={currentTestimony === 0}
                />
                <NextButton
                  onClick={nextTestimonyHandler}
                  disabled={currentTestimony + 1 === testimonials.length}
                />
              </Box>
            </div>

            <p className={styles.testimonials__testimony}>
              {`"${testimonials[currentTestimony].testimony}"`}
            </p>
            <p className={styles.testimonials__owner}>
              <span>{`${testimonials[currentTestimony].name}`}</span>
              {` - ${testimonials[currentTestimony].role}`}
            </p>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              className={styles.testimonials__buttons}
            >
              <PreviousButton
                onClick={previousTestimonyHandler}
                disabled={currentTestimony === 0}
              />
              <NextButton
                onClick={nextTestimonyHandler}
                disabled={currentTestimony + 1 === testimonials.length}
              />
            </Box>
          </Grid>

          <Grid xs={0} md={3}></Grid>

          <Grid
            xs={12}
            md={5}
            className={styles["testimonials__image-container"]}
          >
            <img
              data-aos="fade-up"
              className={styles.testimonials__image}
              src={testimonials[currentTestimony].image}
              alt={testimonials[currentTestimony].name}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeTestimonialsSection;
