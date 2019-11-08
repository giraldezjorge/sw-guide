import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from '../actions'

const FavoriteIcon = (props) => {

  const { favorite, item, dispatch } = props
  let clss = ''
  let title = 'Remove from favorites'
  if (!favorite) {
    clss = 'is-outlined'
    title = 'Add to favorites'
  }

  const toggleFav = (item, favorite) => {
    let el
    if (favorite) {
      dispatch(removeFavorite(item.url))
      el = document.getElementById('remove-fav')
      document.getElementById('add-fav').style.display = 'none'
    } else {
      dispatch(addFavorite(item))
      el = document.getElementById('add-fav')
      document.getElementById('remove-fav').style.display = 'none'
    }
    el.style.display = 'block'
    setTimeout(() => {el.style.display = 'none'}, 2000)
  }

  return (
    // eslint-disable-next-line
    <a role="button" title={title}
      className={`button is-small is-danger ${clss}`}
      onClick={e => toggleFav(item, favorite)}
    >
      <span className="icon is-small">
        <i className="fas fa-heart"></i>
      </span>
    </a>
  )
}

FavoriteIcon.defaultProps = {
  favorite: false
}

FavoriteIcon.propTypes = {
  item: PropTypes.object.isRequired,
  favorite: PropTypes.bool
}

export default connect()(FavoriteIcon)
