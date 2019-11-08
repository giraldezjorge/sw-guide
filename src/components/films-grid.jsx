import React from 'react'
import PropTypes from 'prop-types'
import FilmThumb from './film-thumb'

const FilmsGrid = (props) => {
  const { films, title, emptyMsg } = props
  return <div className="container">
    {title && <p className="title is-3">{title}</p>}
    <div className="columns is-multiline">
      {films.map((film, index) => {
        return <div key={index} className="film column is-one-quarter">
          <FilmThumb film={film} />
        </div>
      })}
      {films.length === 0 && <div className="column"><p className="empty-msg">{emptyMsg}</p></div>}
    </div>
  </div>
}

FilmsGrid.defaultProps = {
  films: [],
  emptyMsg: 'Ups, these are not the films you are looking for!'
}

FilmsGrid.propTypes = {
  films: PropTypes.array,
  title: PropTypes.string,
  emptyMsg: PropTypes.string
}

export default FilmsGrid
