import { Container } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePreRegisterForm from "components/page-components/home/HomePreRegisterForm";

import styles from "components/page-components/home/HomePreRegisterSection.module.css";

import turboTalentLogoSquareImage from "assets/images/static/logo/turbo-talent-square.png";

const HomePreRegisterSection = () => {
  useEffect(() => {
    AOS.init({
      delay: 500, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    }); // Initialize AOS library
  }, []);

  return (
    <div className={styles["pre-register__section"]}>
      <Container maxWidth="xl" className={styles["pre-register__form-wrapper"]}>
        <Container
          maxWidth="md"
          className={styles["pre-register__form-container"]}
        >
          <div className={styles["pre-register__logo"]}>
            <img src={turboTalentLogoSquareImage} alt="TurboTalent" />
          </div>

          <div>
            <h1 className={styles["pre-register__title"]}>Pre-register now</h1>
            <p className={styles["pre-register__info"]}>
              "Pre-register for for early access toTurbot, your AI job search
              assistant. Get personalized recommendations, update your resume,
              and apply with confidence to your dream job."
            </p>
          </div>

          <HomePreRegisterForm />
        </Container>
      </Container>
    </div>
  );
};

export default HomePreRegisterSection;
