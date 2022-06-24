import React, { useEffect, useRef } from "react";

import styles from "./modal.module.css";

export const Modal = ({
  modalStyle,
  children,
  show,
  onClose,
  backdropStyle,
}) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={`${styles.modal__wrap}`}
      >
        <div style={modalStyle} className={styles.modal}>
          <div className={styles.close}>
            <div className={styles.WrapperClose}>
              <button onClick={onClose} className={styles.Close}>
                X
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
