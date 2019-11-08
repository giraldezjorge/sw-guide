import React from 'react'
import { mount } from 'enzyme'
import mockAxios from 'axios'
import { mockFilms } from '../__mocks__/data-mock'
import App from '../App'

describe('The app', () => {
  mockAxios.get.mockResolvedValueOnce({
    data: {
      results: mockFilms
    }
  })

  it('renders without crashing', () => {
    const app = mount(<App />)
    expect(app.find('.hero p.title').text()).toEqual('The ultimate guide')
  })
})
