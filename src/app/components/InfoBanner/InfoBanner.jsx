import styles from './InfoBanner.module.css';

export default function InfoBanner() {
    return (
        <section className={styles.infoBannerContainer}>
            <div className={styles.content}>
                <p>
                    Lorem <span className={styles.primaryColor}>ipsum dolor sit amet consectetur</span> aliquet imperdiet <span className={styles.primaryColor}>penatibus donec velit.</span>
                </p>
                <button className={styles.button}>Esto es un botón</button>
            </div>
        </section>
    );
}