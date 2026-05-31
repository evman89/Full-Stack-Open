import { useState } from 'react'

const Entry = ({ person }) => {
  return (
    <p>
      {person.name}
    </p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: newName
    }

  setPersons(persons.concat(entryObject))
  setNewName('')
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,index) =>
                <Entry key={index} person={person}/>
              )
            }
      <div>debug: {newName}</div>      
    </div>
  )
}

export default App
