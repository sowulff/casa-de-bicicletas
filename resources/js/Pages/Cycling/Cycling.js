import styles from "./cycling.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Cycling() {
    return (
        <div className={styles.cycling}>
            <NavBar />

            <div className={styles.cardOne}>
                <img src={"assets/galleri/3.JPG"} />
                <div className={styles.text}>
                    <h1>Cykelsemester i värmen?</h1>
                    <h3>
                        Vi hjälper till och ordnar transfer av cyklar och väl på
                        plats i Casa La Marina finns det cykeltvätt, mekställ
                        och verktyg att låna. I närheten finns bra cykling för
                        dig med landsväg, mountainbike eller gravelcykel! Tips
                        på rundor att upptäcka kan man få via gps.
                    </h3>
                </div>
            </div>

            <div className={styles.cardTwo}>
                <img src={"assets/cycling/3.JPG"} />
                <img src={"assets/cycling/1.JPG"} />
            </div>
            <h3 className={styles.cardTwoText}>
                I mån av tid tar vi gärna med er på guidning i området.
            </h3>
            <h3 className={styles.cardThreeText}>
                Varierande och rolig cykling för alla!
            </h3>
            <div className={styles.cardThree}>
                <img
                    className={styles.photoSectionTwo}
                    src={"assets/cycling/5.JPG"}
                />
                <div className={styles.photoSectionOne}>
                    <img src={"assets/cycling/4.JPG"} />
                    <img src={"assets/cycling/6.JPG"} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
