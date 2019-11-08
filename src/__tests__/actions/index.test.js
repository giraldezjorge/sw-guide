import { fetchFavorites, addFavorite, removeFavorite } from '../../actions/index'
import { ActionTypes } from '../../actions/action-types'

describe('actions', () => {
  it('should create an action to add a favorite', () => {
    const item = {
      name: 'Test name'
    }
    const expectedAction = {
      type: ActionTypes.ADD_FAVORITE,
      item
    }
    expect(addFavorite(item)).toEqual(expectedAction)
  }),

  it('should create an action to remove a favorite', () => {
    const id = 'test_id'
    const expectedAction = {
      type: ActionTypes.REMOVE_FAVORITE,
      id
    }
    expect(removeFavorite(id)).toEqual(expectedAction)
  }),

  it('should create an action to fetch the favorites', () => {
    const fetched = []
    const expectedAction = {
      type: ActionTypes.FETCH_FAVORITES,
      payload: fetched
    }
    expect(fetchFavorites()).toEqual(expectedAction)
  })
})
