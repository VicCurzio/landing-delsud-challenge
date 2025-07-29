'use client';

import { useState } from 'react';

import styles from './Sponsors.module.css';
import SponsorLogoItem from './SponsorLogoItem';

export default function SponsorCarousel({ sponsorLogos }) {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

    const showNextLogo = () => {
        setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % sponsorLogos.length);
    };

    const showPrevLogo = () => {
        setCurrentLogoIndex((prevIndex) =>
            prevIndex === 0 ? sponsorLogos.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.carouselContainer}>
            <button
                className={styles.carouselArrow}
                onClick={showPrevLogo}
                aria-label="Previous sponsor"
            >
                &larr;
            </button>
            <SponsorLogoItem
                svgComponent={sponsorLogos[currentLogoIndex].svgComponent}
                alt={sponsorLogos[currentLogoIndex].alt}
            />
            <button
                className={styles.carouselArrow}
                onClick={showNextLogo}
                aria-label="Next sponsor"
            >
                &rarr;
            </button>
        </div>
    );
}