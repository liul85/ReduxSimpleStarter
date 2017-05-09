import React from 'react'
import ReactDom from 'react-dom'

import SearchBar from './components/search-bar';

const YOUTUBE_API_KEY = 'AIzaSyDKFPa8BJUcOsLHihCBCdfoXGJlObRIfU8'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    )
}

ReactDom.render(<App />, document.querySelector('.container'))