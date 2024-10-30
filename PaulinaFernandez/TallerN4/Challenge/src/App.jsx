import React, { useState,useEffect } from 'react';
import AdviceCard from '../src/components/AdviceCard';
import AdviceButton from '../src/components/AdviceButton';
import styles from '../src/App.module.css';

const App = () => {
  const [advice, setAdvice] = useState({ id: "", quote: "" });

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice({ id: data.slip.id, quote: data.slip.advice });
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <AdviceCard advice={advice} />
        <AdviceButton onClick={fetchAdvice} />
      </div>
    </div>
  );
};

export default App;