import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './search_bar.component'
import VideoDetail from './video_detail.component'
import VideoList from './video_list.component'

const API_KEY = 'AIzaSyCAfV5I_qDFWmB-g0mL40MTvki0G231Lww'



class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        })
    }



    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))