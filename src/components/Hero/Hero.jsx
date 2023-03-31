import Button from "../Button/Button";

import styles from "./hero.module.css";

// import heroImg from "../../assets/img/hero.jpg";

const Hero = ({ items }) => {
  const elements = items.map(({ title, text }) => (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text[0]}</p>
      <p className={styles.text}>{text[1]}</p>
    </>
  ));
  return (
    <div className="container container--hero">
      <div className={styles.contentWrapper}>
        {/* <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p> */}
        {elements}
        <div className={styles.btnWrapper}>
          <Button className={styles.btnHeroFirst}>Purchase UI Kit</Button>
          <Button className={styles.btnHero}>Learn More</Button>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        {/* <img className={styles.img} src={heroImg} alt="Hero_img" /> */}
      </div>
    </div>
  );
};

export default Hero;
