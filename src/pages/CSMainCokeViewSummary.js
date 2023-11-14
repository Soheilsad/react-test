import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TopbarCS from "../components/TopbarCS";
import ClientsContainer from "../components/ClientsContainer";
import styles from "./CSMainCokeViewSummary.module.css";

const CSMainCokeViewSummary = () => {
  const navigate = useNavigate();

  const onBtnCSCompaniesContainerClick = useCallback(() => {
    navigate("/client-success-select-source");
  }, [navigate]);

  return (
    <div className={styles.csMainCokeViewSummary}>
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
          dimensions="/vector21.svg"
          propBackgroundColor="unset"
          propBorder="unset"
          propColor="#00b3ff"
        />
        <div className={styles.comparisonsAutoSelectInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <ClientsContainer
                propAlignSelf="stretch"
                propFlex="1"
                propWidth="unset"
                propFlexShrink="unset"
                propFlex1="1"
                propWidth1="unset"
                propFlexShrink1="unset"
                propBorderLeft="4px solid var(--blue-light)"
                onBtnCSCompaniesContainerClick={onBtnCSCompaniesContainerClick}
              />
              <div className={styles.carrierNameParent}>
                <div className={styles.carrierName}>
                  <img
                    className={styles.btnCsBackProfileIcon}
                    alt=""
                    onClick={() => navigate(-1)}
                    src="/btn-cs-back-profile.svg"
                  />
                  <div className={styles.summary}>Summary</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.textContentWrapper}>
                    <div className={styles.textContent}>
                      <p
                        className={styles.shorehIsReaching}
                      >{`Shoreh is reaching out to inquire about the cybersecurity insurance policy's coverage as the company transitions from Office for desktop to Office 365, `}</p>
                      <p className={styles.shorehIsReaching}>
                        Coke’s current policy likely needs an amendment:
                      </p>
                      <ul className={styles.theDataMigrationWillBeMan}>
                        <li
                          className={styles.theDataMigration}
                        >{`The data migration will be managed by contractors. `}</li>
                        <li className={styles.theDataMigration}>
                          A backup will be created and stored in a third party
                          cloud storage provider.
                        </li>
                      </ul>
                      <p className={styles.shorehIsReaching}>
                        Files to review:
                      </p>
                      <ul className={styles.theDataMigrationWillBeMan}>
                        <li>AVIVA cyber risk policy.</li>
                      </ul>
                    </div>
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

export default CSMainCokeViewSummary;
