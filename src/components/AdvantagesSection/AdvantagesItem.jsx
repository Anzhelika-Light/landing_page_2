import ResponsiveButton from "../ResponsiveButton/ResponsiveButton";

import styles from "./advantages-section.module.css";

const AdvantagesItem = ({ img, text, title, button }) => {
  const elements = text.map((item) => <p className={styles.text}>{item}</p>);
  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{title}</h2>
        {elements}
        {button && (
          <ResponsiveButton className={styles.btnAdv}>
            Purchase Now
          </ResponsiveButton>
        )}
      </div>
    </li>
  );
};

export default AdvantagesItem;
