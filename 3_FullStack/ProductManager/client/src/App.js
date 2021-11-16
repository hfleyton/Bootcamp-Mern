import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Form}/>
      </Switch>
    </Router>
  );
}

export default App;
