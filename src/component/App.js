import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../api/youtube'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {videos: [], selectedVideo: ''};
    div;

    onSubmit = async (term) => {
        console.log(term);
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: 'snippet',
                key: 'AIzaSyDh_hA7QRjFk6_ByFtrIxHenHBmM-s7zpo',
            }

        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    componentDidMount() {
        this.onSubmit("modern warfare");
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: "15px"}}>
                <SearchBar onSubmit={this.onSubmit}/>
                <div className={"ui grid"} style={{marginTop: "10px"}}>
                    <VideoDetail selectedVideo={this.state.selectedVideo}/>
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
            </div>
        )

    }
}

export default App;
