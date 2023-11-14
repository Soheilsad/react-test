import React, { useState, useEffect } from 'react';
import styles from "./Spinner.module.css";

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center' }}>
    <div className={styles.spinner} ><iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" className={styles.iframe}
    allowFullScreen></iframe></div>
  </div>
);
export default LoadingSpinner