import styles from "./main-menu.module.css";

const MainMenu = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          Home
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          About
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default MainMenu;
