import React from 'react'
import { connect } from 'react-redux'
import { fetchFavorites } from '../actions'
import FilmsGrid from '../components/films-grid'
import CharactersGrid from '../components/characters-list'

class Favorites extends React.Component {
  componentDidMount () {
    this.props.fetchFavorites()
  }

  render () {
    const { films, characters } = this.props
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-5">
            <div className="column">
              <FilmsGrid films={films} title={'Favorite films'} emptyMsg={'There are no favorite films'} twoColumns />
            </div>
            <div className="column">
              <CharactersGrid characters={characters} title={'Favorite characters'} emptyMsg={'There are no favorite characters'} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  const { favorites } = state
  return {
    films: favorites.filter(fav => fav.episode_id !== undefined) || [],
    characters: favorites.filter(fav => fav.gender !== undefined) || []
  }
}

export default connect(
  mapStateToProps,
  { fetchFavorites }
)(Favorites)
