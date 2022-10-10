import { Link } from "@inertiajs/inertia-react";

export default function Booking({ rooms }) {
    console.log(rooms);

    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            <ul>
                {rooms.map(function (room) {
                    return (
                        <div key={room.id}>
                            <li>{room.name}</li>
                            <li>
                                <img width={100} src={room.image} alt="img" />
                            </li>
                            <li>{room.price}</li>
                        </div>
                    );
                })}
            </ul>
            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
