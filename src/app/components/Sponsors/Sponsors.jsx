'use client';

import { useState, useEffect } from 'react';

import styles from './Sponsors.module.css';
import DelsudLogo from '../DelsudLogo/DelsudLogo';
import SponsorLogoItem from './SponsorLogoItem';
import SponsorCarousel from './SponsorCarousel';

export default function Sponsors() {
    const [isMobile, setIsMobile] = useState(false);

    const sponsorLogos = [
        { id: 1, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 2, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 3, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 4, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 5, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 6, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' },
        { id: 7, svgComponent: <DelsudLogo />, alt: 'Logo Delsud' }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={styles.sponsorsSectionContainer}>
            <h2 className={styles.sponsorsTitle}>
                <span className={styles.primaryColor}>Sponsors</span> del proyecto
            </h2>
            {isMobile ? (
                <SponsorCarousel sponsorLogos={sponsorLogos} />
            ) : (
                <div className={styles.logosWrapper}>
                    {sponsorLogos.map((logo) => (
                        <SponsorLogoItem
                            key={logo.id}
                            svgComponent={logo.svgComponent}
                            alt={logo.alt}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}