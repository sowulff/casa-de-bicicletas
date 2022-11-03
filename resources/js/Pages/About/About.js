import styles from "./about.module.css";
import NavBar from "../../components/NavBar/NavBar";

export default function About() {
    return (
        <div>
            <NavBar />
            <div className={styles.infoText}>
                <p>About-sida </p>
            </div>
        </div>
    );
}
