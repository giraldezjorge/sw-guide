import React from 'react'
import mockAxios from 'axios'
import { mockFilm, mockCharacter } from '../../__mocks__/data-mock'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Film from '../../components/film'
import { theForce } from '../../lib'

const mockStore = configureStore([])

describe('The film component', () => {
  const film = mockFilm

  const store = mockStore({ favorites: [] })

  mockAxios.get.mockResolvedValue({
    data: film
  })

  afterEach(() => {
    mockAxios.get.mockClear()
  })

  it('should fetch film data', () => {
    const getSpy = jest.spyOn(theForce, 'getFilm')
    const filmInstance = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Film film={film} params={{ id: 1 }} />
        </Provider>
      </MemoryRouter>
    )

    expect(getSpy).toBeCalled()
  }),

  it('shows the film info', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Film film={film} params={{ id: 1 }} />
        </Provider>
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
