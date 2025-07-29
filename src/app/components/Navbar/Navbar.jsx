'use client';

import { useState } from 'react';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [activeLang, setActiveLang] = useState('ES');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLangClick = (lang) => {
        setActiveLang(lang);
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles['navbar-container']}>
            <div className={styles['navbar-logo-wrapper']}>
                <div className={styles['logo-rectangle']}></div>
                <h1>LOGO EMPRESA</h1>
            </div>

            <button className={styles['hamburger-menu']} onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="mobile-nav-items">
                <span className={styles['hamburger-icon']}></span>
                <span className={styles['hamburger-icon']}></span>
                <span className={styles['hamburger-icon']}></span>
            </button>

            <nav className={`${styles['navbar-nav']} ${isMenuOpen ? styles['navbar-nav-open'] : ''}`} id="mobile-nav-items">
                <ul className={styles['navbar-menu']}>
                    <li><Link href="#" onClick={() => setIsMenuOpen(false)}>Item 1</Link></li>
                    <li><Link href="#" onClick={() => setIsMenuOpen(false)}>Item 2</Link></li>
                    <li><Link href="#" onClick={() => setIsMenuOpen(false)}>Item 3</Link></li>
                </ul>

                <div className={styles['divider']}></div>

                <ul className={styles['navbar-lang-switcher']}>
                    <li>
                        <Link
                            href="#"
                            onClick={() => handleLangClick('EN')}
                            className={`${activeLang === 'EN' ? styles['current-lang-active'] : ''}`}
                        >
                            EN
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            onClick={() => handleLangClick('ES')}
                            className={`${activeLang === 'ES' ? styles['current-lang-active'] : ''}`}
                        >
                            ES
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            onClick={() => handleLangClick('BR')}
                            className={`${activeLang === 'BR' ? styles['current-lang-active'] : ''}`}
                        >
                            BR
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}