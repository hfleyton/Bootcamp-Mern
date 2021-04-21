import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'

function App() {

  const [stateApp,setStateApp] = useState('');

  return (
    <div className="App">
      <Form stateForm={stateApp} setStateForm={setStateApp}/>
    </div>
  );
}

export default App;
