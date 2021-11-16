import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dashMovs from './components/Main'
import readReviews from './components/readReviews'
import addMovies from './components/addMovies'
import addreview from './components/addReviews'
import Login from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/main' component={dashMovs}/>
        <Route path='/addMovie' component={addMovies}/>
        <Route path='/addreview' component={addreview}/>
        <Route path='/readreviews' component={readReviews}/>
        <Route path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;