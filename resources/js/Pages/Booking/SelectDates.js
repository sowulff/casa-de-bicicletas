import { Link } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import dateFormat from "dateformat";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function selectDates({ room, bookings }) {
    //Kalender

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

    const [value, setValue] = useState(new Date());
    // console.log(value);
    function onChange(value) {
        setValue(value);
        setData({
            ...data,
            end_date: dateFormat(new Date(value[1]), "yyyy-mm-dd"),
            start_date: dateFormat(new Date(value[0]), "yyyy-mm-dd"),
        });
    }

    // value = dateFormat(value[0], "yyyy-mm-dd");

    // const dat = dateFormat(value, "yyyy-mm-dd");
    // console.log(dat);
    return (
        <div>
            <p>Tillgängliga datum för {room.name}:</p>
            <Calendar selectRange={true} onChange={onChange} value={value} />
            <form onSubmit={submit}>
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
