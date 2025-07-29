import styles from './Sponsors.module.css';

export default function SponsorLogoItem({ svgComponent, alt }) {
    return (
        <div className={styles.logoItem}>
            <span className={styles.sponsorSvgWrapper}>
                {svgComponent}
            </span>
        </div>
    );
}