import styles from "./social-networks.module.css";

import { ImFacebook } from "react-icons/im";
// import { ImLinkedin2 } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const SocialNetworks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <ImFacebook className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <FaLinkedinIn className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <ImTwitter className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <ImYoutube className={styles.icon} size={16} />
      </li>
      <li className={styles.item}>
        <BsInstagram className={styles.icon} size={16} />
      </li>
    </ul>
  );
};

export default SocialNetworks;
