import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MenuCompOptns from "../components/MenuCompOptns";
import styles from "./ComparisonsCreateComparison.module.css";

const ComparisonsCreateComparison = () => {
  return (
    <div className={styles.comparisonsCreateComparison}>
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
            <div className={styles.carrierNameParent}>
              <div className={styles.carrierName}>
                <div className={styles.carriers}>Carriers</div>
              </div>
              <div className={styles.includeAllCarriers}>
                Include all carriers or type in the names and select them
                manually.
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>All</div>
                </div>
                <div className={styles.carrierNameGroup}>
                  <div className={styles.carriers}>Carrier Name</div>
                  <div className={styles.frameChild} />
                </div>
              </div>
            </div>
            <div className={styles.carrierNameContainer}>
              <div className={styles.carrierName}>
                <div className={styles.carriers}>Criteria</div>
              </div>
              <div className={styles.includeAllCarriers}>
                Include all carriers or type in the names and select them
                manually.
              </div>
              <div className={styles.btnCompAiQuery}>
                <div className={styles.useAi}>Use AI</div>
                <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>Monthly Fees</div>
                </div>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>Renewal Policy</div>
                </div>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>Maximum Liability</div>
                </div>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>Price Quote</div>
                </div>
              </div>
            </div>
            <div className={styles.carrierNameContainer}>
              <div className={styles.carrierName}>
                <div className={styles.carriers}>Data Sources</div>
              </div>
              <div className={styles.includeAllCarriers}>
                Select sources to search from.
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>Policy Manual</div>
                </div>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>Payment Plan Form</div>
                </div>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>{`Terms & Conditions`}</div>
                </div>
                <div className={styles.frameItem} />
              </div>
            </div>
            <div className={styles.carrierNameParent2}>
              <div className={styles.carrierName4}>
                <div className={styles.carriers}>Submit</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.checkboxParent}>
                  <div className={styles.checkbox}>
                    <div className={styles.thumb}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                  </div>
                  <div className={styles.all}>Save Comparison</div>
                </div>
              </div>
              <div className={styles.btnCompSubmitWrapper}>
                <div className={styles.btnCompSubmit}>
                  <div className={styles.useAi}>Submit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonsCreateComparison;
