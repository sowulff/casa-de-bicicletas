import { Link } from "@inertiajs/inertia-react";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <svg
                className={styles.logo}
                width="147"
                height="71"
                viewBox="0 0 147 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M35.625 40.92C32.375 42.74 27.8467 43.65 22.04 43.65C16.2767 43.65 11.185 41.57 6.765 37.41C2.38833 33.25 0.2 28.0933 0.2 21.94C0.2 15.7433 2.10667 10.565 5.92 6.405C9.77667 2.245 14.7383 0.164997 20.805 0.164997C25.7017 0.164997 30.49 0.923331 35.17 2.44L34.39 4.91C29.8833 3.52333 25.225 2.83 20.415 2.83C15.605 2.83 11.5533 4.67166 8.26 8.355C5.01 11.995 3.385 16.48 3.385 21.81C3.385 27.0967 5.27 31.6033 9.04 35.33C12.8533 39.0567 17.2517 40.92 22.235 40.92C27.2183 40.92 31.3567 40.2267 34.65 38.84L35.625 40.92ZM48.3614 28.375L42.3164 43H39.2614L56.9414 0.554996H58.6964L76.5064 43H73.1914L67.0814 28.375H48.3614ZM57.6564 5.365C57.0064 7.315 56.4214 8.94 55.9014 10.24L49.4014 25.84H66.0414L59.6064 10.305C58.6098 7.87833 57.9598 6.23166 57.6564 5.365ZM93.5806 2.635C91.2406 2.635 89.334 3.19833 87.8606 4.325C86.3873 5.45167 85.6506 7.03333 85.6506 9.07C85.6506 11.41 86.6256 13.5117 88.5756 15.375C89.9623 16.7183 91.739 18.1483 93.9056 19.665C96.1156 21.1383 97.6323 22.2 98.4556 22.85C99.279 23.5 100.276 24.3883 101.446 25.515C103.569 27.6383 104.631 30.0867 104.631 32.86C104.631 36.4567 103.417 39.1867 100.991 41.05C98.6073 42.87 95.249 43.78 90.9156 43.78C86.6256 43.78 83.029 42.6533 80.1256 40.4L81.6856 38.125C84.6323 40.1183 87.7523 41.115 91.0456 41.115C94.339 41.115 96.8956 40.4217 98.7156 39.035C100.579 37.6483 101.511 35.6983 101.511 33.185C101.511 31.0183 100.579 29.025 98.7156 27.205C97.4156 25.905 95.6606 24.4967 93.4506 22.98C91.284 21.4633 89.7673 20.38 88.9006 19.73C88.034 19.0367 87.0156 18.1267 85.8456 17C83.6356 14.79 82.5306 12.2333 82.5306 9.33C82.5306 6.42666 83.549 4.15166 85.5856 2.505C87.6656 0.858332 90.5256 0.0349991 94.1656 0.0349991C97.8056 0.0349991 101.077 0.749999 103.981 2.18L102.876 4.585C100.189 3.285 97.0906 2.635 93.5806 2.635ZM118.693 28.375L112.648 43H109.593L127.273 0.554996H129.028L146.838 43H143.523L137.413 28.375H118.693ZM127.988 5.365C127.338 7.315 126.753 8.94 126.233 10.24L119.733 25.84H136.373L129.938 10.305C128.942 7.87833 128.292 6.23166 127.988 5.365Z"
                    fill="#3e2e29"
                />
                <path
                    d="M8.3 70V52.125H9.5V68.9H17.725V70H8.3ZM22.5313 63.8L19.9563 70H18.6813L26.2063 52H26.9063L34.4563 70H33.1063L30.5313 63.8H22.5313ZM26.4813 54C26.4646 54.0167 26.4313 54.1167 26.3813 54.3C26.1479 55.0167 25.9229 55.625 25.7063 56.125L22.9563 62.775H30.1063L27.3563 56.15C26.7729 54.8833 26.4813 54.1667 26.4813 54ZM63.401 69.15H62.726L58.001 57.675C57.801 57.225 57.601 56.7 57.401 56.1C57.401 56.1167 57.3843 56.2083 57.351 56.375C57.3343 56.5417 57.3093 56.7667 57.276 57.05C57.2426 57.3167 57.2093 57.5417 57.176 57.725L55.301 70H54.176L56.826 53.675H57.501L62.551 65.65C62.951 66.65 63.151 67.175 63.151 67.225C63.2676 66.875 63.4926 66.3583 63.826 65.675L69.451 53.675H70.126L72.601 70H71.401L69.626 57.675C69.5093 56.8583 69.451 56.3167 69.451 56.05L68.726 57.7L63.401 69.15ZM77.6965 64.375L75.3715 70H74.1965L80.9965 53.675H81.6715L88.5215 70H87.2465L84.8965 64.375H77.6965ZM81.2715 55.525C81.0215 56.275 80.7965 56.9 80.5965 57.4L78.0965 63.4H84.4965L82.0215 57.425C81.6382 56.4917 81.3882 55.8583 81.2715 55.525ZM91.8135 70V53.85C93.2468 53.7333 94.4635 53.675 95.4635 53.675C96.9968 53.675 98.2635 54.075 99.2635 54.875C100.263 55.6583 100.763 56.7833 100.763 58.25C100.763 59.2333 100.48 60.1417 99.9135 60.975C99.3468 61.8083 98.7051 62.4833 97.9885 63C99.9718 65.6333 101.197 67.2083 101.663 67.725C102.613 68.7083 103.647 69.2667 104.763 69.4L104.738 70.175C103.805 70.1583 103.047 70.025 102.463 69.775C101.88 69.5083 101.297 69.0667 100.713 68.45C100.147 67.8333 98.8885 66.175 96.9385 63.475C95.5885 63.475 94.2635 63.4333 92.9635 63.35V70H91.8135ZM96.3135 62.525C96.9635 62.525 97.6635 62.0917 98.4135 61.225C99.1635 60.3583 99.5385 59.35 99.5385 58.2C99.5385 57.05 99.1468 56.175 98.3635 55.575C97.5801 54.975 96.5635 54.675 95.3135 54.675C94.6468 54.675 93.8635 54.7083 92.9635 54.775V62.4C94.1635 62.4833 95.2801 62.525 96.3135 62.525ZM107.023 70V53.775H108.173V70H107.023ZM114.177 70V53.675H114.727L125.377 65.925C125.76 66.3583 126.11 66.7917 126.427 67.225C126.76 67.6417 126.935 67.8583 126.952 67.875C126.918 67.475 126.902 66.6917 126.902 65.525V53.775H128.052V70.1H127.502L116.652 57.65L115.277 55.975C115.31 56.3083 115.327 57.0917 115.327 58.325V70H114.177ZM134.85 64.375L132.525 70H131.35L138.15 53.675H138.825L145.675 70H144.4L142.05 64.375H134.85ZM138.425 55.525C138.175 56.275 137.95 56.9 137.75 57.4L135.25 63.4H141.65L139.175 57.425C138.791 56.4917 138.541 55.8583 138.425 55.525Z"
                    fill="#3e2e29"
                />
            </svg>
            <div className={styles.navLinks}>
                <Link href="/boka">BOKA &#8595;</Link>
                <Link href="/cykling">CYKLING &#8593;</Link>
                <Link href="/galleri">GALLERI &#8595;</Link>
                <Link href="/om-oss">OM OSS &#8593;</Link>
            </div>
        </div>
    );
}
