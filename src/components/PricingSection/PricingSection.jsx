import Button from "../Button/Button";

import styles from "./pricing.module.css";

const PricingSection = ({ title, text, price, note1, note2 }) => {
  return (
    <div className="container">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price}</p>
      <p className={styles.note1}>{note1}</p>
      <p className={styles.note2}>{note2}</p>
      <Button text="Purchase Now" />
    </div>
  );
};

export default PricingSection;
