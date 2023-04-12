import React from 'react';
import Person from './Person';
import './App.css';
import PersonList from './PersonList';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
      <Person name="John" age={30} />
      <Person name="Jane" age={25} />

      <div className="App-header">
      <PersonList />
    </div>
    </div>
    </div>
  );
};

export default App;


