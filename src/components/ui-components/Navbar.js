import styles from "components/ui-components/Navbar.module.css";

import turboTalentLogo from "assets/images/static/logo/turbo-talent.png";

const Navbar = () => {
  return (
    <nav className={styles.nav__container}>
      <img
        src={turboTalentLogo}
        alt="TurboTalent"
        className={styles.nav__logo}
      />
    </nav>
  );
};

export default Navbar;
