import React, { useState } from "react";
import styles from "./gallery.module.css";
import NavBar from "../../components/NavBar/NavBar";
export default function Galleri() {
    return (
        <div>
            <NavBar />

            <div className={styles.gridWrapper}>
                <div className={styles.columnOne}>
                    <div>
                        <img src={"assets/galleri/1.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/2.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/3.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/4.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/5.JPG"} />
                    </div>
                    <img src={"assets/galleri/6.JPG"} />
                    <div>
                        <img src={"assets/galleri/7.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/8.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/9.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/10.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/11.JPG"} />
                    </div>

                    <div>
                        <img src={"assets/galleri/12.JPG"} />
                    </div>
                </div>
                <div className={styles.columnTwo}>
                    <div>
                        <img src={"assets/galleri/13.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/14.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/15.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/16.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/17.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/18.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/19.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/20.JPG"} />
                    </div>

                    <div>
                        <img src={"assets/galleri/21.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/22.JPG"} />
                    </div>

                    <div>
                        <img src={"assets/galleri/23.JPG"} />
                    </div>
                </div>
                <div className={styles.columnThree}>
                    <div>
                        <img src={"assets/galleri/24.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/25.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/26.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/27.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/28.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/29.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/30.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/31.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/32.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/33.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/34.JPG"} />
                    </div>
                    <div>
                        <img src={"assets/galleri/35.JPG"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
