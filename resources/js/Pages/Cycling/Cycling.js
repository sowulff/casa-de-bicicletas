import styles from "./cycling.module.css";
import NavBar from "../../components/NavBar/NavBar";

export default function Cycling() {
    return (
        <div>
            <NavBar />
            <div className={styles.infoText}>
                <p>Cykling-sida </p>
            </div>
        </div>
    );
}
