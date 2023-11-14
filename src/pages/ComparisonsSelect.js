import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuCompOptns from "../components/MenuCompOptns";
import styles from "./ComparisonsSelect.module.css";

const ComparisonsSelect = () => {
  return (
    <div className={styles.comparisonsSelect}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector1.svg"
        vector2="/vector2.svg"
        vector3="/vector13.svg"
        vector4="/vector4.svg"
        btnComps={false}
        sidebarHeight="924px"
        sidebarAlignSelf="unset"
        btnCompsBackgroundColor="unset"
        comparisonsColor="1px solid #575757"
        btnWorkflowsBackgroundColor="unset"
        workflowsColor="1px solid #575757"
        btnClientSuccessBackgroundColor="unset"
        clientSuccessColor="1px solid #575757"
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Home" />
        <div className={styles.frameParent}>
          <div className={styles.menuCompOptnsWrapper}>
            <MenuCompOptns
              btnCompAutoBackgroundColor="#00b3ff"
              autoColor="#fff"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.legalLiabilityParent}>
              <div className={styles.legalLiability}>Legal Liability</div>
              <div className={styles.btnCompViewLl}>
                <div className={styles.view}>View</div>
                <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
              </div>
            </div>
            <div className={styles.legalLiabilityParent}>
              <div className={styles.legalLiability}>New Comparison</div>
              <div className={styles.btnCompCreate}>
                <div className={styles.view}>Create</div>
                <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonsSelect;
