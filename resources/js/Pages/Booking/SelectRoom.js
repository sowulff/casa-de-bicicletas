import { Link } from "@inertiajs/inertia-react";
import NavBar from "../../components/NavBar/NavBar";
import { useForm } from "@inertiajs/inertia-react";
import styles from "./selectRoom.module.css";
import Footer from "../../components/Footer/Footer";

export default function selectRoom({ rooms }) {
    const { data, setData, post } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        guests: 0,
        room_id: 0,
    });

    return (
        <div>
            <NavBar />
            <div className={styles.fullPageContainer}>
                <div className={styles.container}>
                    {rooms.map(function (room) {
                        return (
                            <div className={styles.coloredContainer}>
                                <div
                                    className={styles.roomContainer}
                                    value={data.room_id}
                                    key={room.id}
                                >
                                    <img src={room.image} alt="img" />
                                    <div className={styles.roomInfo}>
                                        <h2>{room.name}</h2>
                                        <p>{room.description}</p>
                                        <p className={styles.price}>
                                            {room.price + " kr"}
                                        </p>
                                        <div className={styles.linkWrapper}>
                                            <div
                                                className={styles.linkContainer}
                                            >
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
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
