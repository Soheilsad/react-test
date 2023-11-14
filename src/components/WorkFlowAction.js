import { useNavigate } from "react-router-dom";
import styles from "./WorkFlowAction.module.css";

const WorkFlowAction = ({ certificateOfInsurance }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.btnWkfwCoi} onClick={() => navigate('/workflow-coi-setup')}>
      <div className={styles.certificateOfInsurance}>
        {certificateOfInsurance}
      </div>
    </div>
  );
};

export default WorkFlowAction;
