import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "./ClientSuccessSelectSource.module.css";

const ClientSuccessSelectSource = () => {
  return (
    <div className={styles.clientSuccessSelectSource}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector1.svg"
        vector2="/vector25.svg"
        vector3="/vector13.svg"
        vector4="/vector4.svg"
        btnComps={false}
        sidebarHeight="924px"
        sidebarAlignSelf="unset"
        btnCompsBackgroundColor="unset"
        comparisonsColor="1px solid #575757"
        btnWorkflowsBackgroundColor="unset"
        workflowsColor="1px solid #575757"
        btnClientSuccessBackgroundColor="#f1f1f1"
        clientSuccessColor="#00b3ff"
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Home" />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.connectEmailSourceWrapper}>
              <div className={styles.connectEmailSource}>
                Connect Email Source
              </div>
            </div>
          </div>
          <div className={styles.pleaseSelectBelowASourceFWrapper}>
            <div className={styles.pleaseSelectBelow}>
              Please select below a source for your email data.
            </div>
          </div>
          <div className={styles.docs}>
            <div className={styles.btnCsOutlook}>
              <div className={styles.outlook}>Outlook</div>
            </div>
            <div className={styles.btnCsOutlook}>
              <div className={styles.outlook}>Gmail</div>
            </div>
            <div className={styles.btnCsOutlook}>
              <div className={styles.outlook}>Upload CSV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessSelectSource;
