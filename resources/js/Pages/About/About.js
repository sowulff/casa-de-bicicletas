import styles from "./about.module.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function About() {
    return (
        <div className={styles.about}>
            <NavBar />
            <div className={styles.imageContainer}>
                <img src={"assets/galleri/19.JPG"} />
                <h3>
                    Om ossJag heter Jonas och blablabla jag heter Molle och jag
                    fjgngfgfng jkgns . Jag heter Jonas och blablabla jag heter
                    Molle och jag fjgngfgfng jkgns . Jag heter Jonas och
                    blablabla jag heter Molle och jag fjgngfgfng jkgns . Jag
                    heter Jonas och blablabla jag heter Molle och jag fjgngfgfng
                    jkgns . Jag heter Jonas och blablabla jag heter Molle och
                    jag fjgngfgfng jkgns . Jag heter Jonas och blablabla jag
                    heter Molle och jag fjgngfgfng jkgns{" "}
                </h3>
            </div>
            <Footer />
        </div>
    );
}
