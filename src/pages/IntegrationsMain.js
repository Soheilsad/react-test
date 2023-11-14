import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "./IntegrationsMain.module.css";

const IntegrationsMain = () => {
  return (
    <div className={styles.integrationsMain}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector1.svg"
        vector2="/vector2.svg"
        vector3="/vector13.svg"
        vector4="/vector19.svg"
        btnComps={false}
        sidebarHeight="924px"
        sidebarAlignSelf="unset"
        btnCompsBackgroundColor="unset"
        comparisonsColor="1px solid #575757"
        btnWorkflowsBackgroundColor="unset"
        workflowsColor="1px solid #575757"
        btnClientSuccessBackgroundColor="unset"
        clientSuccessColor="1px solid #575757"
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="#f1f1f1"
        integrationsColor="#00b3ff"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Integrations" />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.settingsWrapper}>
              <div className={styles.settings}>Settings</div>
            </div>
          </div>
          <div className={styles.listIntegrationsServicesWrapper}>
            <div className={styles.listIntegrationsServices}>
              <div className={styles.listboxTitle}>
                <div className={styles.serviceProvider}>Service Provider</div>
              </div>
              <div className={styles.listboxMain}>
                <div className={styles.listboxbg} />
                <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
                <div className={styles.placeholderText}>
                  <div className={styles.selectService}>Select Service</div>
                </div>
              </div>
              <div className={styles.clipList}>
                <div className={styles.dropdownList}>
                  <div className={styles.item1}>
                    <div className={styles.div}>Hubspot</div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.div}>Google Sheets</div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.div}>Salesforce</div>
                  </div>
                  <div className={styles.item1}>
                    <div className={styles.div}>AMS 360</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.selectedShape} />
            <div className={styles.message}>
              <img
                className={styles.exclamationIcon}
                alt=""
                src="/exclamation.svg"
              />
              <div className={styles.message1}>Message</div>
            </div>
            <div className={styles.field}>
              <div className={styles.iconLeft}>
                <img
                  className={styles.emailMailIcon}
                  alt=""
                  src="/email-mail.svg"
                />
              </div>
              <div className={styles.indicator} />
              <div className={styles.emailAddress}>Email address</div>
              <div className={styles.indicatorRight} />
              <div className={styles.spacer} />
              <img
                className={styles.arrowDownIcon}
                alt=""
                src="/arrow-down.svg"
              />
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.selectedShape} />
            <div className={styles.message}>
              <img
                className={styles.exclamationIcon}
                alt=""
                src="/exclamation.svg"
              />
              <div className={styles.message1}>Message</div>
            </div>
            <div className={styles.field}>
              <div className={styles.iconLeft}>
                <img
                  className={styles.emailMailIcon}
                  alt=""
                  src="/email-mail.svg"
                />
              </div>
              <div className={styles.indicator} />
              <div className={styles.emailAddress}>Password</div>
              <div className={styles.indicatorRight} />
              <div className={styles.spacer} />
              <img
                className={styles.arrowDownIcon}
                alt=""
                src="/arrow-down.svg"
              />
            </div>
          </div>
          <div className={styles.btnIntegrationsSubmit}>
            <div className={styles.submit}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsMain;
