import React from "react";
import styles from "./LoadingWaves.module.scss";

export default function Loading() {
    return (
        <div className={styles.wave}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>
    );
}
