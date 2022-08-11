import React from "react";
import styles from "./Pill.module.scss";

const Pill = ({ text }: { text: string }) => {
  return <p className={styles.pill}>{text}</p>;
};

export default Pill;
