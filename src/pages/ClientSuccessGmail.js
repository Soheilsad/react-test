import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "./ClientSuccessGmail.module.css";

const ClientSuccessGmail = () => {
  return (
    <div className={styles.clientSuccessGmail}>
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
        <Topbar pageTitle="Integrations" />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.connectEmailSourceWrapper}>
              <div className={styles.connectEmailSource}>
                Connect Email Source
              </div>
            </div>
          </div>
          <div className={styles.pleaseSelectBelowASourceFWrapper}>
            <div className={styles.pleaseSelectBelow}>
              Please select below a source for your email data.
            </div>
          </div>
          <div className={styles.docs}>
            <div className={styles.btnCsOutlook}>
              <div className={styles.outlook}>Outlook</div>
            </div>
            <div className={styles.btnCsGmail}>
              <div className={styles.outlook}>Gmail</div>
            </div>
            <div className={styles.btnCsOutlook}>
              <div className={styles.outlook}>Upload CSV</div>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.iconLeft} />
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
            <div className={styles.field1}>
              <div className={styles.iconLeft1}>
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
          <div className={styles.btnCsEmailSubmit}>
            <div className={styles.outlook}>Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessGmail;
