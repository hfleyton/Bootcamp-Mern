import React from 'react';
import './App.css';

import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard firstName={"Jane"} lastname={"Doe"} age={45} hairColor={"Black"}/>
        <PersonCard firstName={"John"} lastname={"Smith"} age={88} hairColor={"Brown"}/>
        <PersonCard firstName={"Millard"} lastname={"Fillmore"} age={50} hairColor={"Brown"}/>
        <PersonCard firstName={"Maria"} lastname={"Smith"} age={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
