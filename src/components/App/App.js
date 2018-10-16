import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from '../../routes/Notes';
import Note from '../../routes/Note';
import Add from '../../routes/Add';
import Edit from '../../routes/Edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Notes} />
          <Route path={'/add'} component={Add} />
          <Route path={'/note/:id'} component={Note} />
          <Route path={'/edit/:id'} component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
