import AdvantagesItem from "./AdvantagesItem";

import styles from "./advantages-section.module.css";

const AdvantagesSection = ({ items }) => {
  const elements = items.map(({ id, ...props }) => (
    <AdvantagesItem key={id} {...props} />
  ));

  return (
    <div className="container">
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default AdvantagesSection;
