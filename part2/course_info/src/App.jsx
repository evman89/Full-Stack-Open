const Header = (props) => <h1>{props.course.name}</h1>

const Content = (props) => (
  <div>
    <Part course={props.course.parts[0]} />
    <Part course={props.course.parts[1]} />
    <Part course={props.course.parts[2]} />
    <Part course={props.course.parts[3]} />
  </div>
)

const Part = (props) => (
  <p>
    {props.course.name} {props.course.exercises}
  </p>
)

const Total = (props) => (
  <p>
    <b>total of {props.total} exercises</b>
  </p>
)
const Course = (props) => {
  return (
    <div>
      <Header course={props.course}/>
      <Content course={props.course}/>
      <Total total={
        props.course.parts[0].exercises + 
        props.course.parts[1].exercises +
        props.course.parts[2].exercises +
        props.course.parts[3].exercises
        }/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course}/>
}

export default App
