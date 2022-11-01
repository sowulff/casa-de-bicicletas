import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Dashboard({ bookings }) {
    console.log(bookings);

    const deleteBooking = async (id) => {
        Inertia.post(`/bookings/${id}`);
    };

    return (
        <div>
            <h1>Admin panel</h1>
            <h3>alla bokningar:</h3>

            {bookings.map(function (booking) {
                return (
                    <div value={booking.id} key={booking.id}>
                        <p>
                            {booking.first_name} {booking.last_name}
                        </p>
                        <p>
                            {booking.start_date} till {booking.end_date}
                        </p>

                        <p>antal gäster: {booking.guests}</p>
                        <p>Rum: {booking.room_id}</p>
                        <button onClick={() => deleteBooking(booking.id)}>
                            DELETE
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
