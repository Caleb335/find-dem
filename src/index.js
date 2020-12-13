import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../assets/scss/app.scss'

import store from "./redux/store"
import { bugAdded, bugResolved } from "./redux/actions"

store.subscribe(() => {
    // the function gets called whenevr there's a change
    // in the application's state.
    console.log("store changed!", store.getState())
})

store.dispatch(bugAdded("testing this out"))
store.dispatch(bugAdded("testing this out again"))

// to remove the bug, just dispatch another action from the store
console.log(store.getState())

ReactDOM.render(<App />, document.querySelector('#root'))
