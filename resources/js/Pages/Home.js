import { Link } from "@inertiajs/inertia-react";

export default function Welcome({ name }) {
    return (
        <div>
            <h1>Hello {name}</h1>
            <Link href="/booking">Boka ett rum</Link>
        </div>
    );
}
