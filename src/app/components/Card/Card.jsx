import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({ imgSrc, altText, title }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImageWrapper}>
                <Image
                    src={imgSrc}
                    alt={altText}
                    fill
                    className={styles.cardImage}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <h2 className={styles.cardTitle}>{title}</h2>
        </div>
    )
}