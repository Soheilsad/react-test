import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuDataMgmtOptns from "../components/MenuDataMgmtOptns";
import BtnDataMgmtAdd from "../components/BtnDataMgmtAdd";
import InsureCoCard from "../components/InsureCoCard";
import styles from "./DataManagerCarriers.module.css";

const DataManagerCarriers = () => {
  return (
    <div className={styles.dataManagerCarriers}>
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
            btnDataMgmCarriers
            btnDataMgmCompaniesBackgroundColor="unset"
            companiesColor="#00b3ff"
            btnDataMgmPersonsBackgroundColor="unset"
            personsColor="#00b3ff"
            btnDataMgmCarriersBackgroundColor="#00b3ff"
            carriersColor="#fff"
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
                <img className={styles.groupIcon} alt="" src="/group1.svg" />
                <div className={styles.name}>Name</div>
              </div>
              <div className={styles.carrierName}>
                <img className={styles.groupIcon1} alt="" src="/group2.svg" />
                <div className={styles.name}>Companies Served</div>
              </div>
              <div className={styles.carrierName}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector11.svg"
                />
                <div className={styles.name}>Persons Served</div>
              </div>
              <div className={styles.carrierName}>
                <img className={styles.groupIcon2} alt="" src="/group3.svg" />
                <div className={styles.name}>Documents</div>
              </div>
            </div>
            <div className={styles.carrierNameGroup}>
              <div className={styles.carrierName1}>
                <div className={styles.groupWrapper}>
                  <img className={styles.groupIcon3} alt="" src="/group4.svg" />
                </div>
                <div className={styles.carrierNameInner}>
                  <div className={styles.insurecoParent}>
                    <div className={styles.name}>InsureCo</div>
                    <div className={styles.name}>insureco.com</div>
                  </div>
                </div>
              </div>
              <div className={styles.details1}>
                <div className={styles.detailsChild}>Line 1</div>
                <div className={styles.detailsChild}>Line 2</div>
                <div className={styles.detailsChild}>Line 3</div>
              </div>
              <div className={styles.period1}>
                <div className={styles.div}>50+</div>
              </div>
              <div className={styles.docs1}>
                <div className={styles.name}>500+</div>
              </div>
            </div>
            <InsureCoCard />
            <InsureCoCard />
            <InsureCoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataManagerCarriers;
