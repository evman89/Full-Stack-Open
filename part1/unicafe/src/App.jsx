import { useState } from 'react'

const Statistics = (props) => {
  return(
    <div>
    <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.neutral + props.bad}</p>
      <p>average {(props.good + props.neutral*0 + props.bad*(-1))/(props.good + props.neutral + props.bad)}</p>
      <p>positive {(props.good/(props.good + props.neutral + props.bad))*100} %</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral +1)
  }
  const handleBadClick = () => {
    setBad(bad +1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {handleGoodClick}>good</button>
      <button onClick = {handleNeutralClick}>neutral</button>
      <button onClick = {handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
