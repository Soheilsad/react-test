import { useMemo } from "react";
import styles from "./Filter.module.css";

const Filter = ({ filterFlexShrink }) => {
  const filterStyle = useMemo(() => {
    return {
      flexShrink: filterFlexShrink,
    };
  }, [filterFlexShrink]);

  return (
    <div className={styles.filter} style={filterStyle}>
      <img className={styles.vectorIcon} alt="" src="/vector24.svg" />
      <div className={styles.filter1}>Filter</div>
    </div>
  );
};

export default Filter;
