import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFavorites } from '../actions'
import CharactersList from './characters-list'
import FavoriteIcon from './favorite-icon'
import FavNotifications from './fav-notifications'
import { theForce } from '../lib'

class Film extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      film: {},
      characters: []
    }
  }

  componentDidMount () {
    this.props.fetchFavorites()

    theForce.getFilm(this.props.params.id).then(film => {
      if (film) {
        this.setState({
          loading: false,
          film
        })

        film.characters.forEach(characterUrl => {
          theForce.getCharacter(this.getCharacterId(characterUrl))
            .then(character => {
              if (character) {
                this.setState({
                  characters: [...this.state.characters, character]
                })
              }
            })
        })
      }
    })
  }

  getCharacterId (url) {
    const idPattern = /people\/(\d+)\//g
    const match = idPattern.exec(url)
    return match[1]
  }

  isFavorite (favorites, item) {
    if (item) {
      if (favorites && favorites.length > 0) {
        return favorites.filter(fav => fav.url === item.url).length > 0
      }
    }
    return false
  }

  render () {
    const { loading, film } = this.state
    const { favorites } = this.props

    const favorite = this.isFavorite(favorites, film)

    return !loading && <div className="container">
      <div className="columns">
        <div className="column">
          <div className="content">
            <p className="subtitle is-5">{`Episode#${film.episode_id}`}</p>
            <p className="title is-3">{film.title}</p>

            <div className="content">
              <div className="columns is-mobile">
                <div className="column">
                  <div className="tags has-addons">
                    <span className="tag icon is-dark">
                      <i className="fas fa-calendar-alt" title="Release date"></i>
                    </span>
                    <span className="tag">{film.release_date}</span>
                  </div>
                </div>
                <div className="column is-2">
                  <div className="buttons is-right">
                    <FavoriteIcon favorite={favorite} item={film} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <article className="message">
              <div className="message-header">
                <p>Opening crawl</p>
              </div>
              <div className="message-body">
                {film.opening_crawl}
              </div>
            </article>
          </div>
        </div>
        <div className="column">
          <CharactersList characters={this.state.characters} />
        </div>
      </div>

      <FavNotifications type="film" />
    </div>
  }
}

const mapStateToProps = (state) => {
  const { favorites } = state
  return {
    favorites: favorites.filter(fav => fav.episode_id !== undefined) || []
  }
}

Film.defaultProps = {
  film: {}
}

Film.propTypes = {
  film: PropTypes.object
}

export default withRouter(connect(mapStateToProps, { fetchFavorites })(Film))
