import React from 'react'
import ReactDom from 'react-dom'

// create a new component which produce html
const App = () => { return <div> Hi </div> }

// class App extends React


// take this components generated and put it in dom

ReactDom.render(<App />, document.querySelector('.container'))