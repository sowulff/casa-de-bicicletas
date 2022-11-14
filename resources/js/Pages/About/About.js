import styles from "./about.module.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function About() {
    return (
        <div className={styles.about}>
            <NavBar />
            <div className={styles.aboutWrapper}>
                <div className={styles.fullPageContainer}>
                    <div className={styles.imageContainer}>
                        <img src={"assets/galleri/19.JPG"} />
                        <div className={styles.textContainer}>
                            <h1>Hej!</h1>
                            <p>
                                Vi är två glada Göteborgare med intresset för
                                mountainbike gemensamt. Den ena av oss har
                                cyklat för landslaget och den andra har bakgrund
                                från surfing.{" "}
                            </p>
                            <p>
                                2021 bestämde vi oss för att öppna Casa La
                                Marina med målet att möta och sammanföra
                                människor som vi kunde cykla tillsammans med på
                                en härlig plats. Även om vi ägnar mycket tid för
                                cykling är det inte ett måste att du delar vår
                                kärlek för cyklingen – hit är alla välkomna! Vi
                                strävar efter att bevara en familjär atmosfär
                                och go stämning.
                            </p>
                            <p>
                                Casa La Marina är ett semesterboende i San
                                Fulgencio. Här kan du hyra en lägenhet,
                                dubbelrum, fembädsrum eller en ställplats för
                                din husbil, husvagn eller campenvan. Släng något
                                på grillen, utmana kompisen i en biljard eller
                                pingis-match, slappa i hängmattan eller bada i
                                poolen. Här är möjligheterna många! I närområdet
                                finns många sevärdheter. Vi hjälper gärna till
                                med tips på utflykter!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
