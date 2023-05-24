import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import styles from "components/ui-components/Footer.module.css";

import turboTalentLogo from "assets/images/static/logo/turbo-talent.png";
import linkedinImage from "assets/images/static/social/linkedin.png";
import twitterImage from "assets/images/static/social/twitter.png";
import facebookImage from "assets/images/static/social/facebook.png";
import youtubeImage from "assets/images/static/social/youtube.png";
import instagramImage from "assets/images/static/social/instagram.png";
import privacyPolicyPdf from "assets/pdf/privacy-policy.pdf";
import termsOfUsePdf from "assets/pdf/terms-of-use.pdf";

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <Container maxWidth="xl">
        <div className={styles.logo__container} >
          <img
            src={turboTalentLogo}
            alt="TurboTalent"
            className={styles.footer__logo}
          />
        </div>

        <Grid
          container
          maxWidth="xl"
          spacing={2}
          className={styles.info__container}
        >
          <Grid sm={12} md={6} className={styles.copyright__container}>
            <p className={styles.copyright__text}>
              TurboTalent.Ai. Rights Reserved, 2023.
            </p>
            <a
              className={styles.copyright__link}
              href={privacyPolicyPdf}
              download="TurboTalent Privacy Policy"
              target="_blank"
            >
              Privacy Policy
            </a>
            <a
              className={styles.copyright__link}
              href={termsOfUsePdf}
              download="TurboTalent Terms Of Use"
              target="_blank"
            >
              Terms of Use
            </a>
          </Grid>

          <Grid sm={12} md={6} className={styles.social__container}>
            <a
              href="https://www.linkedin.com/company/turbotalent-ai"
              target="_blank"
            >
              <img
                className={styles.social__image}
                src={linkedinImage}
                alt="Linkedin"
              />
            </a>
            <a href="https://twitter.com/TurbotalentAI" target="_blank">
              <img
                className={styles.social__image}
                src={twitterImage}
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.facebook.com/people/TurboTalentAI/100092398201993/"
              target="_blank"
            >
              <img
                className={styles.social__image}
                src={facebookImage}
                alt="Facebook"
              />
            </a>
            <a href="https://www.youtube.com/@TurboTalentAI" target="_blank">
              <img
                className={styles.social__image}
                src={youtubeImage}
                alt="Youtube"
              />
            </a>
            <a href="https://www.instagram.com/turbotalent.ai/" target="_blank">
              <img
                className={styles.social__image}
                src={instagramImage}
                alt="Instagram"
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
