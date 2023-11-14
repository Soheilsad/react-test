import styles from "./EmailMessageContainer.module.css";

const EmailMessageContainer = () => {
  return (
    <div className={styles.emailAreaWrapper}>
      <div className={styles.emailArea}>
        <div className={styles.textContent}>
          <p className={styles.soheil}>Soheil,</p>
          <p className={styles.soheil}>
            Our IT team is looking into phasing out Office for desktop and
            moving to Office 365.
          </p>
          <p className={styles.soheil}>
            Sonia (CC’d) at Risk and I are writing to seek clarification on our
            current cybersecurity insurance policy and whether it provides
            coverage for specific aspects of this initiative. We want to ensure
            that we maintain comprehensive cybersecurity coverage during and
            after this transition.
          </p>
          <ul className={styles.theTransitionWillBeHandled}>
            <li className={styles.theTransitionWill}>
              The transition will be handled by contractors.
            </li>
            <li className={styles.theTransitionWill}>
              A portion of the user data will be stored temporarily in a
              different cloud service as a backup.
            </li>
          </ul>
          <p className={styles.soheil}>
            We are particularly interested in understanding if this move could
            potentially impact our coverage or necessitate any adjustments to
            our policy. If our current policy doesn't provide adequate coverage
            for this transition, I kindly request your guidance on any necessary
            policy amendments.
          </p>
          <p className={styles.soheil}>
            Could you please review our current policy and let us know next
            steps?
          </p>
          <p className={styles.soheil}>&nbsp;</p>
          <p className={styles.soheil}>Many thanks,</p>
          <p className={styles.soheil}>Shoreh</p>
          <p className={styles.theCocaColaCompany}>The Coca-Cola Company</p>
        </div>
        <img
          className={styles.dividerHorizontal}
          alt=""
          src="/divider--horizontal.svg"
        />
        <div className={styles.actionButtons}>
          <div className={styles.actionButton}>
            <img className={styles.iconReply} alt="" src="/icon--reply.svg" />
            <div className={styles.reply}>Reply</div>
          </div>
          <div className={styles.actionButton1}>
            <img
              className={styles.iconReply}
              alt=""
              src="/icon--reply-all.svg"
            />
            <div className={styles.reply}>Reply all</div>
          </div>
          <div className={styles.actionButton2}>
            <img className={styles.iconReply} alt="" src="/icon-forward.svg" />
            <div className={styles.reply}>Forward</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMessageContainer;
