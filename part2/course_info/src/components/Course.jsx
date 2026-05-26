const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
    //console.log(course.name)
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
          <Part key={part.id} part={part}/>
        )
      }
    </div>
  )
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => {
  // const exercises = parts.map(part => part.exercises)
  // console.log(exercises)
  // const total = exercises.reduce((accumulator, currentValue) => accumulator + currentValue)
  // console.log(total)
  const total = parts.reduce((s,p) => s +p.exercises, 0)
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course
