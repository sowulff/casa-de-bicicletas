import { Inertia } from "@inertiajs/inertia";
import styles from "./dashboard.module.css";

export default function Dashboard({ bookings }) {
    const deleteBooking = async (id) => {
        Inertia.post(`/bookings/${id}`);
    };

    return (
        <div className={styles.bookingPage}>
            <div className={styles.header}>
                <button className={styles.logOut}>Logga ut</button>
                <h1>Admin panel</h1>
            </div>
            <div className={styles.bookingContainer}>
                {bookings.map(function (booking) {
                    return (
                        <div
                            value={booking.id}
                            key={booking.id}
                            className={styles.bookingCard}
                        >
                            <p className={styles.typeOfRoom}>Lägenhet</p>
                            <h3>
                                {booking.first_name} {booking.last_name}
                            </h3>
                            <p className={styles.bookingDate}>
                                {booking.start_date} till {booking.end_date}
                            </p>

                            <p>antal gäster: {booking.guests}</p>
                            <div>
                                <h4>Kontakta gäst:</h4>
                                <p>{booking.email}</p>
                                <p>{booking.mobile}</p>
                            </div>

                            <button onClick={() => deleteBooking(booking.id)}>
                                DELETE
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
