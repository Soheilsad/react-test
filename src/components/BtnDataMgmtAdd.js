import styles from "./BtnDataMgmtAdd.module.css";

const BtnDataMgmtAdd = () => {
  return (
    <div className={styles.btnDataMgmtAdd}>
      <img className={styles.vectorIcon} alt="" src="/vector10.svg" />
      <div className={styles.add}>Add</div>
    </div>
  );
};

export default BtnDataMgmtAdd;
