import React from 'react';
import styles from './TemperatureInput.module.css';

function TemperatureInput({ scale, temperature, onTemperatureChange, onScaleChange }) {
    const handleInputChange = (e) => {
        onTemperatureChange(e.target.value);
    };

    const handleScaleChange = (e) => {
        onScaleChange(e.target.value);
    };

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>
                Escala:
                <select value={scale} onChange={handleScaleChange} className={styles.select}>
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </select>
            </label>

            <div className={styles.temperatureInput}>
                <label className={styles.label}>
                    Ingrese la temperatura en {scale === 'celsius' ? 'Celsius' : 'Fahrenheit'}:
                    <input
                        type="number"
                        value={temperature}
                        onChange={handleInputChange}
                        className={styles.inputField}
                    />
                </label>
            </div>
        </div>
    );
}

export default TemperatureInput;
