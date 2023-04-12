import React, { useState } from 'react';
import Person from './Person';

const PersonList = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
  ]);

  const [newPerson, setNewPerson] = useState({ id: null, name: '', age: '' });

  const addPersonHandler = () => {
    // Generate a new ID for the new person
    const newId = persons.length + 1;

    // Create the new person object
    const newPersonObject = {
      id: newId,
      name: newPerson.name,
      age: newPerson.age,
    };

    // Add the new person object to the persons array
    setPersons([...persons, newPersonObject]);

    // Reset the new person state
    setNewPerson({ id: null, name: '', age: '' });
  };

  const removePersonHandler = (id) => {
    // Filter out the person with the given ID
    const updatedPersons = persons.filter((person) => person.id !== id);

    // Set the updated persons array as the new state
    setPersons(updatedPersons);
  };

  const inputChangeHandler = (event) => {
    // Update the new person state based on the input field changes
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setNewPerson({ ...newPerson, [fieldName]: fieldValue });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => removePersonHandler(person.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2>Add a new person:</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newPerson.name}
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={newPerson.age}
          onChange={inputChangeHandler}
        />
        <button onClick={addPersonHandler}>Add Person</button>
      </div>
    </div>
  );
};

export default PersonList;
