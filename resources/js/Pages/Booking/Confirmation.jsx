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
                        <h1>
                            Tack för din bokning,
                            <span className={styles.capitalize}>
                                {booking.first_name}!
                            </span>
                        </h1>
                        <p>Casa La Marina</p>
                        <p>
                            Namn:
                            <span className={styles.capitalize}>
                                {booking.first_name} {booking.last_name}
                            </span>
                        </p>
                        <p>
                            Datum: {booking.start_date} - {booking.end_date}
                        </p>
                        <p>Antal gäster: {booking.guests}</p>
                        <p className={styles.bold}>
                            Vi kommer skicka ett mail med betalningsuppgifter
                            och annan nödvändig information inom ett par dagar.
                        </p>
                        <p>
                            Vid frågor - kontakta oss på
                            bellezadelcieloltd@gmail.com eller på telefonnumer
                            +46 70 55 99 83.
                        </p>
                        <p>Välkommen!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
