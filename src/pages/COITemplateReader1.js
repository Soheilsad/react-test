import styles from "./COITemplateReader1.module.css";

const COITemplateReader1 = () => {
  return (
    <div className={styles.coiTemplateReader1}>
      <div className={styles.toolBar}>
        <div className={styles.menuTitle}>
          <img
            className={styles.btnWkfwBackCoiSetupIcon}
            alt=""
            src="/btn-wkfw-back-coi-setup.svg"
          />
          <div className={styles.cyberRiskPolicy}>Cyber Risk Policy</div>
        </div>
        <div className={styles.fileScope}>
          <div className={styles.pagination}>
            <div className={styles.currentPage}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.div}>/ 1</div>
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
      <div className={styles.image2Wrapper}>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
    </div>
  );
};

export default COITemplateReader1;
