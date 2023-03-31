import MainMenu from "../MainMenu/MainMenu";
import ResponsiveButton from "../ResponsiveButton/ResponsiveButton";

import "../../styles/common.css";
import styles from "./header.module.css";

import MenuItems from "../../data/menu.json";

const Header = () => {
  return (
    <div className="container">
      <MainMenu items={MenuItems} />
      <span className={styles.logo}>Landie</span>
      <ResponsiveButton className={styles.btnHeader}>Buy Now</ResponsiveButton>
    </div>
  );
};

export default Header;
