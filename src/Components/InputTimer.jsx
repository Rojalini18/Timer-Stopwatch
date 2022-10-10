import React from "react";
import styles from "./Timer.module.css";

const InputTimer = (props) => {
  const { setMin } = props;
  return (
    <div>
      <input
        type="number"
        placeholder="Enter Seconds"
        onChange={(item) => setMin(Math.floor(item.target.value / 60))}
      />
    </div>
  );
};

export default InputTimer;
