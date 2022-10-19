import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import Calender from "../components/Calender/Calender.js";

export default function Booking({ rooms }) {
    // State with list of all checked item
    const [checked, setChecked] = useState([]);

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    // Generate string of checked items
    const checkedItems = checked.length
        ? checked.reduce((total, room) => {
              return total + ", " + room;
          })
        : "";

    // Return classes based on whether item is checked
    const isChecked = (room) =>
        checked.includes(room) ? "checked-room" : "not-checked-room";
    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            <div>{`Du har valt: ${checkedItems}`}</div>

            <form>
                <ul>
                    {rooms.map(function (room, index) {
                        return (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    value={room.id}
                                    onChange={handleCheck}
                                />
                                <span className={isChecked(room.name)}>
                                    {room.name}
                                </span>
                                <li>
                                    <img
                                        width={100}
                                        src={room.image}
                                        alt="img"
                                    />
                                </li>
                                <li>{room.price + " kr"}</li>
                            </div>
                        );
                    })}
                </ul>
            </form>
            <Calender />

            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
