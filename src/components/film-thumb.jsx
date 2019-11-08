import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { thumbsProvider } from '../lib'

const StyledCard = styled.div`
  cursor: pointer;
`

class FilmThumb extends React.Component {

  toFilmDetails () {
    const { film } = this.props

    const idPattern = /films\/(\d+)\//g
    const match = idPattern.exec(film.url)
    const id = match[1]

    const { push } = this.props.history

    push(
      `/films/${id}`
    )
  }

  render() {
    const { film } = this.props
    const thumb = thumbsProvider.getThumb(film.episode_id)

    return <StyledCard className="card" onClick={() => this.toFilmDetails()}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={thumb} alt="Thumbnail" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-6">{`Episode#${film.episode_id}`}</p>
            <p className="title is-4">{film.title}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  }
}

FilmThumb.defaultProps = {
  film: {}
}

FilmThumb.propTypes = {
  film: PropTypes.object
}

export default withRouter(FilmThumb)
