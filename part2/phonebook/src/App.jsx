import { useState } from 'react'

const Entry = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const names = persons.map(person => person.name)
  //console.log(names)

  const addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      name: newName, number: newNumber
    }
    {names.includes(newName) ? 
    window.alert(`${newName} is already added to phonebook`):
    setPersons(persons.concat(entryObject))}
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,index) =>
                <Entry key={index} person={person} />
              )
            }      
    </div>
  )
}

export default App
