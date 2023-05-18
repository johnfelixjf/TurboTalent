import { Container } from "@mui/material";

import styles from "components/page-components/home/HomeVideoSection.module.css";

const HomeVideoSection = () => {
  return (
    <Container maxWidth="md" className={styles.video__section}>
      <iframe
        className={styles.video__iframe}
        src="https://www.youtube.com/embed/aJMXlVw8AfA?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen=""
        title="TurboTalent an Introduction"
      ></iframe>
    </Container>
  );
};

export default HomeVideoSection;
