import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuCompOptns from "../components/MenuCompOptns";
import PolicyFilterContainer from "../components/PolicyFilterContainer";
import InsureCoCard from "../components/InsureCoCard";
import styles from "./ComparisonsAutoLL.module.css";

const ComparisonsAutoLL = () => {
  return (
    <div className={styles.comparisonsAutoLl}>
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
                <div className={styles.duration}>Carrier Name</div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.duration}>Details</div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.duration}>Duration</div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.duration}>Documents</div>
              </div>
            </div>
            <InsureCoCard />
            <InsureCoCard />
            <InsureCoCard />
            <InsureCoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonsAutoLL;
