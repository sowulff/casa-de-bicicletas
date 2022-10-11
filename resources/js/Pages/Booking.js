import { Link } from "@inertiajs/inertia-react";
import Calender from "../components/Calender/Calender.js";
export default function Booking({ rooms }) {
    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            <Calender />
            <ul>
                {rooms.map(function (room) {
                    console.log(room.id);
                    return (
                        <div key={room.id}>
                            <Link href={`/booking/${room.id}`}>
                                {room.name}
                            </Link>
                            <li>
                                <img width={100} src={room.image} alt="img" />
                            </li>
                            <li>{room.price + " kr"}</li>
                        </div>
                    );
                })}
            </ul>
            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
