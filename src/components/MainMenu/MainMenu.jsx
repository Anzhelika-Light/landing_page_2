import styles from "./main-menu.module.css";

const MainMenu = ({ items }) => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id} className={styles.item}>
      <a className={styles.link} href={link}>
        {text}
      </a>
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default MainMenu;
