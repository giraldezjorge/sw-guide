import axios from 'axios'
import { API_URL } from '../constants/api'

const TheForce = function () {
  if (!(this instanceof TheForce)) return new TheForce()
}

TheForce.prototype.getFilms = function () {
  return axios.get(API_URL + 'films')
    .then((films) => films.data.results)
    .then((films) => films.sort((a, b) => {return new Date(a.release_date) - new Date(b.release_date)}))
    .catch((error) => console.log(error))
}

TheForce.prototype.getFilm = function (id) {
  return axios.get(API_URL + 'films/' + id)
    .then((film) => film.data)
    .catch((error) => console.log(error))
}

TheForce.prototype.getCharacter = function (id) {
  return axios.get(API_URL + 'people/' + id)
    .then((character) => character.data)
    .catch((error) => console.log(error))
}

export default TheForce
