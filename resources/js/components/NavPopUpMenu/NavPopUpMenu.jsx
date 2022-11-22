import { Link } from "@inertiajs/inertia-react";
import styles from "./NavPopUpMenu.module.css";
import React from "react";

export default function NavPopUpMenu({ navMenuIsOpenState }) {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.closeButtonContainer}>
                <div className={styles.navLinks}>
                    <Link href="/boka">BOKA &rarr;</Link>
                    <Link href="/cykling">CYKLING &rarr; </Link>
                    <Link href="/galleri">GALLERI &rarr;</Link>
                    <Link href="/om-oss">OM OSS &rarr;</Link>
                    <Link href="/kontakt">KONTAKT &rarr;</Link>
                </div>
                <button
                    onClick={() => navMenuIsOpenState(false)}
                    className={styles.closeButton}
                >
                    <div className={styles.closeButtonCrossLineOne}></div>
                    <div className={styles.closeButtonCrossLineTwo}></div>
                </button>
            </div>
        </div>
    );
}
