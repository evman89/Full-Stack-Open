const Header = (props) => {
  console.log(props)
  return(
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
      </div>
  )
}

const Total = (props) => {
  return(
    <div>
    <p>Number of exercises {props.totalexercises}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const totalexercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content part={part1.name} exercises= {part1.exercises} />
      <Content part={part1.name} exercises= {part1.exercises} />
      <Content part={part1.name} exercises= {part1.exercises} />
      <Total totalexercises={totalexercises}/>
    </div>
  )
}

export default App
