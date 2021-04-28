import React from 'react';
import './App.css';

import MyNewComponent from './componentes/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent sometext={"Hello world"} />
    </div>
  );
}

export default App;
