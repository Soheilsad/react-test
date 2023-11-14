import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "./WorkflowCOISaveAndShare.module.css";

const WorkflowCOISaveAndShare = () => {
  return (
    <div className={styles.workflowCoiSaveAndShare}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector23.svg"
        vector2="/vector2.svg"
        vector3="/vector13.svg"
        vector4="/vector4.svg"
        btnComps={false}
        sidebarHeight="unset"
        sidebarAlignSelf="stretch"
        btnCompsBackgroundColor="unset"
        comparisonsColor="1px solid #575757"
        btnWorkflowsBackgroundColor="#f1f1f1"
        workflowsColor="#00b3ff"
        btnClientSuccessBackgroundColor="unset"
        clientSuccessColor="1px solid #575757"
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Workflows" />
        <div className={styles.frameParent}>
          <div className={styles.shareSettingsWrapper}>
            <div className={styles.shareSettings}>Share Settings</div>
          </div>
          <div className={styles.checkboxParent}>
            <div className={styles.checkbox}>
              <div className={styles.thumb}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
            </div>
            <div className={styles.shareSettings}>
              Add to client file in CRM.
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.selectedShape} />
            <div className={styles.message}>
              <img
                className={styles.exclamationIcon}
                alt=""
                src="/exclamation.svg"
              />
              <div className={styles.message1}>Message</div>
            </div>
            <div className={styles.field}>
              <div className={styles.iconLeft}>
                <img
                  className={styles.emailMailIcon}
                  alt=""
                  src="/email-mail.svg"
                />
              </div>
              <div className={styles.indicator} />
              <div className={styles.emailAddress}>Email address</div>
              <div className={styles.indicatorRight} />
              <div className={styles.spacer} />
              <img
                className={styles.arrowDownIcon}
                alt=""
                src="/arrow-down.svg"
              />
            </div>
          </div>
          <div className={styles.btnCoiSubmit}>
            <div className={styles.finalize}>Finalize</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCOISaveAndShare;
