import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Roster from './pages/Roster'

const App = () => {
  return <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/roster">
        <Roster />
      </Route>
    </Switch>
  </Router>
}

export default App;
