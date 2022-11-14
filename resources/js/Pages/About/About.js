import styles from "./about.module.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function About() {
    return (
        <div className={styles.about}>
            <NavBar />
            <div className={styles.fullPageContainer}>
                <div className={styles.imageContainer}>
                    <img src={"assets/galleri/19.JPG"} />
                    <div className={styles.textContainer}>
                        <h1>Om oss</h1>
                        <p>
                            Jag heter Jonas och blablabla jag heter Molle och
                            jag fjgngfgfng jkgns . Jag heter Jonas och blablabla
                            jag heter Molle och jag fjgngfgfng jkgns . Jag heter
                            Jonas och blablabla jag heter Molle och jag
                            fjgngfgfng jkgns . Jag heter Jonas och blablabla jag
                            heter Molle och jag fjgngfgfng jkgns . Jag heter
                            Jonas och blablabla jag heter Molle och jag
                            fjgngfgfng jkgns . Jag heter Jonas och blablabla jag
                            heter Molle och jag fjgngfgfng jkgns{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
