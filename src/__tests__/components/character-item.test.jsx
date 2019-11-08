import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { mockCharacter } from '../../__mocks__/data-mock'
import CharacterItem from '../../components/character-item'

describe('Character item', () => {
  const character = mockCharacter

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <CharacterItem character={character} />
      </MemoryRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('should contain the character name', () => {
    const component = mount(
      <MemoryRouter>
        <CharacterItem character={character} />
      </MemoryRouter>
    )

    expect(component.find('.card-content .media .media-content p.title').text()).toEqual('Luke Skywalker')
  })
})
