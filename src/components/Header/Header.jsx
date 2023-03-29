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
      <Button text="Buy Now" />
    </div>
  );
};

export default Header;
