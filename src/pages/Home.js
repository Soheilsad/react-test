import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AppsContainer from "../components/AppsContainer";
import IntegrationContainer from "../components/IntegrationContainer";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  return (
    <div className={styles.home}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector1.svg"
        vector2="/vector2.svg"
        vector3="/vector13.svg"
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
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Home" />
        <div className={styles.frameParent}>
          <AppsContainer />
          <IntegrationContainer
            featureImageUrl="Third-party Integrations"
            hubspot="Hubspot"
            group="/group6.svg"
            cRM="CRM"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
