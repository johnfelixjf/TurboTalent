import styles from "components/page-components/home/TurbotFeatureItem.module.css";

const TurbotFeatureItem = (props) => {
  return (
    <div className={styles.feature__container}>
      <div className={styles.feature__image}>
        <img width="40px" height="40px" src={props.image} alt="" />
      </div>

      <div>
        <p className={styles.feature__title}>{props.title}</p>
        <p className={styles.feature__info}>{props.info}</p>
      </div>
    </div>
  );
};

export default TurbotFeatureItem;
