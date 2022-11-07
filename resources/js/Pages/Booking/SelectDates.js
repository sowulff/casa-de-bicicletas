import { Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import dateFormat from "dateformat";
import { addDays, format } from "date-fns";
import NavBar from "../../components/NavBar/NavBar";
import Calendar from "react-calendar";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import sv from "date-fns/locale/sv";
registerLocale("sv", sv);
import styles from "./selectDates.module.css";

export default function selectDates({ room, bookings }) {
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
    // resten
    const { data, setData, post } = useForm({
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
        post("/upload");
    }

    // const [value, setValue] = useState(new Date());
    // console.log(value);
    // function onChange(value) {
    //     setValue(value);
    //     setData({
    //         ...data,
    //         end_date: dateFormat(new Date(value[1]), "yyyy-mm-dd"),
    //         start_date: dateFormat(new Date(value[0]), "yyyy-mm-dd"),
    //     });
    // }

    const dateToDisable = () => {
        return bookings.map((booking) => {
            const dates = [];
            let date = new Date(booking.start_date);
            let end_date = new Date(booking.end_date);
            while (date <= end_date) {
                dates.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return dates;
        });
    };

    const disableDates = dateToDisable();

    return (
        <div>
            <NavBar />
            <div className={styles.fullpageContainer}>
                {/* <p>Tillgängliga datum för {room.name}:</p> */}
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
                {/* <Calendar
                selectRange={true}
                onChange={onChange}
                value={value}
                tileDisabled={(date) => {
                    console.log(
                        format(date.date, "y-M-dd"),
                        format(new Date(), "y-M-dd")
                    );
                    if (
                        format(date.date, "y-M-dd") <
                        format(new Date(), "y-M-dd")
                    ) {
                        return true;
                    }
                    return disableDates
                        .flat()
                        .includes(format(date.date, "y-M-dd"));
                }}
            /> */}
                <form onSubmit={submit}>
                    <input
                        type="text"
                        value={data.first_name}
                        onChange={(e) => setData("first_name", e.target.value)}
                        placeholder="Förnamn"
                    />
                    <hr></hr>
                    <input
                        type="text"
                        value={data.last_name}
                        onChange={(e) => setData("last_name", e.target.value)}
                        placeholder="Efternamn"
                    />
                    <hr></hr>
                    <input
                        type="text"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder="E-post"
                    />
                    <hr></hr>
                    <input
                        type="text"
                        value={data.mobile}
                        onChange={(e) => setData("mobile", e.target.value)}
                        placeholder="Mobilnummer"
                    />
                    <hr></hr>
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
                    <hr></hr>
                    <input
                        type="text"
                        value={data.mobile}
                        onChange={(e) => setData("mobile", e.target.value)}
                        placeholder="Valda datum:"
                        readonly="readonly"
                    />
                    <hr></hr>
                    <h2>Totalpris: </h2>
                </form>
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.button}>
                    BOKA NU!
                </button>
                <p>
                    AVBOKNINGSREGLER: Här står det vad som gäller för avbokning
                    och kanske även hur man betalar
                </p>
            </div>
            {/* <Link href="/">Gå tillbaka</Link> */}
        </div>
    );
}
