import { Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import dateFormat from "dateformat";
import NavBar from "../../components/NavBar/NavBar";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import sv from "date-fns/locale/sv";
import styles from "./selectDates.module.css";
import Footer from "../../components/Footer/Footer";
import emailjs from "emailjs-com";

registerLocale("sv", sv);

export default function selectDates({ room, bookings, rooms }) {
    //Kalender

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        setData({
            ...data,
            start_date: dateFormat(start, "yyyy-mm-dd"),
            end_date: dateFormat(end, "yyyy-mm-dd"),
        });
    };

    // Antal dagar

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
    const totalPrice = diffDays * rooms[0].price;

    // resten
    const { data, setData, post, errors } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        guests: 0,
        room_id: room,
        start_date: "",
        end_date: "",
    });
    const errorMessage = errors[Object.keys(errors)[0]];
    console.log(errors);

    function submit(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_28p48oe",
                "template_msi86bn",
                e.target,
                "px6u5Af-2QCLnhWNA"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        post("/bokning");
    }
    const bookingData = [
        {
            room_id: 3,
            date: [
                {
                    date: "2022-11-21",
                    bookings: 0,
                },
            ],
        },
    ];

    const dateToDisable = () => {
        return bookings.map((booking) => {
            const dates = [];
            let date = new Date(booking.start_date);
            let end_date = new Date(booking.end_date);

            if (booking.room_id === 3) {
                bookingData[0]["date"].find((obj, index) => {
                    const dateStart = dateFormat(date, "yyyy-mm-dd");
                    if (obj.date === dateStart) {
                        return (bookingData[0]["date"][index]["bookings"] += 1);
                    }
                });
                // bookingData[0]["date"].bookings += 1;
            }
            while (date <= end_date) {
                dates.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return dates;
        });
    };

    console.log(bookingData, "<----");

    const disableDates = dateToDisable();

    return (
        <div>
            <NavBar />
            <div className={styles.fullpageContainer}>
                <ReactDatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    excludeDates={disableDates.flat()}
                    minDate={new Date()}
                    selectsRange
                    inline
                    locale="sv"
                />
                <form onSubmit={submit}>
                    {errors && (
                        <div className={styles.errorMessage}>
                            {errorMessage}
                        </div>
                    )}

                    <input
                        type="text"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        placeholder="Förnamn"
                        name="first_name"
                    />

                    <input
                        type="text"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        placeholder="Efternamn"
                        name="last_name"
                    />
                    <input
                        type="text"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="E-post"
                        name="email"
                    />
                    <input
                        type="text"
                        value={data.mobile}
                        onChange={(e) => setData("mobile", e.target.value)}
                        placeholder="Mobilnummer"
                    />
                    <div className={styles.guestSelect}>
                        <select
                            type="number"
                            value={data.guests}
                            onChange={(e) =>
                                setData("guests", parseInt(e.target.value))
                            }
                        >
                            <option value="">Antal gäster</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <h2>
                        Totalpris:
                        {endDate != null && <span>{totalPrice} €</span>}
                    </h2>

                    <div className={styles.buttonContainer}>
                        <button type="submit">BOKA NU!</button>
                    </div>
                </form>
            </div>
            <div className={styles.rules}>
                <p>
                    AVBOKNINGSREGLER: Avbokning vid mindre än 30 dagar till
                    ankomst återbetalas 50% av priset, 7 dagar innan ankomst
                    sker ingen återbetalning.
                </p>
            </div>
            <Footer />
        </div>
    );
}
