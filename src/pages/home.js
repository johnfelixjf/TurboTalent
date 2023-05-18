import HomeLayout from "layouts/HomeLayout";
import HomeHeroSection from "components/page-components/home/HomeHeroSection";
import HomePreRegisterSection from "components/page-components/home/HomePreRegisterSection";
import HomeForEndUserSection from "components/page-components/home/HomeForEndUserSection";
import HomeTurbotSection from "components/page-components/home/HomeTurbotSection";
import HomeClientSection from "components/page-components/home/HomeClientSection";
import HomeVideoSection from "components/page-components/home/HomeVideoSection";
import HomeTestimonialsSection from "components/page-components/home/HomeTestimonialsSection";
import HomeBlogSection from "components/page-components/home/HomeBlogSection";

const HomePage = () => {
  return (
    <HomeLayout>
      <HomeHeroSection />
      <HomeClientSection />
      <HomeVideoSection />
      <HomeForEndUserSection />
      <HomeTurbotSection />
      <HomeTestimonialsSection />
      <HomeBlogSection />
      <HomePreRegisterSection />
    </HomeLayout>
  );
};

export default HomePage;
