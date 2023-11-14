import { useNavigate } from "react-router-dom";
import styles from "./Topbar.module.css";

const Topbar = ({ pageTitle }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.property1clientSuccess}>
      <div className={styles.clientSuccessWrapper}>
        <div className={styles.clientSuccess}>{pageTitle}</div>
      </div>
      <div className={styles.searchBar}>
        <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
        <div className={styles.searchForApps}>
          Search for apps, files, templates and more
        </div>
      </div>
      <div className={styles.btnNotificationsParent}>
        <div className={styles.btnNotifications}>
          <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
        </div>
        <div className={styles.btnNotifications}>
          <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
        </div>
        <div className={styles.btnHelp}>
          <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
        </div>
        <div className={styles.btnHelp}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
