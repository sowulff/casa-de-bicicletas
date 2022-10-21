import React, { useState } from "react";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";

export default function DateRangePickerCalendarExample() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [focus, setFocus] = useState(START_DATE);
    const handleFocusChange = (newFocus) => {
        setFocus(newFocus || START_DATE);
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log("You clicked submit.");
        console.log(startDate ? format(startDate, "yy-MM-dd") : "none");
        console.log(endDate ? format(endDate, "yy-MM-dd") : "none");
    }

    return (
        <div>
            <p>
                Selected start date:{" "}
                {startDate ? format(startDate, "dd MMM yyyy") : "none"}
            </p>
            <p>
                Selected end date:{" "}
                {endDate ? format(endDate, "dd MMM yyyy") : "none"}
            </p>
            <p>Currently selecting: {focus}</p>
            <form onSubmit={handleSubmit}>
                <DateRangePickerCalendar
                    startDate={startDate}
                    endDate={endDate}
                    focus={focus}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                    onFocusChange={handleFocusChange}
                    locale={enGB}
                />

                <button type="submit">Välj dessa</button>
            </form>
        </div>
    );
}
