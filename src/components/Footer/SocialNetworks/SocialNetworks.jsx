import styles from "./social-networks.module.css";

const SocialNetworks = ({ items }) => {
  const elements = items.map((item) => <li className={styles.item}>{item}</li>);
  return <ul className={styles.list}>{elements}</ul>;
};

export default SocialNetworks;
