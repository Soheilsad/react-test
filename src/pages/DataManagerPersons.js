import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuDataMgmtOptns from "../components/MenuDataMgmtOptns";
import BtnDataMgmtAdd from "../components/BtnDataMgmtAdd";
import styles from "./DataManagerPersons.module.css";

const DataManagerPersons = () => {
  return (
    <div className={styles.dataManagerPersons}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector1.svg"
        vector2="/vector2.svg"
        vector3="/vector3.svg"
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
        btnDataMngrBackgroundColor="#f1f1f1"
        dataManagerColor="#00b3ff"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Home" />
        <div className={styles.menuDataMgmtOptnsParent}>
          <MenuDataMgmtOptns
            btnDataMgmCarriers={false}
            btnDataMgmCompaniesBackgroundColor="unset"
            companiesColor="#00b3ff"
            btnDataMgmPersonsBackgroundColor="#00b3ff"
            personsColor="#fff"
            btnDataMgmCarriersBackgroundColor="unset"
            carriersColor="#00b3ff"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.summaryParent}>
              <div className={styles.summary}>{`Summary `}</div>
              <div className={styles.btnDataMgmtExport}>
                <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
                <div className={styles.export}>Export</div>
              </div>
              <BtnDataMgmtAdd />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.carrierNameParent}>
              <div className={styles.carrierName}>
                <img className={styles.groupIcon} alt="" src="/group8.svg" />
                <div className={styles.name}>Name</div>
              </div>
              <div className={styles.carrierName}>
                <img className={styles.groupIcon1} alt="" src="/group9.svg" />
                <div className={styles.name}>Policies</div>
              </div>
              <div className={styles.carrierName}>
                <img className={styles.groupIcon2} alt="" src="/group12.svg" />
                <div className={styles.name}>{`Documents `}</div>
              </div>
              <div className={styles.carrierName}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector31.svg"
                />
                <div className={styles.name}>AI Suggestions</div>
              </div>
              <div className={styles.docs}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector32.svg"
                />
                <div className={styles.name}>Alerts</div>
              </div>
            </div>
            <div className={styles.carrierNameGroup}>
              <div className={styles.carrierName1}>
                <div className={styles.shorehAghdashloo}>Shoreh Aghdashloo</div>
              </div>
              <div className={styles.carrierName1}>
                <div className={styles.lifeInsurance}>Life Insurance</div>
              </div>
              <div className={styles.period2}>
                <div className={styles.dataExtractedFrom}>
                  Data extracted from Coca Cola’s policies.
                </div>
              </div>
              <div className={styles.period3}>
                <div className={styles.lifeInsurance}>
                  Data available to offer this person private health insurance.
                </div>
                <div className={styles.btnDataMgmtMakeOffer}>
                  <div className={styles.export}>Make Offer</div>
                </div>
              </div>
              <div className={styles.period3}>
                <div className={styles.companyCybersecurityPolicy}>
                  Company cybersecurity policy expires in 30 days.
                </div>
                <div className={styles.btnDataMgmtMakeOffer}>
                  <div className={styles.export}>Follow Up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManagerPersons;
