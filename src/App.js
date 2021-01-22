import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';
import Apply from './components/pages/Apply';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/Apply' component={Apply}/>
          <Route path='/Register' component={Register}/>
        </Switch>
    </Router>
  );
}

export default App;
