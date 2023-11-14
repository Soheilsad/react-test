import styles from "./InsureCoCard2.module.css";

const InsureCoCard2 = () => {
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
        <div className={styles.insureco}>Bank Account Only</div>
        <div className={styles.insureco}>
          Able to choose preferred withdrawal date
        </div>
      </div>
      <div className={styles.period}>
        <div className={styles.div}>5%</div>
      </div>
      <div className={styles.period1}>
        <div className={styles.downPaymentOfContainer}>
          <span className={styles.downPaymentOfContainer1}>
            <p className={styles.downPaymentOf}>
              Down payment of 2 months in guaranteed funds by broker cheque
            </p>
          </span>
        </div>
      </div>
      <div className={styles.period1}>
        <div className={styles.downPaymentOfContainer}>
          Monthly payment not available if policy cancelled for non-payment in
          past 3 years
        </div>
      </div>
      <div className={styles.docs}>
        <div className={styles.paymentPlanForm}>Payment Plan Form</div>
      </div>
    </div>
  );
};

export default InsureCoCard2;
