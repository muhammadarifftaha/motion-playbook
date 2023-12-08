"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { cn } from "@/lib/utils";

interface NavbarState {
    burger_class: string;
    menu_class: string;
    isMenuClicked: boolean;
}

const Navbar: React.FC = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(true);

    const updateMenu = () => {
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.burgerMenu} onClick={updateMenu}>
                    <div
                        className={cn(
                            isMenuClicked
                                ? styles.burgerBarClicked
                                : styles.burgerBarUnclicked
                        )}
                    ></div>
                    <div
                        className={cn(
                            isMenuClicked
                                ? styles.burgerBarClicked
                                : styles.burgerBarUnclicked
                        )}
                    ></div>
                    <div
                        className={cn(
                            isMenuClicked
                                ? styles.burgerBarClicked
                                : styles.burgerBarUnclicked
                        )}
                    ></div>
                </div>
            </nav>

            <div
                className={cn(
                    isMenuClicked ? styles.menuShow : styles.menuHide
                )}
            >
                {isMenuClicked && (
                    <div>
                        <div className={"menuContent1"}>
                            <p></p>
                        </div>
                        <div className={"menuContent2"}>
                            <p></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
