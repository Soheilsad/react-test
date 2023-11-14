import styles from "./PDFReader1.module.css";

const PDFReader1 = () => {
  return (
    <div className={styles.pdfReader1}>
      <div className={styles.toolBar}>
        <div className={styles.menuTitle}>
          <img
            className={styles.btnCsCloseReaderIcon}
            alt=""
            src="/btn-cs-close-reader.svg"
          />
          <div className={styles.cyberRiskPolicy}>Cyber Risk Policy</div>
        </div>
        <img
          className={styles.vectorDown1Icon}
          alt=""
          src="/vector-down-1.svg"
        />
        <div className={styles.fileScope}>
          <div className={styles.pagination}>
            <div className={styles.currentPage}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.div}>/ 89</div>
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
        className={styles.screenshot20231019At207}
        alt=""
        src="/screenshot-20231019-at-207@2x.png"
      />
    </div>
  );
};

export default PDFReader1;
