import React from 'react';
import diceIcon from '../assets/icon-dice.svg';
import styles from '../styles/AdviceButton.module.css';

const AdviceButton = ({ onClick }) => {
    return (
        <div className={styles.dice} onClick={onClick}>
            <img src={diceIcon} alt="Dice icon" />
        </div>
    );
};

export default AdviceButton;

