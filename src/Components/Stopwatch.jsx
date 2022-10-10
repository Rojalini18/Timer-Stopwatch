import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Stopwatch = () => {
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [miliSecond, setMiliSecond] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let x = null;
    if (timer) {
      x = setInterval(() => {
        if (miliSecond < 100) {
          setMiliSecond((elem) => elem + 1);
        }
        if (miliSecond == 99) {
          setMiliSecond(0);
          if (second < 59) {
            setSecond((s) => s + 1);
          } else {
            setMin((m) => m + 1);
            setSecond(0);
          }
        }
      }, 18);
    } else {
      clearInterval(x);
    }
    return () => {
      clearInterval(x);
    };
  }, [timer, second, miliSecond]);

  return (
    <div>
      <h1 className={styles.timer}>
        <span>{min < 10 ? `0${min}` : min}</span>m:
        <span>{second < 10 ? `0${second}` : second}</span>s:
        <span>{miliSecond < 10 ? `0${miliSecond}` : miliSecond}</span>ms:
      </h1>
      <div className={styles.btn}>
        {timer ? (
          <button
            onClick={() => {
              setTimer(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => {
              setTimer(true);
            }}
          >
            Start
          </button>
        )}

        <button
          onClick={() => {
            setMin(0);
            setSecond(0);
            setMiliSecond(0);
            setTimer(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
