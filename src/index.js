import _ from 'lodash'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const YOUTUBE_API_KEY = 'AIzaSyDKFPa8BJUcOsLHihCBCdfoXGJlObRIfU8'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        }
        )
    })
  }

  render() {
    const search = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={search}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
          videos={this.state.videos} />
      </div>
      )
  }
}

ReactDom.render(<App />, document.querySelector('.container'))