'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
    const [isMobile, setIsMobile] = useState(false);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            avatarSrc: '/daniel.png',
            name: 'Daniel',
            company: 'Empresa 1',
            testimonialText: 'Lorem ipsum dolor sit amet consectetur. Ut quam lacus est feugiat. At at velit nullam sollicitudin tempor eu scelerisque.. Nullam purus in vitae sed diam urna nulla augue ac..'
        },
        {
            id: 2,
            avatarSrc: '/franco.png',
            name: 'Franco',
            company: 'Empresa 2',
            testimonialText: 'Lorem ipsum dolor sit amet consectetur. Commodo cras sit diam viverra phasellus massa lorem suspendisse venenatis.. Amet laoreet accumsan egestas egestas erat.. Nisi a curabitur in ut habitant molestie euismod elit.. Venenatis lacus dui ipsum gravida fermentum platea scelerisque.'
        },
        {
            id: 3,
            avatarSrc: '/eugenia.png',
            name: 'Eugenia',
            company: 'Empresa 3',
            testimonialText: 'Lorem ipsum dolor sit amet consectetur. Mauris mauris ipsum sit egestas in.. Velit vitae eget pharetra adipiscing ut sit egestas condimentum.. Praesent enim ullamcorper ultrices est. Duis pellentesque mi ultrices sit vel.. Consequat ut velit id mi in..'
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const showPrevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className={styles.testimonialsSectionContainer}>
            <h2 className={styles.testimonialsTitle}>
                Sector de <span className={styles.primaryColor}>testimonios</span>
            </h2>

            {isMobile ? (
                <div className={styles.mobileCarouselWrapper}>
                    <TestimonialCard
                        avatarSrc={testimonials[currentTestimonialIndex].avatarSrc}
                        name={testimonials[currentTestimonialIndex].name}
                        company={testimonials[currentTestimonialIndex].company}
                        testimonialText={testimonials[currentTestimonialIndex].testimonialText}
                    />
                    <div className={styles.mobileArrowsWrapper}>
                        <button
                            className={styles.carouselArrow}
                            onClick={showPrevTestimonial}
                            aria-label="Testimonio anterior"
                        >
                            &larr;
                        </button>
                        <button
                            className={styles.carouselArrow}
                            onClick={showNextTestimonial}
                            aria-label="Siguiente testimonio"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                avatarSrc={testimonial.avatarSrc}
                                name={testimonial.name}
                                company={testimonial.company}
                                testimonialText={testimonial.testimonialText}
                            />
                        ))}
                    </div>
                    <div className={styles.desktopArrowsContainer}>
                        <button
                            className={styles.carouselArrow}
                            onClick={showPrevTestimonial}
                            aria-label="Testimonio anterior"
                        >
                            &larr;
                        </button>
                        <button
                            className={styles.carouselArrow}
                            onClick={showNextTestimonial}
                            aria-label="Siguiente testimonio"
                        >
                            &rarr;
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}