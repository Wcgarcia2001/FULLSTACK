const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ]
  const parts1 = [
    {
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    }
  ];
  return (
    <div className="Container" style={{
      backgroundColor: 'red',
      color: 'white', // Color de texto blanco para mejor contraste
      padding: '20px',
      borderRadius: '8px',
      margin: '20px',
      width: 'fit-content'
    }}>
    <div style={{
      backgroundColor: 'blue',
      color: 'white', // Color de texto blanco para mejor contraste
      padding: '20px',
      borderRadius: '8px',
      margin: '20px',
      width: 'fit-content'
    }}>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
      <div style={{
      backgroundColor: 'yellow',
      color: 'black', // Color de texto blanco para mejor contraste
      padding: '20px',
      borderRadius: '8px',
      margin: '20px',
      width: 'fit-content'
    }}>
      <Header course={course} />
      <h2>
        Temas del Curso
      </h2>
      <Content />
      <h2>
        Ejercicio por Temas
      </h2>
      <Total />
      </div>
      <div style={{
      backgroundColor: 'white',
      color: 'black', // Color de texto blanco para mejor contraste
      padding: '20px',
      borderRadius: '8px',
      margin: '20px',
      width: 'fit-content'
    }}>
      <h1>{course}</h1>
      <h2>Course Topics</h2>
      <ul>
        {parts1.map((p, i) => <Part key={i} part={p.name} index={i} />)}
      </ul>
      <h2>Exercises by Topic</h2>
      <ul>
        {parts1.map((p, i) => <Part key={i} part={p.name} exercises={p.exercises} index={i} />)}
      </ul>
      </div>
      <div style={{
      backgroundColor: 'lime',
      color: 'black', // Color de texto blanco para mejor contraste
      padding: '20px',
      borderRadius: '8px',
      margin: '20px',
      width: 'fit-content'
    }}>
      <h1>{course}</h1>
      <h2>Course Topics</h2>
      <ul>
        {parts1.map(part => (
          <li key={part.id}>
            Part {part.id} - {part.name}
          </li>
        ))}
      </ul>
      
      <h2>Exercises by Topic</h2>
      <ul>
        {parts1.map(part => (
          <li key={part.id}>
            Part {part.id} - {part.name} (Exercises: {part.exercises})
          </li>
        ))}
      </ul>
      
      <p><strong>Total exercises: {parts.reduce((sum, part) => sum + part.exercises, 0)}</strong></p>
    </div>
    </div>
  )
}
const Header = () => {
  console.log()
  const course = 'Half Stack application development'
  return (
    <div>
      <h1>
       {course}
      </h1>
    </div>
  )
}
const  Content = () =>  {
    const temas = [
      { nombre: "Fundamentals of React"},
      { nombre: "Using props to pass data"},
      { nombre: "State of a component",},
    ]
    
    return (
      <ul>
        {temas.map((tema, index) => (
          <li key={index}>
            Part{index+1} - {tema.nombre}
          </li>
        ))}
      </ul>
    )
  }

  const  Total = () =>  {
    const ejercicios = [
      { cantidad: 10 },
      { cantidad: 7 },
      { cantidad: 14 },
    ]
    
    return (
      <ul>
        {ejercicios.map((ejercicio, index) => (
          <li key={index}>
            Part{index+1} - Número de Ejercicios : {ejercicio.cantidad}
          </li>
        ))}
      </ul>
    )
  }
  const Part = ({ part, exercises, index }) => (
    <li>
      Part {index + 1} - {part} {exercises && `(Exercises: ${exercises})`}
    </li>
  );
export default App
