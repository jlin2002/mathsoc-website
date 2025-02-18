// Library Imports
import React from "react";

// Styling
import styles from "src/styles/WholePageBox.module.scss";

interface WholePageBoxProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key?: any;
}

const WholePageBox: React.FC<WholePageBoxProps> = ({ children }) => {
  return (
    <div className={styles.cardBackground}>
      <section className={styles.content}>{children}</section>
    </div>
  );
};

export default WholePageBox;
