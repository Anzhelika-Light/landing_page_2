import styles from "./section.module.css";

const Section = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
