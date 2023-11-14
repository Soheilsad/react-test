import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TopbarCS from "../components/TopbarCS";
import ClientsContainer from "../components/ClientsContainer";
import EmailMessageContainer from "../components/EmailMessageContainer";
import styles from "./CSMainCokeViewSummaryExte.module.css";

const CSMainCokeViewSummaryExte = () => {
  const navigate = useNavigate();

  const onBtnCSCompaniesContainerClick = useCallback(() => {
    navigate("/client-success-select-source");
  }, [navigate]);

  return (
    <div className={styles.csMainCokeViewSummaryExte}>
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
        <TopbarCS
          dimensions="/vector21.svg"
          propBackgroundColor="unset"
          propBorder="unset"
          propColor="#00b3ff"
        />
        <div className={styles.comparisonsAutoSelectInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <ClientsContainer
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
                </div>
                <div className={styles.frameContainer}>
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
                        <div className={styles.frameGroup}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSMainCokeViewSummaryExte;
