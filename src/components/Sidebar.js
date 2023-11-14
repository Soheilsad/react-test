import { useMemo } from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";
const Sidebar = ({
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  btnComps,
  sidebarHeight,
  sidebarAlignSelf,
  btnCompsBackgroundColor,
  comparisonsColor,
  btnWorkflowsBackgroundColor,
  workflowsColor,
  btnClientSuccessBackgroundColor,
  clientSuccessColor,
  btnDataMngrBackgroundColor,
  dataManagerColor,
  btnIntegrationsBackgroundColor,
  integrationsColor,
}) => {
  const navigate = useNavigate()
  const sidebarStyle = useMemo(() => {
    return {
      height: sidebarHeight,
      alignSelf: sidebarAlignSelf,
    };
  }, [sidebarHeight, sidebarAlignSelf]);

  const btnCompsStyle = useMemo(() => {
    return {
      backgroundColor: btnCompsBackgroundColor,
    };
  }, [btnCompsBackgroundColor]);

  const comparisonsStyle = useMemo(() => {
    return {
      color: comparisonsColor,
    };
  }, [comparisonsColor]);

  const btnWorkflowsStyle = useMemo(() => {
    return {
      backgroundColor: btnWorkflowsBackgroundColor,
    };
  }, [btnWorkflowsBackgroundColor]);

  const workflowsStyle = useMemo(() => {
    return {
      color: workflowsColor,
    };
  }, [workflowsColor]);

  const btnClientSuccessStyle = useMemo(() => {
    return {
      backgroundColor: btnClientSuccessBackgroundColor,
    };
  }, [btnClientSuccessBackgroundColor]);

  const clientSuccessStyle = useMemo(() => {
    return {
      color: clientSuccessColor,
    };
  }, [clientSuccessColor]);

  const btnDataMngrStyle = useMemo(() => {
    return {
      backgroundColor: btnDataMngrBackgroundColor,
    };
  }, [btnDataMngrBackgroundColor]);

  const dataManagerStyle = useMemo(() => {
    return {
      color: dataManagerColor,
    };
  }, [dataManagerColor]);

  const btnIntegrationsStyle = useMemo(() => {
    return {
      backgroundColor: btnIntegrationsBackgroundColor,
    };
  }, [btnIntegrationsBackgroundColor]);

  const integrationsStyle = useMemo(() => {
    return {
      color: integrationsColor,
    };
  }, [integrationsColor]);

  return (
    <div className={styles.sidebar} style={sidebarStyle} >
      <div className={styles.logo} onClick={()=>navigate('/')}>
        <div className={styles.p}>P</div>
      </div>
      {!btnComps && (
        <div className={styles.btnComps} style={btnCompsStyle} >
          <img className={styles.vectorIcon} alt="" src={vector} />
          <div className={styles.comparisons} style={comparisonsStyle}>
            Comparisons
          </div>
        </div>
      )}
      <div className={styles.btnWorkflows} style={btnWorkflowsStyle} onClick={()=>navigate('/workflow-main')}>
        <img className={styles.vectorIcon1} alt="" src={vector1} />
        <div className={styles.comparisons} style={workflowsStyle}>
          Workflows
        </div>
      </div>
      <div className={styles.btnWorkflows} style={btnClientSuccessStyle} onClick={()=>navigate('/cs-main')}>
        <img className={styles.vectorIcon2} alt="" src={vector2} />
        <div className={styles.clientSuccess} style={clientSuccessStyle}>
          Client Success
        </div>
      </div>
      <div className={styles.btnWorkflows} style={btnDataMngrStyle} onClick={()=>navigate('/data-manager-companies')}>
        <img className={styles.vectorIcon3} alt="" src={vector3} />
        <div className={styles.clientSuccess} style={dataManagerStyle}>
          Data Manager
        </div>
      </div>
      <div className={styles.btnWorkflows} style={btnIntegrationsStyle} onClick={()=>navigate('/integrations-main')}>
        <img className={styles.vectorIcon4} alt="" src={vector4} />
        <div className={styles.comparisons} style={integrationsStyle}>
          Integrations
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
