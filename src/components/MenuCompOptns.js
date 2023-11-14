import { useMemo } from "react";
import styles from "./MenuCompOptns.module.css";

const MenuCompOptns = ({ btnCompAutoBackgroundColor, autoColor }) => {
  const btnCompAutoStyle = useMemo(() => {
    return {
      backgroundColor: btnCompAutoBackgroundColor,
    };
  }, [btnCompAutoBackgroundColor]);

  const autoStyle = useMemo(() => {
    return {
      color: autoColor,
    };
  }, [autoColor]);

  return (
    <div className={styles.menuCompOptns}>
      <div className={styles.btnCompAuto} style={btnCompAutoStyle}>
        <div className={styles.auto} style={autoStyle}>
          Auto
        </div>
      </div>
      <div className={styles.btnCompAuto}>
        <div className={styles.auto}>Property</div>
      </div>
      <div className={styles.btnCompAuto}>
        <div className={styles.auto}>Life</div>
      </div>
      <div className={styles.btnCompAuto}>
        <div className={styles.auto}>Cyber</div>
      </div>
      <div className={styles.btnCompAuto}>
        <div className={styles.auto}>IP</div>
      </div>
    </div>
  );
};

export default MenuCompOptns;
