import React, { Fragment } from 'react'
import styled from 'styled-components'
import FilmsGrid from '../components/films-grid'
import bkgImg from '../assets/background.png'
import logo from '../assets/logo.png'

import { theForce } from '../lib'

const StyledHeaderSection = styled.section`
  background-image: url("${bkgImg}");
`

const StyledLogo = styled.img`
  width: 80% !important;
  margin: auto;
`

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      films: [],
      loading: true
    }
  }

  componentDidMount () {
    theForce.getFilms().then(films => {
      if (films) {
        this.setState({
          films,
          loading: false
        })
      }
    })
  }

  render () {
    const { films, loading } = this.state
    return <Fragment>
      <StyledHeaderSection className="hero is-link is-fullheight-with-navbar home">
        <div className="hero-body is-relative">
          <div className="container">
            <figure className="image">
              <StyledLogo src={logo} />
            </figure>
            <p className="title has-text-centered">
              The ultimate guide
            </p>
          </div>
        </div>
      </StyledHeaderSection>

      <section className="section">
        {!loading && <FilmsGrid films={films} />}
        {loading && <progress className="progress is-medium is-dark" max="100"></progress>}
      </section>
    </Fragment>
  }
}

export default Home
