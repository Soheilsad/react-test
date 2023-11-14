import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import WorkFlowAction from "../components/WorkFlowAction";
import WorkFlowContainer from "../components/WorkFlowContainer";
import styles from "./WorkflowMain.module.css";

const WorkflowMain = () => {
  return (
    <div className={styles.workflowMain}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector23.svg"
        vector2="/vector2.svg"
        vector3="/vector13.svg"
        vector4="/vector4.svg"
        btnComps={false}
        sidebarHeight="924px"
        sidebarAlignSelf="unset"
        btnCompsBackgroundColor="unset"
        comparisonsColor="1px solid #575757"
        btnWorkflowsBackgroundColor="#f1f1f1"
        workflowsColor="#00b3ff"
        btnClientSuccessBackgroundColor="unset"
        clientSuccessColor="1px solid #575757"
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Workflows" />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.createAWorkflowWrapper}>
              <div className={styles.createAWorkflow}>Create a Workflow</div>
            </div>
          </div>
          <div className={styles.btnWkfwCoiParent}>
            <WorkFlowAction certificateOfInsurance="Certificate of Insurance" />
            <WorkFlowAction certificateOfInsurance="Renewal Forms" />
          </div>
          <WorkFlowContainer />
        </div>
      </div>
    </div>
  );
};

export default WorkflowMain;
