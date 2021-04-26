import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const tabDeDatabase = [
  {etiqueta: 'Tab 1', contenido : 'Contenido 1'},
  {etiqueta: 'Tab 2', contenido : 'Contenido 2'},
  {etiqueta: 'Tab 3', contenido : 'Contenido 3'}
]


function App() {
  return (
    <div className="App">
      <Tabs tabs={tabDeDatabase}/>
    </div>
  );
}

export default App;
