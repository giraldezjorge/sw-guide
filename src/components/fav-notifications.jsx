import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledNotification = styled.div`
  position: fixed;
  bottom: 10px;
  right: 24px;
  margin auto;
  display: none;
`

const FavNotification = (props) => {
  const { type } = props
  return (
      <div className="columns">
        <div className="column">
          <StyledNotification id="add-fav" className="notification is-primary is-size-7-mobile">
            The {type} was added to favorites successfuly
          </StyledNotification>
          <StyledNotification id="remove-fav" className="notification is-primary is-size-7-mobile">
            The {type} was removed to favorites successfuly
          </StyledNotification>
        </div>
      </div>
  )
}

FavNotification.propTypes = {
  type: PropTypes.string.isRequired
}

export default FavNotification
