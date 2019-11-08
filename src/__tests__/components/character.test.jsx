import React from 'react'
import mockAxios from 'axios'
import { mockCharacter } from '../../__mocks__/data-mock'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Character from '../../components/character'
import { theForce } from '../../lib'

const mockStore = configureStore([])

describe('The character component', () => {
  const character = mockCharacter

  const store = mockStore({ favorites: [] })

  mockAxios.get.mockResolvedValueOnce({
    data: character
  })

  afterEach(() => {
    mockAxios.get.mockClear()
  })

  it('should fetch character data', () => {
    const getSpy = jest.spyOn(theForce, 'getCharacter')
    const characterInstance = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Character character={character} params={{ id: 1 }} />
        </Provider>
      </MemoryRouter>
    )

    expect(getSpy).toBeCalled()
  }),

  it('shows the character info', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Character character={character} params={{ id: 1 }} />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
