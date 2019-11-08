import { FAVORITES_KEY } from '../constants/store'
import { ActionTypes } from './action-types'

export const fetchFavorites = () => {
  const fetched = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
  return {
    type: ActionTypes.FETCH_FAVORITES,
    payload: fetched
  }
}

export const addFavorite = (item) => {
  return {
    type: ActionTypes.ADD_FAVORITE,
    item
  }
}

export const removeFavorite = (id) => {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    id
  }
}
