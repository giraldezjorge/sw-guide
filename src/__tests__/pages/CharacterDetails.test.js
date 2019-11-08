import React from 'react'
import mockAxios from 'axios'
import { mockCharacter } from '../../__mocks__/data-mock'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import CharacterDetails from '../../pages/CharacterDetails'

const mockStore = configureStore([])

describe('Character details page', () => {
  const character = mockCharacter

  mockAxios.get.mockResolvedValue({
    data: character
  })

  afterEach(() => {
    mockAxios.get.mockClear()
  })

  it('renders correctly', () => {
    const store = mockStore({ favorites: [] })

    const component = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterDetails match={{params:{ id: 1 }}} />
        </Provider>
      </MemoryRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
