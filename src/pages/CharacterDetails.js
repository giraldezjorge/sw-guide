import React from 'react'
import Character from '../components/character'

class CharacterDetails extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <Character params={this.props.match.params} />
        </div>
      </div>
    )
  }
}

export default CharacterDetails
