import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const YOUTUBE_API_KEY = 'AIzaSyDKFPa8BJUcOsLHihCBCdfoXGJlObRIfU8'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {videos: []}

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos})
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
      )
  }
}

ReactDom.render(<App />, document.querySelector('.container'))