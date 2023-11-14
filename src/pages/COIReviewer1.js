import { useLocation, useNavigate } from "react-router-dom";
import FileViewerHeader from "../components/FileViewerHeader";
import styles from "./COIReviewer1.module.css";

const COIReviewer1 = () => {
  const location = useLocation(); 
  const urlforpdf = location.state?.url.url; 
  console.log(location.state?.url)
  return (
    <div className={styles.coiReviewer1}>
      <FileViewerHeader buttonText="Accept All" />
      <iframe src={urlforpdf} width="100%" height="600px"></iframe>

      {/* <div className={styles.groupParent}>
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
        <div className={styles.btnAccept1}>
          <div className={styles.accept}>Accept</div>
        </div>
        <div className={styles.btnReview1}>
          <div className={styles.accept}>Review</div>
        </div>
      </div> */}
    </div>
  );
};

export default COIReviewer1;
