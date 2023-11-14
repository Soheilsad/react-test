import { useNavigate } from "react-router-dom";
import IntegrationCard from "./IntegrationCard";
import styles from "./IntegrationContainer.module.css";

const IntegrationContainer = ({ featureImageUrl, hubspot, group, cRM }) => {
  const handleOutlook = async () => {
    try {
      const userId = "1";  // Replace with actual user ID
      // Redirect the user to the login page with user ID as a query parameter
      window.location.href = `http://127.0.0.1:5000/outlook?userId=${userId}`;
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };
  const navigate = useNavigate()
  return (
    <div className={styles.frameParent}>
      <div className={styles.thirdPartyIntegrationsWrapper}>
        <div className={styles.thirdPartyIntegrations}>{featureImageUrl}</div>
      </div>
      <div className={styles.cardOutlookParent}>
        <IntegrationCard
          property1DefaultFlexShrink="0"
          hubspot="Outlook"
          group="/vector18.svg"
          groupIconWidth="40px"
          cRM="Email"
          Integfunction={handleOutlook}
        />
        {/* <IntegrationCard
          property1DefaultFlexShrink="0"
          hubspot="Gmail"
          group="/vector18.svg"
          groupIconWidth="40px"
          cRM="Email"
          Integfunction={()=>{}}
        />
        <div className={styles.cardActurist}>
          <img className={styles.groupIcon} alt="" src="/group6.svg" />
          <div className={styles.acturistCrm}>
            <p className={styles.acturist}>Acturist</p>
            <p className={styles.crm}>CRM</p>
          </div>
        </div>
        <div className={styles.cardActurist}>
          <img className={styles.groupIcon} alt="" src="/group6.svg" />
          <div className={styles.acturistCrm}>
            <p className={styles.acturist}>Hubspot</p>
            <p className={styles.crm}>CRM</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default IntegrationContainer;
