import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TopbarCS from "../components/TopbarCS";
import ClientsContainer from "../components/ClientsContainer";
import styles from "./CSMainCompanies.module.css";

const CSMainCompanies = () => {
  const navigate = useNavigate();

  const onBtnCSCompaniesContainerClick = useCallback(() => {
    navigate("/client-success-select-source");
  }, [navigate]);

  return (
    <div className={styles.csMainCompanies}>
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
        <TopbarCS
          dimensions="/vector20.svg"
          propBackgroundColor="#00b3ff"
          propBorder="2px solid var(--blue-light)"
          propColor="#fff"
        />
        <div className={styles.comparisonsAutoSelectInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.btnCsCompaniesParent}>
                <div className={styles.btnCsCompanies}>
                  <div className={styles.companies}>Companies</div>
                </div>
                <div className={styles.btnCsPeople}>
                  <div className={styles.companies}>People</div>
                </div>
                <div className={styles.btnCsPeople}>
                  <div className={styles.companies}>Files</div>
                </div>
                <div className={styles.btnCsPeople}>
                  <div className={styles.companies}>Alerts</div>
                </div>
                <div className={styles.btnCsAddView}>
                  <div className={styles.companies}>Add View</div>
                </div>
              </div>
              <ClientsContainer
                propAlignSelf="unset"
                propFlex="unset"
                propWidth="130px"
                propFlexShrink="0"
                propFlex1="unset"
                propWidth1="130px"
                propFlexShrink1="0"
                propBorderLeft="unset"
                onBtnCSCompaniesContainerClick={onBtnCSCompaniesContainerClick}
              />
              <div className={styles.frameContainer}>
                <div className={styles.selectACompanyParent}>
                  <div className={styles.selectACompany}>Select a company</div>
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

export default CSMainCompanies;
