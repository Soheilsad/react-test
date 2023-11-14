import { useMemo } from "react";
import styles from "./IntegrationCard.module.css";

const IntegrationCard = ({
  property1DefaultFlexShrink,
  hubspot,
  group,
  groupIconWidth,
  cRM,
  Integfunction
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultFlexShrink]);

  const groupIconStyle = useMemo(() => {
    return {
      width: groupIconWidth,
    };
  }, [groupIconWidth]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle} onClick={Integfunction}>
      <img
        className={styles.groupIcon}
        alt=""
        src={group}
        style={groupIconStyle}
      />
      <div className={styles.hubspotCrm}>
        <p className={styles.hubspot}>{hubspot}</p>
        <p className={styles.crm}>{cRM}</p>
      </div>
    </div>
  );
};

export default IntegrationCard;
