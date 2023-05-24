import { useRef } from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NextButton from "components/ui-components/NextButton";
import PreviousButton from "components/ui-components/PreviousButton";
import BlogItem from "components/page-components/home/BlogItem";
import { blogs } from "utils/blogs";

import styles from "components/page-components/home/HomeBlogSection.module.css";

const blogSliderSettings = {
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  initialSlide: 0,
  variableWidth: true,
};

const HomeBlogSection = () => {
  useEffect(() => {
    AOS.init({
      delay: 400, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    }); // Initialize AOS library
  }, []);

  const slider = useRef(null);

  const previousTestimonyHandler = () => {
    slider?.current?.slickPrev();
  };

  const nextTestimonyHandler = () => {
    slider?.current?.slickNext();
  };

  return (
    <div className={styles.blog__section}>
      <Container maxWidth="xl">
        <p className={styles.blog__heading}>BLOG</p>

        <Grid container maxWidth="xl" spacing={2}>
          <Grid xs={12} md={8} data-aos="fade-up">
            <h1 className={styles.blog__title}>
              Get the latest news about jobs!
            </h1>
          </Grid>

          <Grid xs={12} md={4}>
            <Box className={styles.blog__buttons}>
              <PreviousButton onClick={previousTestimonyHandler} />
              <NextButton onClick={nextTestimonyHandler} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" data-aos="fade-up">
        <Slider ref={slider} {...blogSliderSettings}>
          {blogs.map((item) => (
            <BlogItem
              key={item.title}
              id={item.id}
              category={item.category}
              title={item.title}
              date={item.date}
              image={item.image}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default HomeBlogSection;
