import React from "react";
import styles from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={styles.empty}>
      <p>Error 404</p>
      <p>Sin Resultados</p>
    </div>
  );
};
