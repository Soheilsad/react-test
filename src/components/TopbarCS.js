import { useMemo } from "react";
import styles from "./TopbarCS.module.css";

const TopbarCS = ({
  dimensions,
  propBackgroundColor,
  propBorder,
  propColor,
}) => {
  const btnCSViewsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const viewsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.topbarCs}>
      <div className={styles.btnCsViewsParent}>
        <div className={styles.btnCsViews} style={btnCSViewsStyle}>
          <img className={styles.vectorIcon} alt="" src={dimensions} />
          <div className={styles.views} style={viewsStyle}>
            Views
          </div>
        </div>
        <div className={styles.btnCsAdd}>
          <img className={styles.vectorIcon1} alt="" src="/vector22.svg" />
          <div className={styles.views}>Add</div>
        </div>
        <div className={styles.btnCsAdd}>
          <img className={styles.vectorIcon2} alt="" src="/vector9.svg" />
          <div className={styles.views}>Export</div>
        </div>
      </div>
      <div className={styles.topbarCsChild} />
    </div>
  );
};

export default TopbarCS;
