import { useNavigate } from "react-router-dom";
import styles from "./FileViewerHeader.module.css";

const FileViewerHeader = ({ buttonText }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.toolBar}>
      <div className={styles.menuTitle}>
        {/* make this a component retard */}
        <img
          className={styles.btnWkfwBackCoiSetupIcon}
          alt=""
          src="/btn-wkfw-back-coi-setup.svg"
          onClick={()=>navigate(-1)}
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
      <div className={styles.btnCoiReviewParent}>
        <div className={styles.btnCoiReview}>
          <div className={styles.review}>Review</div>
        </div>
        <div className={styles.btnCoiReview}>
          <div className={styles.review}>{buttonText}</div>
        </div>
      </div>
    </div>
  );
};

export default FileViewerHeader;
