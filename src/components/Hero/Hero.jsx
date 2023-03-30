import Button from "../Button/Button";

import styles from "./hero.module.css";

import heroImg from "../../assets/img/hero.jpg";

const Hero = ({ title, text }) => {
  return (
    <div className="container container--hero">
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
        <div className={styles.btnWrapper}>
          <Button className={styles.marg}>Purchase UI Kit</Button>
          <Button>Learn More</Button>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={heroImg} alt="Hero_img" />
      </div>
    </div>
  );
};

export default Hero;
