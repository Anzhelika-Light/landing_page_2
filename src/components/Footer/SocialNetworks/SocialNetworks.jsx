import styles from "./social-networks.module.css";

// import { ImFacebook } from "react-icons/im";
// import { FaLinkedinIn } from "react-icons/fa";
// import { ImTwitter } from "react-icons/im";
// import { ImYoutube } from "react-icons/im";
// import { BsInstagram } from "react-icons/bs";

import { ReactComponent as FacebookIcon } from "../../../assets/img/Facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/img/LinkedIn.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/Twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/img/Youtube.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/img/Instagram.svg";

const SocialNetworks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <FacebookIcon className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <LinkedInIcon className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <TwitterIcon className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <YoutubeIcon className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <InstagramIcon className={styles.icon} size={16} />
      </li>
    </ul>
  );
};

export default SocialNetworks;
