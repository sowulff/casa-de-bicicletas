import styles from "./cycling.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Cycling() {
    return (
        <div>
            <NavBar />
            <div className={styles.infoText}>
                <p>Cykling-sida </p>
            </div>
            <Footer />
        </div>
    );
}
