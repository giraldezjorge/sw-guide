import React from 'react'
import { render, mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { mockFilms } from '../../__mocks__/data-mock'
import FilmsGrid from '../../components/films-grid'

describe('The films grid', () => {
  const films = mockFilms

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <FilmsGrid films={films} />
      </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('shows a list of films', () => {
    const component = shallow(<FilmsGrid films={films} />)

    expect(component.find('.film').length).toEqual(2)
  }),

  it('shows a message if there are no films', () => {
    const films = []
    const component = shallow(<FilmsGrid films={films} />)

    expect(component.find('p.empty-msg').text()).toEqual('Ups, these are not the films you are looking for!')
  })
})
