import Button from "../Button/Button";

import styles from "./hero.module.css";

const Hero = ({ title, text }) => {
  return (
    <div className="container">
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
        <div className={styles.btnWrapper}>
          <Button text="Purchase UI Kit" />
          <Button text="Learn More" />
        </div>
      </div>
      {/* <span className={styles.bgImg}></span> */}
      <img className={styles.img} src="../../img/1.jpg" alt="Hero_img" />
    </div>
  );
};

export default Hero;
