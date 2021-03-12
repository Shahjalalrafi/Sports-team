import './App.css';
import AllTeams from './Component/AllTeams';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom'
import PageNotFound from './Component/PageNotFound';
import TeamDetails from './Component/TeamDetails';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>

          <Route path="/teams">
            <AllTeams />
          </Route>

          <Route exact path="/">
            <AllTeams />
          </Route>

          <Route path="/team/:id">
            <TeamDetails />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>
      </Router> 


    </div>
  );
}

export default App;
