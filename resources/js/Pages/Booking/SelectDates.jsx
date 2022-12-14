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

    const dateToDisable = () => {
        const bookingData = [];
        const temporaryBookingData = [];
        bookings.map((booking) => {
            let start_date = new Date(booking.start_date);
            let end_date = new Date(booking.end_date);

            while (start_date <= end_date) {
                const dateStart = dateFormat(start_date, "yyyy-mm-dd");
                if (booking.room_id === 3) {
                    const findBooking = temporaryBookingData.find(
                        (element, index) => {
                            if (element.date === dateStart) {
                                return (temporaryBookingData[index][
                                    "bookings"
                                ] += 1);
                            }
                            return undefined;
                        }
                    );

                    if (findBooking === undefined) {
                        temporaryBookingData.push({
                            date: dateStart,
                            bookings: 1,
                        });
                    }
                } else {
                    bookingData.push(new Date(dateStart));
                }
                start_date.setDate(start_date.getDate() + 1);
            }
        });

        temporaryBookingData.map((data) => {
            if (data.bookings >= 6) {
                bookingData.push(new Date(data.date));
            }
        });
        return bookingData;
    };
    return (
        <div>
            <NavBar />
            <div className={styles.fullpageContainer}>
                <ReactDatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    excludeDates={dateToDisable().flat()}
                    minDate={new Date()}
                    selectsRange
                    inline
                    locale="sv"
                />
                <form onSubmit={submit}>
                    {errors.start_date && (
                        <div className={styles.errorMessage}>
                            V??nligen v??lj datum f??r din vistelse. &#8593;
                        </div>
                    )}
                    <input
                        type="text"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        placeholder="F??rnamn"
                        name="first_name"
                    />
                    {errors.first_name && (
                        <div className={styles.errorMessage}>
                            V??nligen fyll i ditt f??rnamn. &#8593;
                        </div>
                    )}

                    <input
                        type="text"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        placeholder="Efternamn"
                        name="last_name"
                    />
                    {errors.last_name && (
                        <div className={styles.errorMessage}>
                            V??nligen fyll i ditt efternamn. &#8593;
                        </div>
                    )}
                    <input
                        type="text"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="E-post"
                        name="email"
                    />
                    {errors.email && (
                        <div className={styles.errorMessage}>
                            V??nligen fyll i en giltig epost-adress. &#8593;
                        </div>
                    )}
                    <input
                        type="text"
                        value={data.mobile}
                        onChange={(e) => setData("mobile", e.target.value)}
                        placeholder="Mobilnummer"
                    />
                    {errors.mobile && (
                        <div className={styles.errorMessage}>
                            V??nligen fyll i ditt mobilnummer. &#8593;
                        </div>
                    )}
                    <div className={styles.guestSelect}>
                        <select
                            type="number"
                            value={data.guests}
                            onChange={(e) =>
                                setData("guests", parseInt(e.target.value))
                            }
                        >
                            <option value="">Antal g??ster</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                        </select>
                    </div>
                    <h2>
                        Totalpris:
                        {endDate != null && <span>{totalPrice} ???</span>}
                    </h2>

                    <div className={styles.buttonContainer}>
                        <button type="submit">BOKA NU!</button>
                    </div>
                </form>
            </div>
            <div className={styles.rules}>
                <p>
                    AVBOKNINGSREGLER: Avbokning vid mindre ??n 30 dagar till
                    ankomst ??terbetalas 50% av priset, 7 dagar innan ankomst
                    sker ingen ??terbetalning.
                </p>
            </div>
            <Footer />
        </div>
    );
}
