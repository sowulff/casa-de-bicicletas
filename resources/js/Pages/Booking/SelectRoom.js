import { Link } from "@inertiajs/inertia-react";
import NavBar from "../../components/NavBar/NavBar";
import { useForm } from "@inertiajs/inertia-react";

export default function selectRoom({ rooms }) {
    const { data, setData, post } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        guests: 0,
        room_id: 0,
    });

    // function submit(e) {
    //     e.preventDefault();
    //     post("/upload");
    // }
    return (
        <div>
            <NavBar />
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            {rooms.map(function (room) {
                return (
                    <div value={data.room_id} key={room.id}>
                        <p>{room.name}</p>
                        <img width={100} src={room.image} alt="img" />
                        <p>{room.price + " kr"}</p>
                        <p>{room.description}</p>
                        <Link href={`/booking/room/${room.id}`}>
                            se tillgänglighet och bok
                        </Link>
                    </div>
                );
            })}

            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
