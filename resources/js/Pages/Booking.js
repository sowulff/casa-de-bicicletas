import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import Calender from "../components/Calender/Calender.js";

export default function Booking({ rooms }) {
    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            <form>
                <ul>
                    {rooms.map(function (room) {
                        return (
                            <div key={room.id}>
                                <li>{room.name}</li>
                                <input type="checkbox" name="rooms" />
                                <li>
                                    <img
                                        width={100}
                                        src={room.image}
                                        alt="img"
                                    />
                                </li>
                                <li>{room.price + " kr"}</li>
                            </div>
                        );
                    })}
                </ul>
                <button>Click</button>
            </form>
            <Calender />

            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
