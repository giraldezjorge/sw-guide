import React from 'react'
import mockAxios from 'axios'
import { mockFilm } from '../../__mocks__/data-mock'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import FilmDetails from '../../pages/FilmDetails'

const mockStore = configureStore([])

describe('Film details page', () => {
  const film = mockFilm

  mockAxios.get.mockResolvedValue({
    data: film
  })

  afterEach(() => {
    mockAxios.get.mockClear()
  })

  it('renders correctly', () => {
    const store = mockStore({ favorites: [] })

    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <FilmDetails match={{params:{ id: 1 }}} />
        </Provider>
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
