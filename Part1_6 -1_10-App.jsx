import { useState, useEffect } from 'react';

// Componente hijo que recibe las estadísticas como props
const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  // Depuración de props
  console.log('Props recibidos:', { good, neutral, bad, total, average, positivePercentage });

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average Score:</td>
            <td>{average.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Positive Feedback (%):</td>
            <td>{positivePercentage.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // Estado para almacenar los comentarios
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Calcula el número total de comentarios
  const total = good + neutral + bad;

  // Calcula la puntuación promedio (good: 1, neutral: 0, bad: -1)
  const average = total > 0 ? (good - bad) / total : 0;

  // Calcula el porcentaje de comentarios positivos
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;

  // Seguimiento de estados con console.log()
  useEffect(() => {
    console.log(`Estado actualizado - good: ${good}, neutral: ${neutral}, bad: ${bad}`);
  }, [good, neutral, bad]); // Se ejecuta cuando alguno de los estados cambia

  // Funciones para manejar los clics en los botones
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      {/* Sección para dar feedback */}
      <h2>Give Feedback</h2>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      {/* Pasamos los estados y estadísticas calculadas como props al componente Statistics */}
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default App;