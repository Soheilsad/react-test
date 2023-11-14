import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuCompOptns from "../components/MenuCompOptns";
import PolicyTypeCard from "../components/PolicyTypeCard";
import styles from "./ComparisonsSelectV2.module.css";

const ComparisonsSelectV2 = () => {
  return (
    <div className={styles.comparisonsSelectV2}>
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
          <div className={styles.frameGroup}>
            <PolicyTypeCard legalLiability="Legal Liability" view="View" />
            <PolicyTypeCard
              legalLiability="Monthly Payment"
              frameDivAlignSelf="stretch"
              frameDivWidth="unset"
              btnCompViewLLGap="24px"
              view="View"
            />
          </div>
          <div className={styles.frameWrapper}>
            <PolicyTypeCard
              legalLiability="New Comparison"
              frameDivAlignSelf="unset"
              frameDivWidth="557px"
              btnCompViewLLGap="12px"
              view="Create"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonsSelectV2;
