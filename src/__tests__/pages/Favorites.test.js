import React from 'react'
import { mockFilms, mockCharacter } from '../../__mocks__/data-mock'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Favorites from '../../pages/Favorites'

const mockStore = configureStore([])

describe('Favorites page', () => {
  it('shows empty favorite lists', () => {
    const store = mockStore({ favorites: [] })

    const component = renderer.create(
      <Provider store={store}>
        <Favorites />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('shows empty film favorite list and character list', () => {
    const store = mockStore({ favorites: [mockCharacter] })

    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Favorites />
        </Provider>
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('shows film favorite list and empty character list', () => {
    const store = mockStore({ favorites: mockFilms })

    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Favorites />
        </Provider>
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('shows film favorite list and character list', () => {
    const store = mockStore({ favorites: [...mockFilms, mockCharacter] })

    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Favorites />
        </Provider>
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
