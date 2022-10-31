import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function Login() {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    console.log(data);
    return (
        <div>
            <h1>Admin log in</h1>
            <p>Här loggar man in som admin och kan se alla bokningar</p>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        aria-label="Email"
                    />
                    {/* {errors && <div>{errors.email}</div>} */}
                </div>
                <div>
                    <input
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        s
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        aria-label="Password"
                    />
                    {/* {errors && <div>{errors.password}</div>} */}
                </div>

                <div>
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
    );
}
