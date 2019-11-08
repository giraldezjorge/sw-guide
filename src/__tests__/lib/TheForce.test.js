import mockAxios from 'axios'
import { theForce } from '../../lib/index'
import { mockFilms, mockFilm, mockCharacter } from '../../__mocks__/data-mock'

const API_BASE_URL = 'https://swapi.co/api/'

describe('TheForce', () => {
  afterEach(() => {
    mockAxios.get.mockClear()
  })

  it('fetches films data', async () => {
    // setup
    mockAxios.get.mockResolvedValueOnce({
      data: {
        results: mockFilms
      }
    })

    // work
    const films = await theForce.getFilms()

    // expect
    expect(films.length).toEqual(2);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(API_BASE_URL + 'films')
  }),

  it('fetches film details data', async () => {
    // setup
    mockAxios.get.mockResolvedValueOnce({
      data: mockFilm
    })

    // work
    const id = 1
    const film = await theForce.getFilm(id)

    // expect
    expect(film.title).toEqual('A New Hope');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(API_BASE_URL + `films/${id}`)
  }),

  it('fetches character details data', async () => {
    // setup
    mockAxios.get.mockResolvedValueOnce({
      data: mockCharacter
    })

    // work
    const id = 1
    const character = await theForce.getCharacter(id)

    // expect
    expect(character.name).toEqual('Luke Skywalker');
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(API_BASE_URL + `people/${id}`)
  }),

  it('gets an error fetching data', async () => {
    const spyOn = jest.spyOn(console, 'log')
    mockAxios.get.mockRejectedValueOnce(new Error('some error'))

    await theForce.getFilms()
    expect(spyOn).toBeCalledWith(new Error('some error'))
    spyOn.mockRestore()
  })
})
