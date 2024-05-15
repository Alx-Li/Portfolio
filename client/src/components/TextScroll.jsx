"use client";
import styles from "./TextScroll.module.scss";
import { useProgress } from "@react-three/drei";

export default function TextScroll() {
  const { progress } = useProgress();

  return (
    <>
      {progress == 100 && (
        <div className={styles.base}>
          <div className={styles.animWrapper}>
            <span>WORK IN PROGRESS //&nbsp;</span>
            <span>WORK IN PROGRESS //&nbsp;</span>
          </div>
          <div className={styles.animWrapper2}>
            <span>WORK IN PROGRESS //&nbsp;</span>
            <span>WORK IN PROGRESS //&nbsp;</span>
          </div>
          <div className={styles.animWrapper3}>
            <span>WORK IN PROGRESS //&nbsp;</span>
            <span>WORK IN PROGRESS //&nbsp;</span>
          </div>
          <div className={styles.animWrapper4}>
            <span>WORK IN PROGRESS //&nbsp;</span>
            <span>WORK IN PROGRESS //&nbsp;</span>
          </div>
          <div className={styles.animWrapper5}>
            <span>WORK IN PROGRESS //&nbsp;</span>
            <span>WORK IN PROGRESS //&nbsp;</span>
          </div>
          <div className={styles.animWrapper6}>
            <span>WORK IN PROGRESS //&nbsp;</span>
            <span>WORK IN PROGRESS //&nbsp;</span>
          </div>
        </div>
      )}
    </>
  );
}
