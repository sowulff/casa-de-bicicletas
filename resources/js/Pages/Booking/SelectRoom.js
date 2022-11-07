import { Link } from "@inertiajs/inertia-react";
import NavBar from "../../components/NavBar/NavBar";
import { useForm } from "@inertiajs/inertia-react";
import styles from "./selectRoom.module.css";

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
            <div className={styles.fullPageContainer}>
                <div className={styles.container}>
                    {rooms.map(function (room) {
                        return (
                            <div className={styles.coloredContainer}>
                                <div className={styles.roomContainer}>
                                    <div value={data.room_id} key={room.id}>
                                        <img
                                            width={100}
                                            src={room.image}
                                            alt="img"
                                        />
                                        <h2>{room.name}</h2>
                                        <p>{room.description}</p>
                                        <p>{room.price + " kr"}</p>

                                        <div className={styles.linkContainer}>
                                            <Link
                                                className={styles.link}
                                                href={`/booking/room/${room.id}`}
                                            >
                                                Se tillgänglighet och boka
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
