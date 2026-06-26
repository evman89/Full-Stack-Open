import { useState, useEffect } from 'react'
import axios from 'axios'

const Entry = ({ person }) => {
  return (
    <p> 
      {person.name} {person.number} 
    </p>
  )
}

const Form = (props) => {
  return (
  <form onSubmit={props.addEntry}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
  )
}

const Filter = (props) => {
  return (
    <p>
      filter shown with: <input value= {props.filterString} onChange={props.handleFilterChange}/>
    </p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  console.log('render', persons.length, 'persons')

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [showAll, setShowAll] = useState(true)

  const [filteredPersons, setFilteredPersons] = useState(persons)

  const names = persons.map(person => person.name)
  //console.log(names)

  const addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
      id: persons.length +1, name: newName, number: newNumber
    }
    {names.includes(newName) ? 
    window.alert(`${newName} is already added to phonebook`):
    setPersons(persons.concat(entryObject))}
    setFilteredPersons(filteredPersons.concat(entryObject))
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

  const [filterString, setFilterString] = useState('')

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
    console.log(event.target.value)

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredPersons(personsToShow)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString={filterString} handleFilterChange={handleFilterChange} />
      <h2>New Entry</h2>
      <Form addEntry={addEntry} newName={newName} handleNameChange={handleNameChange} 
      newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      {filteredPersons.map((person) =>
          <Entry key={person.id} person={person} />
        )
      }     
    </div>
  )
}

export default App
