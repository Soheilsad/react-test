import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "./WorkflowCOISetup.module.css";
import LoadingSpinner from "../components/Spinner";
import UploadFileContainer from '../components/UploadFileContainer'
import { useSelector, useDispatch } from 'react-redux';

const WorkflowCOISetup = () => {
  const navigate = useNavigate()
  const [url, setUrl] = useState('');
  const [loading,setLoading]=useState(false);
  const [isUploading,setIsUploading]=useState(false)
  const [uploadOverlayOpen,setUploadOverlayOpen]=useState(false)
  const userId = useSelector(state => state.user.userId);
  console.log(userId)
  const [selectedOption, setSelectedOption] = useState({
    selectedClient:'',
    selectedForm:'',
    selectedPolicy:''

  });
  const handlesetSelectedOption = (value,key) =>{
  if(key == 'client') {
    setSelectedOption({...selectedOption,selectedClient:value});
  } 
  if(key == 'form') {
    setSelectedOption({...selectedOption,selectedForm:value});
  } 
  if(key == 'policy') {
    setSelectedOption({...selectedOption,selectedPolicy:value});
  } 
  }
  console.log(selectedOption)
  const [options, setOptions] = useState(
    {
      clientOptions:[],
      formOptions:[],
      policyOptions:[],

    }
  );

  const callAzureFunction = async () => {
      try {
          setLoading(true);
          const response = await fetch("https://praxos.azurewebsites.net/api/CoI-crone-trigger?code=95TBmR20Q6eM3tydqWyrZJxhR0T7kkggqYSyik2Fp90fAzFu8I4sbA==");
          const data = await response.text();
          console.log('response')
          console.log(JSON.parse(data))
          setUrl(JSON.parse(data)); 
          navigate('/coi-reviewer-1', { state: { url: JSON.parse(data) } }); 
      } catch (error) {
          console.error('Error calling Azure Function:', error);
      }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://praxos-webapi.azurewebsites.net/api/getPolicies?code=3N9r0wT1BVILpml4dZMbDx6yXVLFKsEIBNjx5J3uZ4MGAzFurmHyWw==", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId.toString(),
            clientId: '1',
            task: 'GET_POLICIES_FOR_USER'
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          setOptions({...options,policyOptions:data})
          console.log(options)
          
        } else {
          console.error("Failed to fetch data"); // Handle the error accordingly
        }
      } catch (error) {
        console.error("Error fetching data: ", error); // Handle the error accordingly
      }
    };
  
    fetchData();
  }, [selectedOption.selectedClient]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://praxos-webapi.azurewebsites.net/api/getPolicies?code=3N9r0wT1BVILpml4dZMbDx6yXVLFKsEIBNjx5J3uZ4MGAzFurmHyWw==", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            task: 'GET_FORMS',
            userId: userId.toString()
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('solution');
          console.log(data);
          setOptions({...options,formOptions:data})
          console.log(options)
          
        } else {
          console.error("Failed to fetch data"); // Handle the error accordingly
        }
      } catch (error) {
        console.error("Error fetching data: ", error); // Handle the error accordingly
      }
    };
  
    fetchData();
  }, [userId]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://praxos-webapi.azurewebsites.net/api/getPolicies?code=3N9r0wT1BVILpml4dZMbDx6yXVLFKsEIBNjx5J3uZ4MGAzFurmHyWw==", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId.toString(),
            task: 'GET_CLIENTS_FOR_USER'
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setOptions({...options,clientOptions:data})
          console.log(options)
          
        } else {
          console.error("Failed to fetch data"); // Handle the error accordingly
        }
      } catch (error) {
        console.error("Error fetching data: ", error); // Handle the error accordingly
      }
    };
  
    fetchData();
  }, [userId]); 
  return (
    <div className={styles.workflowCoiSetup}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector23.svg"
        vector2="/vector2.svg"
        vector3="/vector13.svg"
        vector4="/vector4.svg"
        btnComps={false}
        sidebarHeight="unset"
        sidebarAlignSelf="stretch"
        btnCompsBackgroundColor="unset"
        comparisonsColor="1px solid #575757"
        btnWorkflowsBackgroundColor="#f1f1f1"
        workflowsColor="#00b3ff"
        btnClientSuccessBackgroundColor="unset"
        clientSuccessColor="1px solid #575757"
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Workflows" />
        {loading && <LoadingSpinner />}
        {uploadOverlayOpen && <UploadFileContainer SetUploadOverlayHandler={setUploadOverlayOpen} />}
        {!loading && !uploadOverlayOpen && <div className={styles.frameParent}>
          <div className={styles.btnWkfwReturnToMainParent}>
            <img
              className={styles.btnWkfwReturnToMainIcon}
              alt=""
              onClick={()=>navigate(-1)}
              src="/btn-wkfw-return-to-main.svg"
            />
            <div className={styles.createAWorkflow}>Create a Workflow</div>
          </div>
          
          <div className={styles.btnWkfwCoiParent}>
            <div className={styles.btnWkfwCoi}>
              <div className={styles.certificateOfInsurance}>
                Certificate of Insurance
              </div>
            </div>
            <div className={styles.btnWkfwRenewalForm}>
              <div className={styles.certificateOfInsurance}>Renewal Forms</div>
            </div>
          </div>
          <div className={styles.certificateTemplateParent}>
            <div className={styles.clientDataAiAssistedContainer}>
              <span className={styles.clientData}>
                <span>Client</span>
              </span>
              <span className={styles.aiAssistedAutocompleteDat}>
                <span className={styles.clientData}>{` `}</span>
                <span>(AI-assisted autocomplete — data from Hubspot)</span>
              </span>
            </div>
            <div className={styles.pleaseUploadA}>
              Please review and edit client data.
            </div>
          </div>
          <div className={styles.coiTemplateParent}>
            <div className={styles.cokeColaParent}>
            {options.clientOptions && <div className={styles.certificateOfInsurance}>
              <select
              className={styles.clientSelector}
              value={selectedOption.selectedClient}
              onChange={(e) => handlesetSelectedOption(e.target.value,'client')}
              >
              <option value="">Select a Client</option>
              {options.clientOptions.map((option, index) => (
                <option key={index} value={option.clientId}>
                  {option.client_name}
                </option>
              ))}
            </select>
              </div>}
              <div className={styles.x}>X</div>
            </div>
            <div className={styles.btnWkfwEdit}>
              <div className={styles.x}>Edit</div>
            </div>
          </div>
          <div className={styles.certificateTemplateParent}>
            <div className={styles.certificateTemplate}>
              Certificate Template
            </div>
            <div className={styles.pleaseUploadA}>
              Please upload a template of the document to fill in.
            </div>
          </div>
          <div className={styles.coiTemplateParent}>
            <div className={styles.coiTemplate}>
            {options.formOptions && <div className={styles.certificateOfInsurance}>
              <select
              className={styles.clientSelector}
              value={selectedOption.selectedForm.id}
              onChange={(e) => handlesetSelectedOption(e.target.value,'form')}>
              <option value="">Select a CoI template</option>
              {options.formOptions.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.formName}
                </option>
              ))}
            </select>
              </div>}
              <div className={styles.x}>X</div>
            </div>
            <div className={styles.btnWkfwEdit}>
              <div className={styles.x}>Edit</div>
            </div>
            <div className={styles.btnWkfwEdit} onClick={()=>{setUploadOverlayOpen(true)}}>
              <div className={styles.x}>Upload New</div>
            </div>
          </div>
          <div className={styles.certificateTemplateParent}>
            <div className={styles.certificateTemplate}>Policy File</div>
            <div className={styles.pleaseUploadA}>
              Please upload a copy of the carrier policy to extract data from.
            </div>
          </div>
          <div className={styles.coiTemplateParent}>
            <div className={styles.coiTemplate}>
            {options.policyOptions && <div className={styles.certificateOfInsurance}>
              <select
              className={styles.clientSelector}
              value={selectedOption.selectedClient}
              onChange={(e) => handlesetSelectedOption(e.target.value,'policy')}
              >
              <option value="">Select a Client</option>
              {options.policyOptions.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.policyName}
                </option>
              ))}
            </select>
              </div>}
              <div className={styles.x}>X</div>
            </div>
            <div className={styles.btnWkfwEdit}>
              <div className={styles.x}>Edit</div>
            </div>
          </div>

          <div className={styles.certificateTemplateParent}>
            <div className={styles.clientDataAiAssistedContainer}>
              <span className={styles.clientData}>
                <span>Changes, Addendums, Amendments</span>
              </span>
              <span className={styles.aiAssistedAutocompleteDat}>
                <span className={styles.clientData}>{` `}</span>
                <span>(AI-assisted autocomplete — data from Hubspot)</span>
              </span>
            </div>
            <div className={styles.pleaseUploadA}>
              Please upload any addenda not currently included in the client’s
              data.
            </div>
          </div>
          <div className={styles.coiTemplateParent}>
            <div className={styles.cokeColaParent}>
              <div className={styles.certificateOfInsurance}>(Empty)</div>
              <div className={styles.x}>X</div>
            </div>
            <div className={styles.btnWkfwEdit}>
              <div className={styles.x}>Edit</div>
            </div>
          </div>
          <div className={styles.certificateTemplateParent}>
            <div className={styles.clientDataAiAssistedContainer}>
              <span className={styles.clientData}>
                <span>Contractual Obligations</span>
              </span>
              <span className={styles.aiAssistedAutocompleteDat}>
                <span className={styles.clientData}>{` `}</span>
                <span>(AI-assisted autocomplete — data from Hubspot)</span>
              </span>
            </div>
            <div className={styles.pleaseUploadA}>
              Please upload any other contractual obligations.
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.cokeColaParent}>
                <div className={styles.certificateOfInsurance}>(Empty)</div>
                <div className={styles.x}>X</div>
              </div>
              <div className={styles.btnWkfwEdit}>
                <div className={styles.x}>Edit</div>
              </div>
            </div>
            <div className={styles.btnWkfwCoiGo} onClick={callAzureFunction}>
              <div className={styles.x}>Go</div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default WorkflowCOISetup;
