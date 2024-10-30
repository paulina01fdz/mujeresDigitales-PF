import React from 'react';
import dividerDesktop from '../assets/pattern-divider-desktop.svg'; 
import dividerMobile from '../assets/pattern-divider-mobile.svg';
import styles from '../styles/AdviceCard.module.css';


const AdviceCard = ({ advice }) => {
    return (
        <div className={styles.card}>
            <div className={styles.id}>
                <p>ADVICE #{advice.id}</p>
            </div>
            <div className={styles.quote}>
                <p>{advice.quote}</p>
            </div>

            <picture>
                <source media="(min-width: 376px)" srcSet={dividerDesktop} />
                <img src={dividerMobile} alt="Pattern Divider" />
            </picture>
        </div>
    );
};

export default AdviceCard;