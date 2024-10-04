import React from 'react';
import styles from './TemperatureResult.module.css';

function TemperatureResult({ convertedTemp, scale, boilingPoint }) {
    if (convertedTemp === null) {
        return null;
    }

    return (
        <div className={styles.resultContainer}>
            <h3 className={styles.convertedTemp}>
                Temperatura convertida: {convertedTemp}° {scale === 'celsius' ? 'Fahrenheit' : 'Celsius'}
            </h3>
            {boilingPoint ? (
                <p className={styles.boilingPoint}>¡TEMPERATURA SUFICIENTE PARA HERVIR AGUA!</p>
            ) : (
                <p className={styles.notBoilingPoint}> LA TEMPERATURA AÚN NO ES SUFICIENTE.</p>
            )}
        </div>
    );
}

export default TemperatureResult;