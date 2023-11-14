import Filter from "./Filter";
import styles from "./PolicyFilterContainer.module.css";

const PolicyFilterContainer = () => {
  return (
    <div className={styles.filterWrapper}>
      <Filter filterFlexShrink="0" />
    </div>
  );
};

export default PolicyFilterContainer;
