import { useMemo } from "react";
import styles from "./MenuDataMgmtOptns.module.css";

const MenuDataMgmtOptns = ({
  btnDataMgmCarriers,
  btnDataMgmCompaniesBackgroundColor,
  companiesColor,
  btnDataMgmPersonsBackgroundColor,
  personsColor,
  btnDataMgmCarriersBackgroundColor,
  carriersColor,
}) => {
  const btnDataMgmCompaniesStyle = useMemo(() => {
    return {
      backgroundColor: btnDataMgmCompaniesBackgroundColor,
    };
  }, [btnDataMgmCompaniesBackgroundColor]);

  const companiesStyle = useMemo(() => {
    return {
      color: companiesColor,
    };
  }, [companiesColor]);

  const btnDataMgmPersonsStyle = useMemo(() => {
    return {
      backgroundColor: btnDataMgmPersonsBackgroundColor,
    };
  }, [btnDataMgmPersonsBackgroundColor]);

  const personsStyle = useMemo(() => {
    return {
      color: personsColor,
    };
  }, [personsColor]);

  const btnDataMgmCarriersStyle = useMemo(() => {
    return {
      backgroundColor: btnDataMgmCarriersBackgroundColor,
    };
  }, [btnDataMgmCarriersBackgroundColor]);

  const carriersStyle = useMemo(() => {
    return {
      color: carriersColor,
    };
  }, [carriersColor]);

  return (
    <div className={styles.menuDataMgmtOptns}>
      <div
        className={styles.btnDataMgmCompanies}
        style={btnDataMgmCompaniesStyle}
      >
        <div className={styles.companies} style={companiesStyle}>
          Companies
        </div>
      </div>
      <div
        className={styles.btnDataMgmCompanies}
        style={btnDataMgmPersonsStyle}
      >
        <div className={styles.companies} style={personsStyle}>
          Persons
        </div>
      </div>
      {!btnDataMgmCarriers && (
        <div
          className={styles.btnDataMgmCarriers}
          style={btnDataMgmCarriersStyle}
        >
          <div className={styles.companies} style={carriersStyle}>
            Carriers
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDataMgmtOptns;
