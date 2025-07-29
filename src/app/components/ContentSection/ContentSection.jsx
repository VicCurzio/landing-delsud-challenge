import Image from 'next/image';

import styles from './ContentSection.module.css';
import CardsSection from '../Card/CardsSection/CardsSection';

export default function ContentSection() {
    return (
        <section className={styles.contentSectionContainer}>
            <p className={styles.textContent}>
                <span className={`${styles.primaryColor} ${styles.boldText}`}>Lorem ipsum dolor sit amet consectetur
                </span> aliquet imperdiet
                <span className={styles.boldText}> penatibus donec velit.</span> A faucibus eget et vulputate dapibus congue enim massa.. Sem semper
                odio volutpat<span className={`${styles.primaryColor} ${styles.boldText}`}> risus platea nulla diam id dis..</span>
            </p>

            <Image
                src="/dna.png"
                alt="icona de ADN"
                width={30}
                height={40}
                className={styles.icon}
            />

            <h2 className={styles.sectionTitle}>
                Esto <span className={`${styles.primaryColor} ${styles.WeightText}`}>titula</span> una sección
            </h2>

            <CardsSection />
        </section>
    )
}