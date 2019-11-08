import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFavorites } from '../actions'
import FavoriteIcon from './favorite-icon'
import FavNotifications from './fav-notifications'
import { theForce } from '../lib'

class Character extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      character: {}
    }
  }

  componentDidMount () {
    this.props.fetchFavorites()

    theForce.getCharacter(this.props.params.id).then(character => {
      if (character) {
        this.setState({
          loading: false,
          character
        })
      }
    })
  }

  isFavorite (item) {
    const { favorites } = this.props

    if (item) {
      if (favorites && favorites.length > 0) {
        return favorites.filter(fav => fav.url === item.url).length > 0
      }
    }
    return false
  }

  render () {
    const { loading, character } = this.state

    const favorite = this.isFavorite(character)

    return !loading && <div className="container character-details">
      <div className="columns">
        <div className="column">
          <div className="content">
            <p className="title is-4">{character.name}</p>

            <div className="content">
              <div className="columns is-mobile">
                <div className="column">
                  <div className="tags has-addons">
                    <span className="tag icon is-dark">
                      <i className="fas fa-calendar-alt" title="Birth year"></i>
                    </span>
                    <span className="tag">{character.birth_year}</span>
                  </div>
                </div>
                <div className="column is-2">
                  <div className="buttons is-right">
                    <FavoriteIcon favorite={favorite} item={character} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <article className="message">
              <div className="message-header">
                <p>Features</p>
              </div>
              <div className="message-body">
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Skin color</th>
                        <th>Eye color</th>
                        <th>Hair color</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{character.gender}</td>
                        <td>{character.height}</td>
                        <td>{character.mass}</td>
                        <td>{character.skin_color}</td>
                        <td>{character.eye_color}</td>
                        <td>{character.hair_color}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <FavNotifications type="character" />
    </div>
  }
}

const mapStateToProps = (state) => {
  const { favorites } = state
  return {
    favorites: favorites.filter(fav => fav.gender !== undefined) || []
  }
}

Character.defaultProps = {
  character: {}
}

Character.propTypes = {
  character: PropTypes.object
}

export default connect(mapStateToProps, { fetchFavorites })(Character)
