import MainMenu from "../MainMenu/MainMenu";
import Button from "../Button/Button";

import "../../styles/common.css";
import styles from "./header.module.css";

import MenuItems from "../../data/menu.json";

const Header = () => {
  return (
    <div className="container">
      <MainMenu items={MenuItems} />
      <span className={styles.logo}>Landie</span>
      <Button className={styles.btnHeader}>Buy Now</Button>
    </div>
  );
};

export default Header;
