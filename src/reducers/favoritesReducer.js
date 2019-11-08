import { FAVORITES_KEY } from '../constants/store'
import { ActionTypes } from '../actions/action-types'

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_FAVORITES:
      return action.payload
    case ActionTypes.ADD_FAVORITE:
      const newStateWithAdded = [...state, action.item]
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newStateWithAdded))

      return newStateWithAdded
    case ActionTypes.REMOVE_FAVORITE:
      const newState = state.filter(item =>
        item.url !== action.id
      )
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newState))

      return newState
    default:
      return state
  }
}
