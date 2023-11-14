import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuDataMgmtOptns from "../components/MenuDataMgmtOptns";
import BtnDataMgmtAdd from "../components/BtnDataMgmtAdd";
import styles from "./DataManagerCompanies.module.css";

const DataManagerCompanies = () => {
  return (
    <div className={styles.dataManagerCompanies}>
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
        <Topbar pageTitle="Data Manager" />
        <div className={styles.menuDataMgmtOptnsParent}>
          <MenuDataMgmtOptns
            btnDataMgmCarriers={false}
            btnDataMgmCompaniesBackgroundColor="#00b3ff"
            companiesColor="#fff"
            btnDataMgmPersonsBackgroundColor="unset"
            personsColor="#00b3ff"
            btnDataMgmCarriersBackgroundColor="unset"
            carriersColor="#00b3ff"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.summaryParent}>
              <div className={styles.summary}>Summary</div>
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
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector29.svg"
                />
                <div className={styles.name}>Carriers</div>
              </div>
              <div className={styles.carrierName}>
                <img className={styles.groupIcon2} alt="" src="/group10.svg" />
                <div className={styles.name}>Commission</div>
              </div>
              <div className={styles.carrierName}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector30.svg"
                />
                <div className={styles.name}>Alerts</div>
              </div>
              <div className={styles.carrierName}>
                <div className={styles.groupWrapper}>
                  <img
                    className={styles.groupIcon3}
                    alt=""
                    src="/group11.svg"
                  />
                </div>
                <div className={styles.summary}>Contact</div>
              </div>
              <div className={styles.carrierName}>
                <img className={styles.groupIcon4} alt="" src="/group12.svg" />
                <div className={styles.name}>Requests</div>
              </div>
            </div>
            <div className={styles.carrierNameGroup}>
              <div className={styles.carrierName1}>
                <div className={styles.cocaCola}>Coca Cola</div>
                <div className={styles.cocaCola}>coke.com</div>
              </div>
              <div className={styles.carrierName1}>
                <div className={styles.cybersecurity}>Cybersecurity</div>
                <div
                  className={styles.cybersecurity}
                >{`Directors & Officers`}</div>
                <div className={styles.cybersecurity}>+13 policies</div>
              </div>
              <div className={styles.period2}>
                <div className={styles.div}>50+</div>
              </div>
              <div className={styles.period2}>
                <div className={styles.div}>11.3% avg.</div>
              </div>
              <div className={styles.docs3}>
                <div className={styles.renewalsInNextContainer}>
                  <p className={styles.renewalsInNext}>
                    2 renewals in next 30 days:
                  </p>
                  <p className={styles.renewalsInNext}>cybersecurity,</p>
                  <p className={styles.renewalsInNext}>{`D&O`}</p>
                </div>
              </div>
              <div className={styles.docs3}>
                <div className={styles.btnDataMgmt}>
                  <div className={styles.shorehAghdashloo}>
                    Shoreh Aghdashloo
                  </div>
                </div>
              </div>
              <div className={styles.period4}>
                <div className={styles.btnDataMgmtAddPolicy}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector10.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManagerCompanies;
