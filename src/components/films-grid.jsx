import React from 'react'
import PropTypes from 'prop-types'
import FilmThumb from './film-thumb'

const FilmsGrid = (props) => {
  const { films, title, emptyMsg, twoColumns } = props
  const filmColumnSizeClss = twoColumns ? 'is-half' : 'is-one-quarter'
  return <div className="container">
    {title && <p className="title is-3">{title}</p>}
    <div className="columns is-multiline">
      {films.map((film, index) => {
        return <div key={index} className={`film column ${filmColumnSizeClss}`}>
          <FilmThumb film={film} />
        </div>
      })}
      {films.length === 0 && <div className="column"><p className="empty-msg">{emptyMsg}</p></div>}
    </div>
  </div>
}

FilmsGrid.defaultProps = {
  films: [],
  emptyMsg: 'Ups, these are not the films you are looking for!',
  twoColumns: false
}

FilmsGrid.propTypes = {
  films: PropTypes.array,
  title: PropTypes.string,
  emptyMsg: PropTypes.string,
  twoColumns: PropTypes.bool
}

export default FilmsGrid
