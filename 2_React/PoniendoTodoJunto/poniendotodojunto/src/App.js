import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard_2';

const persons = [
{firstName:"Jane",lastname:"Doe", age: 45, hairColor:"Black"},
{firstName:"John",lastname:"Smith", age: 88, hairColor:"Yellow"},
{firstName:"Millard",lastname:"Fillmore", age: 50, hairColor:"Brown"},
{firstName:"Maria",lastname:"Smith", age: 62, hairColor:"Red"}
];


function App() {
  return (
    <div className="App">
        {persons.map((p,i) => <PersonCard {...p} key={i}/>)}
    </div>
  );
}

export default App;