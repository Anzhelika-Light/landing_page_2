import styles from "./button.module.css";

const Button = ({ children, className = "" }) => {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
};

export default Button;
