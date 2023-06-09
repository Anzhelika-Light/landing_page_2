import FixedButton from "../FixedButton/FixedButton";

import styles from "./pricing.module.css";

import PricingBg from "../../assets/img/pricing.jpg";

const PricingSection = () => {
  return (
    <div className="container container--pricing">
      <h2 className={styles.title}>A Price To Suit Everyone</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus{" "}
      </p>
      <p className={styles.price}>$40</p>
      <p className={styles.note1}>UI Design Kit</p>
      <p className={styles.note2}>See, One price. Simple.</p>
      <FixedButton className={styles.btnPricing}>Purchase Now</FixedButton>
      <img className={styles.img} src={PricingBg} alt="" />
    </div>
  );
};

export default PricingSection;
