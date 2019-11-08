import reducer from '../../reducers/favoritesReducer'
import { ActionTypes } from '../../actions/action-types'

describe('Favorites reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle FETCH_FAVORITES', () => {
    expect(
      reducer([], {
        type: ActionTypes.FETCH_FAVORITES,
        payload: []
      })
    ).toEqual([])

    expect(
      reducer(
        [],
        {
          type: ActionTypes.FETCH_FAVORITES,
          payload: [{
            name: 'Test item'
          }, {
            name: 'Another test item'
          }]
        }
      )
    ).toEqual([
      {
        name: 'Test item'
      },
      {
        name: 'Another test item'
      }
    ])
  }),

  it('should handle ADD_FAVORITE', () => {
    expect(
      reducer([], {
        type: ActionTypes.ADD_FAVORITE,
        item: {
          name: 'Test item'
        }
      })
    ).toEqual([
      {
        name: 'Test item'
      }
    ])

    expect(
      reducer(
        [
          {
            name: 'Test item'
          }
        ],
        {
          type: ActionTypes.ADD_FAVORITE,
          item: {
            name: 'Another test item'
          }
        }
      )
    ).toEqual([
      {
        name: 'Test item'
      },
      {
        name: 'Another test item'
      }
    ])
  }),

  it('should handle REMOVE_FAVORITE', () => {
    expect(
      reducer([], {
        type: ActionTypes.REMOVE_FAVORITE,
        id: 'test_id'
      })
    ).toEqual([])

    expect(
      reducer(
        [
          {
            url: 'test_id'
          }
        ],
        {
          type: ActionTypes.REMOVE_FAVORITE,
          id: 'another_test_id'
        }
      )
    ).toEqual([
      {
        url: 'test_id'
      }
    ])

    expect(
      reducer(
        [
          {
            url: 'test_id'
          },
          {
            url: 'another_test_id'
          }
        ],
        {
          type: ActionTypes.REMOVE_FAVORITE,
          id: 'test_id'
        }
      )
    ).toEqual([
      {
        url: 'another_test_id'
      }
    ])

    expect(
      reducer(
        [
          {
            url: 'test_id'
          }
        ],
        {
          type: ActionTypes.REMOVE_FAVORITE,
          id: 'test_id'
        }
      )
    ).toEqual([])
  })
})
