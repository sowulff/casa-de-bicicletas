import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import Calender from "../components/Calender/Calender.js";

export default function Booking({ rooms }) {
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    const checkedItems = checked.length
        ? checked.reduce((total, room) => {
              return total + ", " + room;
          })
        : "";
    const isChecked = (room) =>
        checked.includes(room) ? "checked-room" : "not-checked-room";
    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            <div>{`Items checked are: ${checkedItems}`}</div>
            <form>
                <ul>
                    {rooms.map(function (room, index) {
                        return (
                            <div key={index}>
                                <li>{room.name}</li>
                                <input
                                    type="checkbox"
                                    value={room.name}
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
                <button>Click</button>
            </form>
            <Calender />

            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
