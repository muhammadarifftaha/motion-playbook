"use client";
import React, { useState } from "react";
import styles from "./Button.module.scss";
import { cn } from "@/lib/utils";

export default function Button() {
    const [effect, setEffect] = useState(false);
    return (
        <button
            className={cn(effect && styles.animateWiggle, styles.button)}
            onClick={() => {
                setEffect(true);
            }}
            onAnimationEnd={() => setEffect(false)}
        >
            Wiggle wiggle...
        </button>
    );
}
