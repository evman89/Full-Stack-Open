const Header = () => {
  const course = 'Half Stack application development'
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.exercise} {props.part}</p>
    </div>
  )
}
const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
      <Part part={part1} exercise={exercise1} />
      <Part part={part2} exercise={exercise2} />
      <Part part={part3} exercise={exercise3} />
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return(
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}
const App = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Total />
    </div>
  )
}

export default App
