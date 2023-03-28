import AboutItems from "./AboutItems";

import styles from "./about-section.module.css";

const AboutSection = ({ title, text, items }) => {
  const elements = items.map(({ id, ...props }) => (
    <AboutItems key={id} {...props} />
  ));
  return (
    <div className="container">
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionText}>{text}</p>
        <ul className={styles.list}>{elements}</ul>
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src="../img/2.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
