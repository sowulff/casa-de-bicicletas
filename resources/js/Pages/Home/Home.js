import styles from "./home.module.css";
import NavBar from "../../components/NavBar/NavBar";

export default function Welcome() {
    return (
        <div>
            <div className={styles.bgVideo}>
                <video
                    className={styles.content}
                    width="100%"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={"assets/video/flying.mov"} />
                    Sorry, your browser doesn't support videos.
                </video>
            </div>

            <NavBar />
            <div className={styles.infoText}>
                <p className={styles.firstLine}>
                    Mi casa es zu casa, som spanjorerna säger.
                </p>
                <p>
                    På Casa la Marina bor ni i en hemtrevlig miljö med många
                    sociala ytor. Pingis, biljard eller ett dopp i den uppvärmda
                    poolen kanske lockar? Stora sanitets - utrymmen med
                    tvättmaskiner och torktumlare finns också att låna. De
                    lummiga planteringarna ger ett rofyllt intryck i Spaniens
                    behagliga klimat. Varmt välkomna till vår lilla oas.
                </p>
            </div>
        </div>
    );
}
