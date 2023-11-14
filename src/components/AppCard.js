import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AppCard.module.css";

const AppCard = ({ vector, dataManager, dataManagerAlignSelf,url }) => {
  const navigate= useNavigate()
  const dataManager1Style = useMemo(() => {
    return {
      alignSelf: dataManagerAlignSelf,
    };
  }, [dataManagerAlignSelf]);

  return (
    <div className={styles.cardDataMngr} onClick={()=>navigate(url)}>
      <img className={styles.vectorIcon} alt="" src={vector} />
      <div className={styles.dataManager} style={dataManager1Style}>
        {dataManager}
      </div>
    </div>
  );
};

export default AppCard;
