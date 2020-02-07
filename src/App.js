import React, { Component } from 'react';
import { Provider } from 'react-redux'
// import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
// import TeamsListContainer from './components/TeamsListContainer'
// import CreateTeamFormContainer from './components/CreateTeamFormContainer'
// import TeamDetailsContainer from './components/TeamDetailsContainer'
import store from './store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home/>
          {/* <Switch>
            <Route path="/" exact component={TeamsListContainer} />
            <Route path="/events/new" exact component={CreateTeamFormContainer} />
            <Route path="/events/:id" component={TeamDetailsContainer} />
          </Switch> */}
        </div>
      </Provider>
    );
  }
}

export default App;
