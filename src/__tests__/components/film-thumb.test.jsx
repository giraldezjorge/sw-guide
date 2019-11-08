import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { mockFilm } from '../../__mocks__/data-mock'
import FilmThumb from '../../components/film-thumb'

describe('Film thumb', () => {
  const film = mockFilm

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <FilmThumb film={film} />
      </MemoryRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  it('should contain the film episode', () => {
    const component = mount(
      <MemoryRouter>
        <FilmThumb film={film} />
      </MemoryRouter>
    )

    expect(component.find('.card-content .media .media-content p.subtitle').text()).toEqual('Episode#4')
  })
})
