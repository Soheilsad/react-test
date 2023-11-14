import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TopbarCS from "../components/TopbarCS";
import ClientsContainer from "../components/ClientsContainer";
import PolicyContainer from "../components/PolicyContainer";
import styles from "./CSMainCosCoke.module.css";

const CSMainCosCoke = () => {
  const navigate = useNavigate();

  const onBtnCSCompaniesContainerClick = useCallback(() => {
    navigate("/client-success-select-source");
  }, [navigate]);

  return (
    <div className={styles.csMainCosCoke}>
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
            <TopbarCS dimensions="/vector20.svg" />
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
                propBorderLeft="4px solid var(--blue-light)"
                onBtnCSCompaniesContainerClick={onBtnCSCompaniesContainerClick}
              />
              <div className={styles.frameGroup}>
                <div className={styles.carrierNameParent}>
                  <div className={styles.carrierName}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector27.svg"
                    />
                    <div className={styles.companies}>Thread</div>
                  </div>
                  <div className={styles.period}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group7.svg"
                    />
                    <div className={styles.companies}>Intent</div>
                  </div>
                  <div className={styles.period}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group7.svg"
                    />
                    <div className={styles.companies}>Content</div>
                  </div>
                  <div className={styles.docs}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector28.svg"
                    />
                    <div className={styles.companies}>Actions</div>
                  </div>
                </div>
                <PolicyContainer
                  threadName="Cyber policy question"
                  intentName="CHECK POLICY COVERAGE"
                  threadContent="Our IT team is looking into phasing out Office for desktop and moving to Office 365..."
                />
                <PolicyContainer
                  threadName="Renewal?"
                  intentName="LIST DOCUMENTS NEEDED FOR RENEWAL"
                  threadContent="We’ve decided to go ahead and renew our policy with InsureCo’s..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSMainCosCoke;
