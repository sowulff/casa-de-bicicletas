import styles from "./cycling.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Cycling() {
    return (
        <div>
            <NavBar />

            <div className={styles.cardOne}>
                <img src={"assets/galleri/3.JPG"} />
                <div className={styles.text}>
                    <h1>Dags för cykelsemester?</h1>
                    <h3>
                        Här i närheten hittar du bra cykling såväl mountainbike
                        som landvägscykling. Hos oss kan man tryggt förvara
                        cyklarna och även göra rent dem i vår cykeltvätt.
                    </h3>
                </div>
            </div>

            <div className={styles.cardTwo}>
                <img src={"assets/cycling/3.JPG"} />

                <img src={"assets/cycling/1.JPG"} />
            </div>
            <Footer />
        </div>
    );
}
