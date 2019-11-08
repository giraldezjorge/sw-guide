import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Header from '../../../app/layout/Header'

describe('Header component', () => {

  it('renders correctly', () => {
    const component = shallow(
      <Header />
    )

    expect(component.find('.navbar-item').length).toBe(3)
  })
})
