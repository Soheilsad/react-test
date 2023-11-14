import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useNavigate,
  useLocation,
} from "react-router-dom";
import DataManagerCarriers from "./pages/DataManagerCarriers";
import ComparisonsSelectV2 from "./pages/ComparisonsSelectV2";
import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen";
import ComparisonsAutoMP from "./pages/ComparisonsAutoMP";
import CSMainCosCoke from "./pages/CSMainCosCoke";
import COIFinalized from "./pages/COIFinalized";
import CSMainCokeViewSummaryExte from "./pages/CSMainCokeViewSummaryExte";
import CSMain from "./pages/CSMain";
import CSMainCompanies from "./pages/CSMainCompanies";
import WorkflowMain from "./pages/WorkflowMain";
import WorkflowCOISetup from "./pages/WorkflowCOISetup";
import ClientSuccessSelectSource from "./pages/ClientSuccessSelectSource";
import ClientSuccessOutlook from "./pages/ClientSuccessOutlook";
import ClientSuccessGmail from "./pages/ClientSuccessGmail";
import WorkflowCOISaveAndShare from "./pages/WorkflowCOISaveAndShare";
import PDFReader1 from "./pages/PDFReader1";
import COITemplateReader1 from "./pages/COITemplateReader1";
import PolicyTemplateReader1 from "./pages/PolicyTemplateReader1";
import COIReviewer1 from "./pages/COIReviewer1";
import CSMainCokeViewSummary from "./pages/CSMainCokeViewSummary";
import CSMainCokeViewSummaryUnex from "./pages/CSMainCokeViewSummaryUnex";
import ClientSuccessUpload from "./pages/ClientSuccessUpload";
import ComparisonsSelect from "./pages/ComparisonsSelect";
import ComparisonsAutoLL from "./pages/ComparisonsAutoLL";
import ComparisonsCreateComparison from "./pages/ComparisonsCreateComparison";
import DataManagerCompanies from "./pages/DataManagerCompanies";
import DataManagerPersons from "./pages/DataManagerPersons";
import IntegrationsMain from "./pages/IntegrationsMain";
import BoundingBoxImage from "./pages/test";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const token = localStorage.getItem('token');
  const navigate = useNavigate()
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/comparisons-select-v2":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/login-screen":
        title = "";
        metaDescription = "";
        break;
      case "/comparisons-auto-mp":
        title = "";
        metaDescription = "";
        break;
      case "/cs-main-cos-coke":
        title = "";
        metaDescription = "";
        break;
      case "/coi-finalized":
        title = "";
        metaDescription = "";
        break;
      case "/cs-main-coke-view-summary-extend":
        title = "";
        metaDescription = "";
        break;
      case "/cs-main":
        title = "";
        metaDescription = "";
        break;
      case "/cs-main-companies":
        title = "";
        metaDescription = "";
        break;
      case "/workflow-main":
        title = "";
        metaDescription = "";
        break;
      case "/workflow-coi-setup":
        title = "";
        metaDescription = "";
        break;
      case "/client-success-select-source":
        title = "";
        metaDescription = "";
        break;
      case "/client-success-outlook":
        title = "";
        metaDescription = "";
        break;
      case "/client-success-gmail":
        title = "";
        metaDescription = "";
        break;
      case "/workflow-coi-save-and-share":
        title = "";
        metaDescription = "";
        break;
      case "/pdf-reader-1":
        title = "";
        metaDescription = "";
        break;
      case "/coi-template-reader-1":
        title = "";
        metaDescription = "";
        break;
      case "/policy-template-reader-1":
        title = "";
        metaDescription = "";
        break;
      case "/coi-reviewer-1":
        title = "";
        metaDescription = "";
        break;
      case "/cs-main-coke-view-summary":
        title = "";
        metaDescription = "";
        break;
      case "/cs-main-coke-view-summaryunextended":
        title = "";
        metaDescription = "";
        break;
      case "/client-success-upload":
        title = "";
        metaDescription = "";
        break;
      case "/comparisons-select":
        title = "";
        metaDescription = "";
        break;
      case "/comparisons-auto-ll":
        title = "";
        metaDescription = "";
        break;
      case "/comparisons-create-comparison":
        title = "";
        metaDescription = "";
        break;
      case "/data-manager-companies":
        title = "";
        metaDescription = "";
        break;
      case "/data-manager-persons":
        title = "";
        metaDescription = "";
        break;
      case "/integrations-main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      {token ? (
                <>
      <Route path="/DataManagerCarriers" element={<DataManagerCarriers />} />
      <Route path="/comparisons-select-v2" element={<ComparisonsSelectV2 />} />
      <Route path="/" element={<Home />} />
      <Route path="/comparisons-auto-mp" element={<ComparisonsAutoMP />} />
      <Route path="/cs-main-cos-coke" element={<CSMainCosCoke />} />
      <Route path="/coi-finalized" element={<COIFinalized />} />
      <Route
        path="/cs-main-coke-view-summary-extend"
        element={<CSMainCokeViewSummaryExte />}
      />
      <Route path="/cs-main" element={<CSMain />} />
      <Route path="/test" element={<BoundingBoxImage />} />
      <Route path="/cs-main-companies" element={<CSMainCompanies />} />
      <Route path="/workflow-main" element={<WorkflowMain />} />
      <Route path="/workflow-coi-setup" element={<WorkflowCOISetup />} />
      <Route
        path="/client-success-select-source"
        element={<ClientSuccessSelectSource />}
      />
      <Route
        path="/client-success-outlook"
        element={<ClientSuccessOutlook />}
      />
      <Route path="/client-success-gmail" element={<ClientSuccessGmail />} />
      <Route
        path="/workflow-coi-save-and-share"
        element={<WorkflowCOISaveAndShare />}
      />
      <Route path="/pdf-reader-1" element={<PDFReader1 />} />
      <Route path="/coi-template-reader-1" element={<COITemplateReader1 />} />
      <Route
        path="/policy-template-reader-1"
        element={<PolicyTemplateReader1 />}
      />
      <Route path="/coi-reviewer-1" element={<COIReviewer1 />} />
      <Route
        path="/cs-main-coke-view-summary"
        element={<CSMainCokeViewSummary />}
      />
      <Route
        path="/cs-main-coke-view-summaryunextended"
        element={<CSMainCokeViewSummaryUnex />}
      />
      <Route path="/client-success-upload" element={<ClientSuccessUpload />} />
      <Route path="/comparisons-select" element={<ComparisonsSelect />} />
      <Route path="/comparisons-auto-ll" element={<ComparisonsAutoLL />} />
      <Route
        path="/comparisons-create-comparison"
        element={<ComparisonsCreateComparison />}
      />
      <Route
        path="/data-manager-companies"
        element={<DataManagerCompanies />}
      />
      <Route path="/data-manager-persons" element={<DataManagerPersons />} />
      <Route path="/integrations-main" element={<IntegrationsMain />} />
      </>):()=>navigate('/login')}
    </Routes>
  );
}
export default App;
