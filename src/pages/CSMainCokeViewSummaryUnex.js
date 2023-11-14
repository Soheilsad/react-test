import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ClientsContainer from "../components/ClientsContainer";
import EmailMessageContainer from "../components/EmailMessageContainer";
import styles from "./CSMainCokeViewSummaryUnex.module.css";

const CSMainCokeViewSummaryUnex = () => {
  const navigate = useNavigate();

  const onBtnCSCompaniesContainerClick = useCallback(() => {
    navigate("/client-success-select-source");
  }, [navigate]);
  return (
    <div className={styles.csMainCokeViewSummaryUnex}>
      <Sidebar
        vector="/vector.svg"
        vector1="/vector1.svg"
        vector2="/vector25.svg"
        vector3="/vector13.svg"
        vector4="/vector4.svg"
        btnComps={false}
        sidebarHeight="924px"
        sidebarAlignSelf="unset"
        btnCompsBackgroundColor="unset"
        comparisonsColor="1px solid #575757"
        btnWorkflowsBackgroundColor="unset"
        workflowsColor="1px solid #575757"
        btnClientSuccessBackgroundColor="#f1f1f1"
        clientSuccessColor="#00b3ff"
        btnDataMngrBackgroundColor="unset"
        dataManagerColor="1px solid #575757"
        btnIntegrationsBackgroundColor="unset"
        integrationsColor="1px solid #575757"
      />
      <div className={styles.comparisonsAutoSelect}>
        <Topbar pageTitle="Client Success" />
        <div className={styles.topbarCs}>
          <div className={styles.btnCsViewsParent}>
            <div className={styles.btnCsViews}>
              <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
              <div className={styles.views}>Views</div>
            </div>
            <div className={styles.btnCsViews}>
              <img className={styles.vectorIcon1} alt="" src="/vector22.svg" />
              <div className={styles.views}>Add</div>
            </div>
            <div className={styles.btnCsViews}>
              <img className={styles.vectorIcon2} alt="" src="/vector9.svg" />
              <div className={styles.views}>Export</div>
            </div>
          </div>
          <div className={styles.btnCsAssociatedFilesParent}>
            <div className={styles.btnCsAssociatedFiles}>
              <div className={styles.views}>Files</div>
            </div>
            <div className={styles.btnCsProfileSummarize}>
              <div className={styles.views}>Summary</div>
            </div>
            <div className={styles.btnCsAssociatedFiles}>
              <div className={styles.views}>Notes</div>
            </div>
          </div>
        </div>
        <div className={styles.comparisonsAutoSelectInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <ClientsContainer
                propAlignSelf="stretch"
                propFlex="1"
                propWidth="unset"
                propFlexShrink="unset"
                propFlex1="1"
                propWidth1="unset"
                propFlexShrink1="unset"
                propBorderLeft="4px solid var(--blue-light)"
                onBtnCSCompaniesContainerClick={onBtnCSCompaniesContainerClick}
              />
              <div className={styles.carrierNameParent}>
                <div className={styles.carrierName}>
                  <img
                    className={styles.btnCsBackProfileIcon}
                    onClick={() => navigate(-1)}
                    alt=""
                    src="/btn-cs-back-profile.svg"
                  />
                  <div className={styles.thread}>Thread</div>
                  <div className={styles.summaryParent}>
                    <div className={styles.thread}>Summary</div>
                    <img

                      className={styles.csCloseSummaryIcon}
                      alt="close"
                      onClick={()=>navigate('/cs-main-coke-view-summary-extend')}
                      src="/cs-close-summary.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.subjectParent}>
                    <div className={styles.subject}>
                      <div className={styles.layoutSubject}>
                        <div className={styles.emailViewSubject}>
                          <div className={styles.subjectOfEmail}>
                            Cyber policy question
                          </div>
                        </div>
                        <img
                          className={styles.emailRowLabelImportant}
                          alt=""
                          src="/email-row--label-important.svg"
                        />
                        <div className={styles.categoryBadge}>
                          <div className={styles.categoryBadge1}>
                            <div className={styles.inbox}>Inbox</div>
                            <img
                              className={styles.closeIcon}
                              alt=""
                              src="/close.svg"
                            />
                          </div>
                          <div className={styles.categoryBadge2}>
                            <div className={styles.inbox}>Promotions</div>
                            <img
                              className={styles.closeIcon}
                              alt=""
                              src="/close1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.iconPrintParent}>
                        <img
                          className={styles.iconPrint}
                          alt=""
                          src="/icon-print.svg"
                        />
                        <img
                          className={styles.iconPrint}
                          alt=""
                          src="/icon--open-in-new.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.recipientTimestamp}>
                      <div className={styles.layoutToFrom}>
                        <img
                          className={styles.avatarIcon}
                          alt=""
                          src="/avatar.svg"
                        />
                        <div className={styles.frameContainer}>
                          <div className={styles.emailViewFromNameParent}>
                            <div className={styles.emailViewFromName}>
                              <b className={styles.recipientName}>
                                Shoreh Aghdashloo
                              </b>
                            </div>
                            <div className={styles.emailViewFromEmail}>
                              <div className={styles.inbox}>{`<`}</div>
                              <div className={styles.inbox}>
                                saghdashloo@coke.com
                              </div>
                              <div className={styles.inbox}>{`>`}</div>
                            </div>
                            <div className={styles.unsubscribe}>
                              Unsubscribe
                            </div>
                          </div>
                          <div className={styles.emailViewTo}>
                            <div className={styles.emailViewToTo}>
                              <div className={styles.to}>to</div>
                            </div>
                            <div className={styles.emailViewSubject}>
                              <div className={styles.emailViewSubject}>
                                <div className={styles.inbox}>me</div>
                              </div>
                              <img
                                className={styles.arrowIcon}
                                alt=""
                                src="/arrow.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.timestamp}>
                        <div className={styles.emailViewTimeStamp}>
                          <div className={styles.inbox}>9:14 AM</div>
                          <div className={styles.inbox}>(8 hours ago)</div>
                        </div>
                        <img
                          className={styles.emailRowStar}
                          alt=""
                          src="/email-row--star.svg"
                        />
                        <img
                          className={styles.emailRowStar}
                          alt=""
                          src="/icon--reply1.svg"
                        />
                        <img
                          className={styles.moreIcon}
                          alt=""
                          src="/more.svg"
                        />
                      </div>
                    </div>
                    <EmailMessageContainer />
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.textContentWrapper}>
                      <div className={styles.textContent}>
                        Coke needs to review and update its cyber insurance
                        policy (if necessary).
                      </div>
                    </div>
                    <div className={styles.textContentWrapper}>
                      <div className={styles.textContent}>
                        Coke is migrating part of its software stack to MSFT
                        Cloud.
                      </div>
                    </div>
                    <div className={styles.textContentWrapper}>
                      <div className={styles.textContent}>
                        Contractors will perform the migration.
                      </div>
                    </div>
                    <div className={styles.textContentWrapper}>
                      <div className={styles.textContent}>
                        Data will be stored at a third party cloud provider
                        during backup.
                      </div>
                    </div>
                    <div className={styles.actionsWrapper}>
                      <div className={styles.actions}>Actions</div>
                    </div>
                    <div className={styles.textContentWrapper}>
                      <div className={styles.textContent}>
                        5 relevant items found in policy
                      </div>
                    </div>
                    <div className={styles.btnCsAssociatedFilesDirectParent}>
                      <div className={styles.btnCsAssociatedFilesDirect}>
                        <div className={styles.views}>Go To</div>
                      </div>
                      <div className={styles.btnCsAssociatedFilesDirect} onClick={()=>navigate('/cs-main-coke-view-summary')}>
                        <div className={styles.views}>Summarize</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSMainCokeViewSummaryUnex;
