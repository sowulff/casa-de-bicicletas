import { Link } from "@inertiajs/inertia-react";
import Calender from "../../components/Calender/Calender.js";
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
    console.log(data);

    function submit(e) {
        e.preventDefault();
        post("/upload");
    }
    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            {rooms.map(function (room) {
                return (
                    <div value={data.room_id} key={room.id}>
                        <p>{room.name}</p>
                        <img width={100} src={room.image} alt="img" />
                        <p>{room.price + " kr"}</p>
                        <Link href={`/booking/${room.id}`}>
                            se tillgänglighet och bok
                        </Link>
                    </div>
                );
            })}

            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
