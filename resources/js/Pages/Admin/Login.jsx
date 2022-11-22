import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import styles from "./login.module.css";

export default function Login() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    console.log(data);
    return (
        <div className={styles.logInPage}>
            <div className={styles.logInContainer}>
                <h1>Casa La Marina</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.logInEmail}>
                        <label for="email">Email</label>
                        <br />
                        <input
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            aria-label="Email"
                        />
                        {errors && (
                            <div className={styles.errorMessage}>
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className={styles.logInPassword}>
                        <label for="password">Lösenord</label>
                        <br />
                        <input
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            s
                            type="password"
                            name="password"
                            id="password"
                            aria-label="Password"
                        />
                        {errors && (
                            <div className={styles.errorMessage}>
                                {errors.password}
                            </div>
                        )}
                    </div>

                    <div className={styles.logInButton}>
                        <button type="submit">Logga in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
