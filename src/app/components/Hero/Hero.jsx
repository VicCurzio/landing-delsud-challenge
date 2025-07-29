import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <Image
                src="/image.png"
                alt="Maquinaria agrícola en el campo"
                fill
                className={styles.heroImage}
                style={{ objectFit: 'cover' }}
                sizes="100vw"
                priority={true}
            />
            <div className={styles.heroContent}>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit <span className={styles.primaryColor}>interdum, ac aliquet odio mattis.</span>
                </h1>
            </div>
        </section>
    )
}