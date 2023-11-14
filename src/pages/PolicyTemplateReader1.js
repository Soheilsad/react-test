import styles from "./PolicyTemplateReader1.module.css";

const PolicyTemplateReader1 = () => {
  return (
    <div className={styles.policyTemplateReader1}>
      <div className={styles.toolBar}>
        <div className={styles.menuTitle}>
          <img
            className={styles.btnWkfwBackCoiSetupIcon}
            alt=""
            src="/btn-wkfw-back-coi-setup.svg"
          />
          <div className={styles.cyberRiskPolicy}>Cyber Risk Policy</div>
        </div>
        <div className={styles.vd1Wrapper}>
          <img className={styles.vd1Icon} alt="" src="/vd-1.svg" />
        </div>
        <div className={styles.fileScope}>
          <div className={styles.pagination}>
            <div className={styles.currentPage}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.div}>/ 121</div>
          </div>
          <div className={styles.fileScopeChild} />
          <div className={styles.zoom}>
            <img className={styles.icons} alt="" src="/icons.svg" />
            <div className={styles.currentPage}>
              <div className={styles.div}>100%</div>
            </div>
            <img className={styles.icons} alt="" src="/icons1.svg" />
          </div>
          <div className={styles.fileScopeChild} />
          <img className={styles.icons} alt="" src="/icons2.svg" />
          <img className={styles.icons} alt="" src="/icons3.svg" />
        </div>
        <div className={styles.actions}>
          <img className={styles.icons} alt="" src="/icons4.svg" />
          <img className={styles.icons} alt="" src="/icons5.svg" />
          <img className={styles.icons} alt="" src="/icons6.svg" />
        </div>
      </div>
      <img
        className={styles.screenshot20231020At1213}
        alt=""
        src="/screenshot-20231020-at-1213@2x.png"
      />
    </div>
  );
};

export default PolicyTemplateReader1;
