import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function TestimonialCard({ avatarSrc, name, company, testimonialText }) {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.avatarWrapper}>
                <Image
                    src={avatarSrc}
                    alt={`Avatar de ${name}`}
                    width={60}
                    height={60}
                    className={styles.avatar}
                />
            </div>
            <h3 className={styles.testimonialName}>{name}</h3>
            <p className={styles.testimonialCompany}>{company}</p>
            <p className={styles.testimonialText}>{testimonialText}</p>
        </div>
    );
}