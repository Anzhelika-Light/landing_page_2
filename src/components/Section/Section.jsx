// import styles from "./section.module.css";

const Section = ({ children, className = "" }) => {
  return <section className={className}>{children}</section>;
};

export default Section;
