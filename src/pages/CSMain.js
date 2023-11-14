import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TopbarCS from "../components/TopbarCS";
import styles from "./CSMain.module.css";

const CSMain = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.csMain}>
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
        <Topbar pageTitle="Client Success" />
        <div className={styles.comparisonsAutoSelectInner}>
          <div className={styles.topbarCsParent}>
            <TopbarCS
              dimensions="/vector20.svg"
              propBackgroundColor="#00b3ff"
              propBorder="2px solid var(--blue-light)"
              propColor="#fff"
            />
            <div className={styles.frameParent}>
              <div className={styles.btnCsCompaniesParent} onClick={()=>navigate('/cs-main-companies')}>
                <div className={styles.btnCsCompanies}>
                  <div className={styles.companies}>Companies</div>
                </div>
                <div className={styles.btnCsCompanies}>
                  <div className={styles.companies}>People</div>
                </div>
                <div className={styles.btnCsCompanies}>
                  <div className={styles.companies}>Files</div>
                </div>
                <div className={styles.btnCsCompanies}>
                  <div className={styles.companies}>Alerts</div>
                </div>
                <div className={styles.btnCsAddView}>
                  <div className={styles.companies}>Add View</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.selectAViewParent}>
                  <div className={styles.selectAView}>Select a view</div>
                  <div className={styles.nothingIsSelected}>
                    Nothing is selected.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSMain;
