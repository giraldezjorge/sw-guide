# SW-GUIDE
![](https://github.com/giraldezjorge/sw-guide/workflows/build/badge.svg?branch=master)

The ultimate Star Wars guide :D

## Introduction

This project is a React application that use the [SWAPI](https://swapi.co/) API as a info provider. It is a motivation to practice creating a React app with a small test battery.

The project was created using the last React version (16.11.0 at the moment) by `create-react-app` tool.

It use [Bulma](https://bulma.io/) as a UI framework. There were another frameworks in consideration like [Material UI](https://material-ui.com/)  or [Semantic UI](https://semantic-ui.com/), but Bulma was the chosen because the easy to work with it.

## Dependencies

The project has the following dependencies:
* Bulma
* Styled Components, to stylize some componets easily
* Axios as a HTTP client
* Redux, to use a global storage for the app state

```
npm i --save bulma bulma-extensions node-sass
npm i --save styled-components
npm i --save axios
npm i --save redux react-redux redux-thunk
```
### Testing
Used Jest, React test renderer and Enzyme to testing. Created snapshots and unit tests.
```
npm i --save react-test-renderer
npm i --save enzyme enzyme-adapter-react-16
npm i --save redux-mock-store
```

## Global state
Due to the manage of favorites (used in several components and pages), a global state to save the favorite items was created. It is used in several points of the application to retrieve, add or remove favorites.

## Storage
For the storage of the favorite items the app use the `localStorage` for the browser. This way was chosen because only a small amount of information was to be stored. If the information increase, a good approach could be the use os SQLite or PostgreSQL maybe.

## Installation
To prepare the app execute `yarn install`. It will install the required dependencies.

## Launch the app

To launch the app, execute `yarn start`.

## Testing

For testing, execute `yarn test`. You can see the test coverage report using `npm test -- --coverage`.

## Deploy

To deploy to a production environment, you can create a bundle using `npm run build`.

## Future improvements
There are a lot of things to improve, but this is a side project to practice and learn about React and testing at all. Some things to improve are:
* Increase the test coverage: I know that the current test battery are very poor. The idea is to learn more and more about front testing (in React or in another framework) and going to add new tests and new ways of testing. I am very noob in this :P
* Add i18n (it was not the purpose of this app)

