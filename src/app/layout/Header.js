import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import banner from '../../assets/banner.png'

const StyledLink = styled(Link)`
  cursor: pointer;
`

class Header extends React.Component {

  componentDidMount () {

    // Code harcoded from Bulma framework
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target
            const $target = document.getElementById(target)

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active')
            $target.classList.toggle('is-active')

          })
        })
      }
    })

    // dummy code to hide navbar-menu when navbar-burger is active
    document.addEventListener('click', (event) => {
      // If the clicked element doesn't have the right selector, bail
      if (event.target.matches('.navbar-burger') || event.target.matches('.burger-icon')) {
        return
      }

      const el = document.querySelectorAll('.navbar-burger')[0]

      // Get the target from the "data-target" attribute
      const target = el.dataset.target
      const $target = document.getElementById(target)

      // Remove the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.remove('is-active')
      $target.classList.remove('is-active')
    })
  }

  render() {
    return (
      <nav className="navbar is-fixed-top is-white" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <StyledLink to="/" className="navbar-item">
              <img src={banner} alt="Home" />
            </StyledLink>

            {// eslint-disable-next-line
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span className="burger-icon" aria-hidden="false"></span>
              <span className="burger-icon" aria-hidden="true"></span>
              <span className="burger-icon" aria-hidden="true"></span>
            </a>
            }
          </div>

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <StyledLink to="/" className="navbar-item">
                Home
              </StyledLink>
              <StyledLink to="/favorites" className="navbar-item">
                Favorites
              </StyledLink>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
