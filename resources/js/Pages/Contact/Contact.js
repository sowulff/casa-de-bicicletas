import styles from "./contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link } from "@inertiajs/inertia-react";

export default function Contact() {
    return (
        <div className={styles.contact}>
            <NavBar />
            <div className={styles.contactWrapper}>
                <div className={styles.fullPageContainer}>
                    <div className={styles.textContainer}>
                        <h1>Casa La Marina</h1>

                        <p>Avenida San Fulgencio 300</p>
                        <p>03194 San Fulgencio</p>
                        <p>Alicante, Spanien</p>
                        <p>Telefon: +46 739 293 83</p>
                        <p>E-post: casa@info.se</p>

                        <Link
                            className={styles.mailTo}
                            onClick={(e) => {
                                window.location.href =
                                    "mailto:no-reply@example.com";
                                e.preventDefault();
                            }}
                        >
                            Maila oss
                        </Link>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={"assets/galleri/23.JPG"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
