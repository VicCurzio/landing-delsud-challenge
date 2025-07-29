import Link from 'next/link';
import styles from './Footer.module.css';
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <div className={styles['logo-rectangle']}></div>
                    <h1 className={styles.bussines}>LOGO EMPRESA</h1>
                </div>

                <div className={styles.menuSection}>
                    <h3>Menú</h3>
                    <ul>
                        <li><Link href="/">Item 1</Link></li>
                        <li><Link href="/">Item 2</Link></li>
                        <li><Link href="/">Item 3</Link></li>
                    </ul>
                </div>

                <div className={styles.contactSection}>
                    <h3>Contacto</h3>
                    <p className={styles.email}>
                        <span className={styles.emailIcon}>@</span>correo@empresa.com
                    </p>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
}