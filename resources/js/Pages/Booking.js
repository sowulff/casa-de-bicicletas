import { Link } from "@inertiajs/inertia-react";

export default function Booking({ rooms }) {
    console.log(rooms);

    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
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
