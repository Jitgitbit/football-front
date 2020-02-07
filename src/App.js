import React, { Component } from 'react';
import { Provider } from 'react-redux'
// import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
// import EventsListContainer from './components/EventsListContainer'
// import CreateEventFormContainer from './components/CreateEventFormContainer'
// import EventDetailsContainer from './components/EventDetailsContainer'
import store from './store'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home/>
          {/* <Switch>
            <Route path="/" exact component={EventsListContainer} />
            <Route path="/events/new" exact component={CreateEventFormContainer} />
            <Route path="/events/:id" component={EventDetailsContainer} />
          </Switch> */}
        </div>
      </Provider>
    );
  }
}

export default App;
