import styles from "./contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
    return (
        <div className={styles.contact}>
            <NavBar />

            <Footer />
        </div>
    );
}
