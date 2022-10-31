import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Dashboard({ bookings }) {
    console.log(bookings);

    const deleteBooking = async (id) => {
        Inertia.post(`/bookings/${id}`);
    };

    // function handleDelete(e) {
    //     console.log(e);
    //     e.preventDefault();
    //     // post("/delete");
    // }

    return (
        <div>
            <h1>Admin panel</h1>
            <h3>alla bokningar:</h3>

            {bookings.map(function (booking) {
                return (
                    <div value={booking.id} key={booking.id}>
                        <p>{booking.first_name}</p>
                        <p>{booking.last_name}</p>
                        <p>{booking.start_date}</p>
                        <p>{booking.end_date}</p>
                        {/* <form onSubmit={() => handleDelete(booking.id)}>
                            <button type="submit">Radera bokning</button>
                        </form> */}
                        <button onClick={() => deleteBooking(booking.id)}>
                            DELETE
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
