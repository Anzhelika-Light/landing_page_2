import Button from "../Button/Button";

import styles from "./pricing.module.css";

const PricingSection = () => {
  return (
    <div className="container">
      <h2 className={styles.title}>A Price To Suit Everyone</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus{" "}
      </p>
      <p className={styles.price}>$40</p>
      <p className={styles.note1}>UI Design Kit</p>
      <p className={styles.note2}>See, One price. Simple.</p>
      <Button text="Purchase Now" />
    </div>
  );
};

export default PricingSection;
