import Button from "../Button/Button";
import MainMenu from "../MainMenu/MainMenu";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

import styles from "./footer.module.css";

import MenuItems from "../../data/menu.json";
import SocialNetworksIcons from "../../data/social-networks.json";

const Footer = () => {
  return (
    <div className="container container--footer">
      <div className={styles.footerTop}>
        <p className={styles.copyright}>©2020 Yourcompany</p>
        <p className={styles.logo}>Landie</p>
        <Button text="Purchase now" />
      </div>
      <div className={styles.footerBottom}>
        <div>
          <MainMenu items={MenuItems} />
        </div>
        <div>
          <SocialNetworks items={SocialNetworksIcons} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
