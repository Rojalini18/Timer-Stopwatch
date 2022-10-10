import React, { useState } from "react";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import styles from "./Combine.module.css";

const Combine = () => {
  const [view, setView] = useState(true);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.nav}>
          <button
            className={view ? styles.active : ""}
            onClick={() => setView(true)}
          >
            Timer
          </button>
          <button
            className={view ? "" : styles.active}
            onClick={() => setView(false)}
          >
            Stopwatch
          </button>
        </div>
        <div className={styles.main}>{view ? <Timer /> : <Stopwatch />}</div>
      </div>
    </div>
  );
};

export default Combine;
