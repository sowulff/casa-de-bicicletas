import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./confirmation.module.css";
import Footer from "../../components/Footer/Footer";

export default function Confirmation({ booking }) {
    console.log(booking);
    return (
        <div>
            <NavBar />
            <div className={styles.wrapper}>
                <div className={styles.fullPageContainer}>
                    <div className={styles.imageContainer}>
                        <img src={"assets/galleri/25.JPG"} />
                    </div>
                    <div className={styles.textContainer}>
                        <h1>Tack för din bokning, {booking.first_name}!</h1>
                        <p>Casa La Marina</p>
                        <p>
                            Namn: {booking.first_name} {booking.last_name}{" "}
                        </p>
                        <p>
                            Datum: {booking.start_date} - {booking.end_date}
                        </p>
                        <p>Antal gäster: {booking.guests}</p>
                        <p>
                            Vid frågor - kontakta oss på molle@molle.se eller på
                            telefonnumer +46 84 92 20.
                        </p>
                        <p>Välkommen!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
