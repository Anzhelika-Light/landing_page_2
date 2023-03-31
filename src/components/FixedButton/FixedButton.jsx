import styles from "./fixed-button.module.css";

const FixedButton = ({ children, className = "" }) => {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
};

export default FixedButton;
