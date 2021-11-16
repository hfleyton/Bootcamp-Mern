import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dashMovs from './components/Main'
import abono from './components/AbonoRetiro'
import transferencia from './components/Transferencia'
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/main' component={dashMovs}/>
        <Route path='/abonoretiro' component={abono}/>
        <Route path='/transferencia' component={transferencia}/>
        <Route path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
