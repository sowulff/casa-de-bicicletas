import { Link } from "@inertiajs/inertia-react";

export default function Welcome() {
    return (
        <div>
            <video controls width="100%" autoPlay muted loop playsInline>
                <source src={"assets/video/flying.mov"} />
                Sorry, your browser doesn't support videos.
            </video>
            <Link href="/booking">Boka ett rum</Link>
        </div>
    );
}
