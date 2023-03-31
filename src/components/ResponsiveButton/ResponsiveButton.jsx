import styles from "./responsive-button.module.css";

const ResponsiveButton = ({ children, className = "" }) => {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
};

export default ResponsiveButton;
