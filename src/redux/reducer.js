import * as actions from "./actionTypes"

let bugsId = 0

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++bugsId,
          description: action.payload.description,
          resolved: false,
        },
      ]
    case actions.BUG_REMOVED:
      return state.filter(bug => {
          bug.id !== action
      })
    default: 
    return state
  }
}