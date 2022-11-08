import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.name}>Casa la Marina</p>
            <p>Adress: Av. San Fulgenicio 300</p>
            <p>03194 San Fulgencio</p>
            <p>Alicante, Spain</p>
            <p>Phone: +46 85 92 84</p>
            <p>E-mail: molle@hej.se</p>
        </div>
    );
}
