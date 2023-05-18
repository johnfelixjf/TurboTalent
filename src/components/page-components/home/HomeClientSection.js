import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "components/page-components/home/HomeClientSection.module.css";

import pdGroup from "assets/images/static/client/pd-group.png";
import sixDegrees from "assets/images/static/client/six-degrees.png";
import halbe from "assets/images/static/client/halbe.png";
import hydrameet from "assets/images/static/client/hydrameet.png";
import instrive from "assets/images/static/client/instrive.png";
import gigavus from "assets/images/static/client/gigavus.png";

const clients = [pdGroup, sixDegrees, halbe, hydrameet, instrive, gigavus];

const HomeClientSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <Container maxWidth="md" className={styles.client__section}>
      <Grid
        container
        maxWidth="xl"
        spacing={2}
        className={styles.client__container}
        data-aos="zoom-in"
      >
        {clients.map((item, idx) => (
          <Grid
            sx={6}
            md={2}
            key={idx}
            className={styles["client__image-container"]}
          >
            <img src={item} alt="" className={styles.client__image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeClientSection;
