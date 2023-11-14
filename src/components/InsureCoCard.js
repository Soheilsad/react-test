import styles from "./InsureCoCard.module.css";

const InsureCoCard = () => {
  return (
    <div className={styles.carrierNameParent}>
      <div className={styles.carrierName}>
        <div className={styles.groupWrapper}>
          <img className={styles.groupIcon} alt="" src="/group4.svg" />
        </div>
        <div className={styles.carrierNameInner}>
          <div className={styles.insurecoParent}>
            <div className={styles.insureco}>InsureCo</div>
            <div className={styles.insureco}>insureco.com</div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsChild}>Line 1</div>
        <div className={styles.detailsChild}>Line 2</div>
        <div className={styles.detailsChild}>Line 3</div>
      </div>
      <div className={styles.period}>
        <div className={styles.months}>12 months</div>
      </div>
      <div className={styles.docs}>
        <img className={styles.groupIcon1} alt="" src="/group5.svg" />
        <div className={styles.insureco}>Policy Manual</div>
      </div>
    </div>
  );
};

export default InsureCoCard;
