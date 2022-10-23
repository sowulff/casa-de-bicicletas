import { Link } from "@inertiajs/inertia-react";
// import Calender from "../../components/Calender/Calender.js";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { format, getDay } from "date-fns";

import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";

export default function selectRoom({ room }) {
    //Kalender
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focus, setFocus] = useState(START_DATE);
    const handleFocusChange = (newFocus) => {
        setFocus(newFocus || START_DATE);
    };
    const modifiers = {
        disabled: (date) => getDay(date) === 6, // Disables Saturdays Här vill vi få in bokade
        highlight: (date) => getDay(date) === 2, // Highlights Tuesdays
    };
    const modifiersClassNames = {
        highlight: "-highlight",
    };

    // resten
    const { data, setData, post } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        guests: 0,
        room_id: room.id,
        start_date: "",
        end_date: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/upload");
    }
    function formatDate(date) {
        return format(date, "yyyy-MM-dd");
    }

    return (
        <div>
            <p>Tillgängliga datum för {room.name}:</p>
            <form onSubmit={submit}>
                <div>
                    <DateRangePickerCalendar
                        startDate={startDate}
                        endDate={endDate}
                        focus={focus}
                        onStartDateChange={(e) => {
                            setStartDate(e);
                            setData("start_date", formatDate(e));
                        }}
                        onEndDateChange={(e) => {
                            setEndDate(e);
                            setData("end_date", formatDate(e));
                        }}
                        onFocusChange={handleFocusChange}
                        locale={enGB}
                        modifiers={modifiers}
                        modifiersClassNames={modifiersClassNames}
                    />
                </div>

                <input
                    type="text"
                    value={data.first_name}
                    onChange={(e) => setData("first_name", e.target.value)}
                    placeholder="Förnamn"
                />

                <input
                    type="text"
                    value={data.last_name}
                    onChange={(e) => setData("last_name", e.target.value)}
                    placeholder="Efternamn"
                />
                <input
                    type="text"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    placeholder="E-post"
                />
                <input
                    type="text"
                    value={data.mobile}
                    onChange={(e) => setData("mobile", e.target.value)}
                    placeholder="Mobilnummer"
                />

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

                <button type="submit">Välj rum</button>
            </form>
            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
