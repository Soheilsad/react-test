import { useNavigate } from "react-router-dom";
import styles from "./PolicyContainer.module.css";

const PolicyContainer = ({ threadName, intentName, threadContent }) => {
  const navigate=useNavigate()
  return (
    <div className={styles.carrierNameParent}>
      <div className={styles.carrierName}>
        <div className={styles.cyberPolicyQuestion}>{threadName}</div>
      </div>
      <div className={styles.carrierName}>
        <div className={styles.checkPolicyCoverage}>{intentName}</div>
      </div>
      <div className={styles.carrierName}>
        <div className={styles.ourItTeam}>{threadContent}</div>
      </div>
      <div className={styles.docs}>
        <div className={styles.btnCsProfileView} onClick={()=>navigate('/cs-main-coke-view-summaryunextended')}>
          <div className={styles.view}>View</div>
        </div>
        <div className={styles.btnCsProfileView}>
          <div className={styles.view}>Share</div>
        </div>
      </div>
    </div>
  );
};

export default PolicyContainer;
