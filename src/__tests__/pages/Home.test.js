import React from 'react'
import mockAxios from 'axios'
import { mockFilms } from '../../__mocks__/data-mock'
import { MemoryRouter } from 'react-router-dom'
import { render, mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Home from '../../pages/Home'
import Layout from '../../app/Layout'
import { theForce } from '../../lib'

describe('Home page', () => {
  afterEach(() => {
    mockAxios.get.mockClear()
  })

  mockAxios.get.mockResolvedValue({
    data: {
      results: mockFilms
    }
  })

  it('renders correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  }),

  describe('when rendered', () => {
    it('should fetch a list of films', () => {
      const getSpy = jest.spyOn(theForce, 'getFilms')
      const homeInstance = mount(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      )

      expect(getSpy).toBeCalled()
    }),

    it('shows a list of films', () => {
      const homeInstance = mount(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      )

      expect(homeInstance.find('.hero p.title').text()).toEqual('The ultimate guide')
      // expect(homeInstance.find('.film')).to.have.lengthOf(2);

      // expect(wrapper.find('.foo-bar')).to.have.lengthOf(3);

    })
  })
})
