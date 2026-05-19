import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >{props.text}</button>
  )
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  )
}
const Statistics = (props) => {
  
  if (props.good + props.neutral + props.bad === 0) {
    return (
      
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return(
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.good + props.neutral + props.bad}/>
      <StatisticLine text="average" value={(props.good + props.neutral*0 + props.bad*(-1))/(props.good + props.neutral + props.bad)}/>
      <StatisticLine text="positive" value={(props.good/(props.good + props.neutral + props.bad))*100 + "%"}/>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClicks = () => {
    setGood(good +1)
  }
  const neutralClicks = () => {
    setNeutral(neutral +1)
  }
  const badClicks = () => {
    setBad(bad +1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClicks} text="good" />
      <Button handleClick={neutralClicks} text="nuetral" />
      <Button handleClick={badClicks} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
