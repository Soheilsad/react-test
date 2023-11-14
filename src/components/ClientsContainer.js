import { useMemo } from "react";
import ThreadCard from "./ThreadCard";
import styles from "./ClientsContainer.module.css";
import { useNavigate } from "react-router-dom";

const ClientsContainer = ({
  propAlignSelf,
  propFlex,
  propWidth,
  propFlexShrink,
  propFlex1,
  propWidth1,
  propFlexShrink1,
  propBorderLeft,
  onBtnCSCompaniesContainerClick,
}) => {
  const navigate=useNavigate()
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const btnCSCompaniesStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propFlex, propWidth, propFlexShrink]);

  const filter1Style = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth1,
      flexShrink: propFlexShrink1,
    };
  }, [propFlex1, propWidth1, propFlexShrink1]);

  const btnCSCompany1Style = useMemo(() => {
    return {
      borderLeft: propBorderLeft,
    };
  }, [propBorderLeft]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.btnCsCompaniesParent} style={frameDiv1Style}>
        <div
          className={styles.btnCsCompanies}
          onClick={onBtnCSCompaniesContainerClick}
          style={btnCSCompaniesStyle}
        >
          <div className={styles.all}>All</div>
        </div>
        <div className={styles.filter} style={filter1Style}>
          <img className={styles.vectorIcon} alt="" src="/vector26.svg" />
          <div className={styles.all}>Filter</div>
        </div>
      </div>
      <div className={styles.btnCsCompany1} style={btnCSCompany1Style} onClick={()=>navigate('/cs-main-cos-coke')} >
        <div className={styles.cocaCola}>Coca Cola</div>
        <div className={styles.shorehAghdashloo}>Shoreh Aghdashloo</div>
        <div className={styles.alerts}>2 Alerts</div>
      </div>
      <div className={styles.btnCsCompany2}>
        <div className={styles.cocaCola}>PepsiCo</div>
        <div className={styles.shorehAghdashloo}>Lucas Urbisaia</div>
        <div className={styles.alerts}>1 Alerts</div>
      </div>
      <ThreadCard />
    </div>
  );
};

export default ClientsContainer;
