import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Dashboard({ bookings }) {
    console.log(bookings);

    function handleDelete(e) {
        console.log(e);
        // e.preventDefault();
        // post("/delete/{e}");
    }

    return (
        <div>
            <h1>Admin panel</h1>
            <h3>alla bokningar:</h3>

            {bookings.map(function (booking) {
                return (
                    <div key={booking.id}>
                        <p>{booking.first_name}</p>
                        <p>{booking.last_name}</p>
                        <p>{booking.start_date}</p>
                        <p>{booking.end_date}</p>
                        <form onSubmit={() => handleDelete(booking.id)}>
                            <button type="submit">Radera bokning</button>
                        </form>
                    </div>
                );
            })}
        </div>
    );
}
