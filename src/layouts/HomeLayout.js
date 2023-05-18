import Navbar from "components/ui-components/Navbar";
import Footer from "components/ui-components/Footer";

import styles from "layouts/HomeLayout.module.css";

const HomeLayout = (props) => {
  return (
    <div className={styles.layout__container}>
      <Navbar />
      <div className={styles.layout__content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
