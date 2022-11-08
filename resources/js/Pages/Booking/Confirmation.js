import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function Confirmation({ booking }) {
    console.log(booking);
    return (
        <div>
            <NavBar />
            <p>Tack för din bokning{booking.first_name}</p>
        </div>
    );
}
