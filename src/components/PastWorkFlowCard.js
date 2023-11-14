import { useMemo } from "react";
import styles from "./PastWorkFlowCard.module.css";

const PastWorkFlowCard = ({ hubspot, group, groupIconWidth, cRM }) => {
  const groupIcon1Style = useMemo(() => {
    return {
      width: groupIconWidth,
    };
  }, [groupIconWidth]);

  return (
    <div className={styles.cardHubspot}>
      <img
        className={styles.groupIcon}
        alt=""
        src={group}
        style={groupIcon1Style}
      />
      <div className={styles.hubspotCrm}>
        <p className={styles.hubspot}>{hubspot}</p>
        <p className={styles.crm}>{cRM}</p>
      </div>
    </div>
  );
};

export default PastWorkFlowCard;
