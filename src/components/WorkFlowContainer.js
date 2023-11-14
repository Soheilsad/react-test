import PastWorkFlowCard from "./PastWorkFlowCard";
import styles from "./WorkFlowContainer.module.css";

const WorkFlowContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.pastWorkflowsWrapper}>
        <div className={styles.pastWorkflows}>Past Workflows</div>
      </div>
      <div className={styles.cardOutlookParent}>
        <PastWorkFlowCard
          hubspot="Outlook"
          group="/vector18.svg"
          groupIconWidth="40px"
          cRM="Email"
        />
        <PastWorkFlowCard
          hubspot="Gmail"
          group="/vector18.svg"
          groupIconWidth="40px"
          cRM="Email"
        />
        <PastWorkFlowCard
          hubspot="Acturist"
          group="/group6.svg"
          groupIconWidth="35.6px"
          cRM="CRM"
        />
        <PastWorkFlowCard hubspot="Hubspot" group="/group6.svg" cRM="CRM" />
      </div>
    </div>
  );
};

export default WorkFlowContainer;
