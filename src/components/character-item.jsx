import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import characterIcon from '../assets/character-icon.png'

const StyledCard = styled.div`
  cursor: pointer;
`

class CharacterItem extends React.Component {

  getCharacterId (url) {
    const idPattern = /people\/(\d+)\//g
    const match = idPattern.exec(url)
    return match[1]
  }

  toCharacterDetails (characterUrl) {
    const { push } = this.props.history

    push(
      `/characters/${this.getCharacterId(characterUrl)}`
    )
  }

  render () {
    const { character } = this.props
    return <StyledCard className="card character-item" onClick={() => this.toCharacterDetails(character.url)}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-24x24">
              <img src={characterIcon} alt="Character" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-6">{character.name}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  }
}

CharacterItem.defaultProps = {
  character: {}
}

CharacterItem.propTypes = {
  character: PropTypes.object
}

export default withRouter(CharacterItem)
