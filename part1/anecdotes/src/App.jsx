import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  length=anecdotes.length
  const newClick = () => {
    setSelected(Math.floor(Math.random()*(length)))   
  }

  const nullVotes = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0}
  const [votes, setVotes]=useState(nullVotes)
  const newVote = () => {
    const newVotes = {...votes}
    newVotes[selected] +=1
    setVotes(newVotes)
    //console.log(selected)
    //console.log(newVotes)
  }

  const maxVote = Math.max(...Object.values(votes))
  //console.log(maxVote)
  const favoriteAnecdote = Object.keys(votes).find(key => votes[key] === maxVote)
  //console.log(favoriteAnecdote)

  return (
    <div>
      <h1>anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={newVote}>vote</button>
      <button onClick={newClick}>next anecdote</button>
      <h1>anecdote with the most votes</h1>
      <p>{anecdotes[favoriteAnecdote]}</p>
      <p>has {maxVote} votes</p>
    </div>
  )
}

export default App
