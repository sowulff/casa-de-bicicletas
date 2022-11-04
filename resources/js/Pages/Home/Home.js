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
                <p>
                    Hyr rum, lägenhet eller ställplats i hjärtat av Spanien. Det
                    kan stå lite mer text men jag är för trött för att komma på
                    någon bra just nu Lite mer text skulle det kunna vara eller
                    vad tror du. Hyr rum, lägenhet eller ställplats i hjärtat av
                    Spanien. Det kan stå lite mer text men jag är för trött för
                    att komma på någon bra just nu Lite mer text skulle det
                    kunna vara eller vad tror du.{" "}
                </p>
            </div>
        </div>
    );
}
