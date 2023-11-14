import AppCard from "./AppCard";
import styles from "./AppsContainer.module.css";

const AppsContainer = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.appsWrapper}>
          <div className={styles.apps}>Apps</div>
        </div>
        <div className={styles.cardWorkflowsParent}>
          <AppCard
            vector="/vector15.svg"
            dataManager="Workflows"
            dataManagerAlignSelf="unset"
            url = '/workflow-main'
          />
          <AppCard
            vector="/vector16.svg"
            dataManager="Client Success"
            dataManagerAlignSelf="stretch"
            url = '/cs-main'
          />
          <AppCard vector="/vector17.svg" dataManager="Data Manager" url="/data-manager-companies" />
        </div>
      </div>
    </div>
  );
};

export default AppsContainer;
