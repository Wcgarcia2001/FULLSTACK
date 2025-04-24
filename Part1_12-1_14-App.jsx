import { useState } from 'react';

const App = () => {
  // Array de anécdotas
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // Estado para almacenar el índice de la anécdota seleccionada
  const [selected, setSelected] = useState(0);

  // Estado para almacenar los votos de cada anécdota (inicialmente todos en 0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Función para mostrar una anécdota aleatoria
  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  // Función para votar por la anécdota actual
  const handleVote = () => {
    // Creamos una copia del array de votos
    const copy = [...votes];
    // Incrementamos el voto correspondiente a la anécdota actual
    copy[selected] += 1;
    // Actualizamos el estado con la nueva copia
    setVotes(copy);
  };

  // Encontrar la anécdota con más votos
  const mostVotedIndex = votes.indexOf(Math.max(...votes));
  const mostVotedAnecdote = anecdotes[mostVotedIndex];
  const mostVotedCount = votes[mostVotedIndex];

  return (
    <div>
      {/* Muestra la anécdota seleccionada */}
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      {/* Botones para votar y cambiar de anécdota */}
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      {/* Muestra la anécdota con más votos */}
      <h2>Anecdote with the most votes</h2>
      <p>{mostVotedAnecdote}</p>
      <p>has {mostVotedCount} votes</p>
    </div>
  );
};

export default App;