import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../assets/scss/app.scss'

import store from "./redux/store"
import * as actions from "./redux/actionTypes"

store.subscribe(() => {
    // the function gets called whenevr there's a change
    // in the application's state.
    console.log("store changed!", store.getState())
})

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
})
// to remove the bug, just dispatch another action from the store
store.dispatch({
    type: actions.BUG_REMOVED, 
    payload: {
        id: 1
    }
})
console.log(store.getState())

ReactDOM.render(<App />, document.querySelector('#root'))
