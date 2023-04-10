import AboutItems from "./AboutItems";

import styles from "./about-section.module.css";

import aboutImg from "../../assets/img/about.jpg";

const AboutSection = ({ title, text, items }) => {
  const descriptionElements = text.map((item) => (
    <p className={styles.sectionText}>{item}</p>
  ));
  const elements = items.map(({ id, ...props }) => (
    <AboutItems key={id} {...props} />
  ));
  return (
    <div className="container container--about">
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {descriptionElements}
        <ul className={styles.list}>{elements}</ul>
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
