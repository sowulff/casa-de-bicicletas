import { Link } from "@inertiajs/inertia-react";

export default function Welcome() {
    return (
        <div>
            <h1>Hello</h1>
            <Link href="/booking">Boka ett rum</Link>
        </div>
    );
}
