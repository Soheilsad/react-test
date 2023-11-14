import { useMemo } from "react";
import styles from "./PolicyTypeCard.module.css";

const PolicyTypeCard = ({
  legalLiability,
  frameDivAlignSelf,
  frameDivWidth,
  btnCompViewLLGap,
  view,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivWidth]);

  const btnCompViewLLStyle = useMemo(() => {
    return {
      gap: btnCompViewLLGap,
    };
  }, [btnCompViewLLGap]);

  return (
    <div className={styles.legalLiabilityParent} style={frameDivStyle}>
      <div className={styles.legalLiability}>{legalLiability}</div>
      <div className={styles.btnCompViewLl} style={btnCompViewLLStyle}>
        <div className={styles.view}>{view}</div>
        <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
      </div>
    </div>
  );
};

export default PolicyTypeCard;
