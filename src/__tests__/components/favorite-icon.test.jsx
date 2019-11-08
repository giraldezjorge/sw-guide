import React from 'react'
import renderer from 'react-test-renderer'
import { render, mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FavoriteIcon from '../../components/favorite-icon'

const mockStore = configureStore([])

describe('The favorite icon', () => {
  const item = {
    url: 'test_url'
  }

  it('shows the add favorite icon if item is not a favorite', () => {
    const store = mockStore({})
    const component = renderer.create(
      <Provider store={store}>
        <FavoriteIcon favorite={false} item={item} />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('shows the remove favorite icon if item is a favorite', () => {
    const store = mockStore({
      favorites: [item]
    })
    const component = renderer.create(
      <Provider store={store}>
        <FavoriteIcon favorite={true} item={item} />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
