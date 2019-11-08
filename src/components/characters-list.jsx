import React from 'react'
import PropTypes from 'prop-types'
import CharacterItem from './character-item'

const CharactersList = (props) => {
  const { characters, title, emptyMsg } = props
  return <div className="container">
    <p className="title is-3">{title}</p>
    <div className="columns is-multiline">
    {characters.map((character, index) => {
      return <div key={index} className="character column is-half">
        <CharacterItem character={character} />
      </div>
    })}
    </div>
    {characters.length === 0 && <div className="column"><p className="empty-msg">{emptyMsg}</p></div>}
  </div>
}

CharactersList.defaultProps = {
  characters: [],
  title: 'Characters',
  emptyMsg: 'Ups, these are not characters in the film. WTF!'
}

CharactersList.propTypes = {
  characters: PropTypes.array,
  title: PropTypes.string,
  emptyMsg: PropTypes.string
}

export default CharactersList
