import styles from "./about-section.module.css";

const AboutItems = ({ title, text }) => {
  return (
    <li className={styles.item}>
      <span className={styles.icon}></span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default AboutItems;
