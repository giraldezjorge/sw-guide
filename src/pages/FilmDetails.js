import React from 'react'
import Film from '../components/film'

class FilmDetails extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <Film params={this.props.match.params} />
        </div>
      </div>
    )
  }
}

export default FilmDetails
