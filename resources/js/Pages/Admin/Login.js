import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
export default function Login({ errors }) {
    const { data, setData, post } = useForm({
        email: "",
        password: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.id]: e.target.value });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("do.login"), {
            email: data.email,
            password: data.password,
        });
    };
    console.log(data.email);
    return (
        <div>
            <h1>Admin log in</h1>
            <p>Här loggar man in som admin och kan se alla bokningar</p>
            <form onSubmit={submitHandler} noValidate>
                <div>
                    <input
                        value={data.email}
                        onChange={changeHandler}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        aria-label="Email"
                    />
                    {errors && <div>{errors.email}</div>}
                </div>
                <div>
                    <input
                        value={data.password}
                        onChange={changeHandler}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        aria-label="Password"
                    />
                    {errors && <div>{errors.password}</div>}
                </div>

                <div>
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </div>
    );
}
