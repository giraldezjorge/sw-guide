import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import FilmDetails from '../../pages/FilmDetails'
import Favorites from '../../pages/Favorites'
import CharacterDetails from '../../pages/CharacterDetails'

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/favorites"
      component={Favorites}
    />
    <Route
      path="/films/:id/"
      component={FilmDetails}
    />
    <Route
      path="/characters/:id/"
      component={CharacterDetails}
    />
  </Switch>
)
export default Router
