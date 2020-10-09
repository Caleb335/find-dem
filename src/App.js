import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from '../assets/js/pages/Index'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
