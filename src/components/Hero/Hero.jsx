import FixedButton from "../FixedButton/FixedButton";

import styles from "./hero.module.css";

const Hero = ({ title, text }) => {
  const elements = text.map((item) => <p className={styles.text}>{item}</p>);
  return (
    <div className="container container--hero">
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{title}</h1>
        {elements}
        <div className={styles.btnWrapper}>
          <FixedButton className={styles.btnHeroFirst}>
            Purchase UI Kit
          </FixedButton>
          <FixedButton className={styles.btnHero}>Learn More</FixedButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
