import React, { useState } from 'react';
import styles from './UploadFileContainer.module.css';

const UploadFileContainer = ({SetUploadOverlayHandler}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const uploadFileToAzureBlobStorage = async () => {
    if (selectedFile) {
      
      
      try {
        SetUploadOverlayHandler(false)
        // You can add additional logic or UI updates here upon successful upload.
      } catch (error) {
        console.error('Error uploading the file:', error);
      }
    } else {
      console.warn('No file selected for upload.');
    }
  };

  return (
    <div
      className={styles.antDesigncloudUploadOutlinParent}
      onDrop={handleFileDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <img
        className={styles.antDesigncloudUploadOutlinIcon}
        alt=""
        src="/antdesignclouduploadoutlined.svg"
      />
      <div className={styles.dragAndDrop}>Drag and Drop here</div>
      <div className={styles.orWrapper}>
        <div className={styles.or}>or</div>
      </div>
      <div className={styles.selectFileWrapper}>
        <input type="file" onChange={handleFileChange} className={styles.fileInput} />
        <div className={styles.selectFile}>Select file</div>
      </div>
      <button onClick={uploadFileToAzureBlobStorage} className={styles.uploadButton}>
        Upload File
      </button>
    </div>
  );
};

export default UploadFileContainer;
