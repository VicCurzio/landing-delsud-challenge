'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';
import AccordionItem from './Accordion/AccordionItem';

export default function FAQ() {
    const [openIndices, setOpenIndices] = useState([]);

    const faqs = [
        {
            id: 1,
            question: '¿Pregunta frecuente 1?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Ut quam lacus est feugiat. At at velit nullam sollicitudin tempor eu scelerisque.. Nullam purus in vitae sed diam urna nulla augue ac..'
        },
        {
            id: 2,
            question: '¿Pregunta frecuente 2?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Commodo cras sit diam viverra phasellus massa lorem suspendisse venenatis.. Amet laoreet accumsan egestas egestas erat.. Nisi a curabitur in ut habitant molestie euismod elit.. Venenatis lacus dui ipsum gravida fermentum platea scelerisque.'
        },
        {
            id: 3,
            question: '¿Pregunta frecuente 3?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Mauris mauris ipsum sit egestas in.. Velit vitae eget pharetra adipiscing ut sit egestas condimentum.. Praesent enim ullamcorper ultrices est. Duis pellentesque mi ultrices sit vel.. Consequat ut velit id mi in..'
        },
        {
            id: 4,
            question: '¿Pregunta frecuente 4?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Ut quam lacus est feugiat. At at velit nullam sollicitudin tempor eu scelerisque.. Nullam purus in vitae sed diam urna nulla augue ac..'
        },
        {
            id: 5,
            question: '¿Pregunta frecuente 5?',
            answer: 'Lorem ipsum dolor sit amet consectetur. Commodo cras sit diam viverra phasellus massa lorem suspendisse venenatis.. Amet laoreet accumsan egestas egestas erat.. Nisi a curabitur in ut habitant molestie euismod elit.. Venenatis lacus dui ipsum gravida fermentum platea scelerisque.'
        },
        {
            id: 6,
            question: '¿Pregunta frecuente 6?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];

    const handleToggle = (index) => {
        if (openIndices.includes(index)) {
            setOpenIndices(openIndices.filter(i => i !== index));
        } else {
            setOpenIndices([...openIndices, index]);
        }
    };

    return (
        <section className={styles.faqSectionContainer}>
            <h2 className={styles.faqTitle}>
                Preguntas <span className={styles.primaryColor}>Frecuentes</span>
            </h2>

            <div className={styles.accordionContainer}>
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndices.includes(index)}
                        toggleAccordion={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
}