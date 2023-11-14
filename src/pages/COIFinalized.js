import FileViewerHeader from "../components/FileViewerHeader";
import styles from "./COIFinalized.module.css";

const COIFinalized = () => {
  return (
    <div className={styles.coiFinalized}>
      <FileViewerHeader buttonText="Finalize" />
      <div className={styles.coiFinalizedInner}>
        <div className={styles.censoredTemplate1Parent}>
          <img
            className={styles.censoredTemplate1Icon}
            alt=""
            src="/censored-template-1@2x.png"
          />
          <div className={styles.theCocaColaCompany88HarboWrapper}>
            <div className={styles.theCocaColaContainer}>
              <p className={styles.theCocaCola}>The Coca Cola Company</p>
              <p className={styles.theCocaCola}>88 Harbor Str.</p>
              <p className={styles.theCocaCola}>Toronto, ON, Canada, M1V 4C0</p>
            </div>
          </div>
          <div className={styles.insurecoInsuranceRiskManageWrapper}>
            <div className={styles.theCocaColaContainer}>
              <p className={styles.theCocaCola}>
                InsureCo Insurance Risk Management
              </p>
              <p className={styles.theCocaCola}>67 Garden Str.</p>
              <p className={styles.theCocaCola}>Cambridge, MA, USA, 02138</p>
            </div>
          </div>
          <div className={styles.insurecoInsuranceRiskManageContainer}>
            <div className={styles.theCocaColaContainer}>
              InsureCo Insurance Risk Management
            </div>
          </div>
          <div className={styles.lucasMUrbisaiaWrapper}>
            <div className={styles.theCocaColaContainer}>Lucas M. Urbisaia</div>
          </div>
          <div className={styles.theCocaColaCompany88HarboContainer}>
            <div className={styles.theCocaColaContainer}>
              <p className={styles.theCocaCola}>The Coca Cola Company</p>
              <p className={styles.theCocaCola}>88 Harbor Str.</p>
              <p className={styles.theCocaCola}>Toronto, ON, Canada, M1V 4C0</p>
            </div>
          </div>
          <div className={styles.paintingCarpentryDrywalCWrapper}>
            <div className={styles.theCocaColaContainer}>
              <p className={styles.theCocaCola}>Painting, Carpentry, Drywal</p>
              <p className={styles.theCocaCola}>
                “Certificate holder” is added as an additional insured
                (excluding owned automobile liability) but only with respect to
                liability arising out of the business operations of the Named
                Insured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COIFinalized;
