import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuCompOptns from "../components/MenuCompOptns";
import PolicyFilterContainer from "../components/PolicyFilterContainer";
import InsureCoCard2 from "../components/InsureCoCard2";
import styles from "./ComparisonsAutoMP.module.css";

const ComparisonsAutoMP = () => {
  return (
    <div className={styles.comparisonsAutoMp}>
      <Sidebar
        vector="/vector12.svg"
        vector1="/vector1.svg"
        vector2="/vector2.svg"
        vector3="/vector13.svg"
        vector4="/vector4.svg"
        btnComps
        sidebarHeight="924px"
        sidebarAlignSelf="unset"
        btnCompsBackgroundColor="#fff"
        comparisonsColor="#00b3ff"
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
              btnCompAutoBackgroundColor="unset"
              autoColor="#00b3ff"
            />
          </div>
          <PolicyFilterContainer />
          <div className={styles.frameGroup}>
            <div className={styles.carrierNameParent}>
              <div className={styles.carrierName}>
                <div className={styles.withdrawDateOptions}>Carrier Name</div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.withdrawDateOptions}>
                  Withdraw Date Options
                </div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.withdrawDateOptions}>Service Fee</div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.withdrawDateOptions}>How It Works</div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.withdrawDateOptions}>
                  Non-Payment Rules
                </div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.withdrawDateOptions}>Documents</div>
              </div>
            </div>
            <InsureCoCard2 />
            <InsureCoCard2 />
            <InsureCoCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonsAutoMP;
