"use client";
import React, { useState } from "react";
import styles from "./Button.module.scss";

export default function Button() {
    const [effect, setEffect] = useState(false);
    return (
        <div className="flex h-screen flex-col justify-center">
            <div className="flex justify-center">
                <button
                    className={`${
                        effect && styles.animateWiggle
                    } bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
                    onClick={() => {
                        setEffect(true);
                    }}
                    onAnimationEnd={() => setEffect(false)}
                >
                    Wiggle wiggle...
                </button>
            </div>
        </div>
    );
}
