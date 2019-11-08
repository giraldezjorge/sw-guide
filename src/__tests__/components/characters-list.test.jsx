import React from 'react'
import { render, mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { mockCharacters } from '../../__mocks__/data-mock'
import CharacterList from '../../components/characters-list'

describe('The characters list', () => {
  const characters = mockCharacters

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <CharacterList characters={characters} />
      </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('shows a list of characters', () => {
    const component = shallow(<CharacterList characters={characters} />)

    expect(component.find('.character').length).toEqual(3)
  }),

  it('shows a message if there are no characters', () => {
    const characters = []
    const component = shallow(<CharacterList characters={characters} />)

    expect(component.find('p.empty-msg').text()).toEqual('Ups, these are not characters in the film. WTF!')
  })
})
