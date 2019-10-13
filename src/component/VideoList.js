import React from 'react';
import VideoItem from "./VideoItem";


class VideoList extends React.Component {

    render() {
        const videos = this.props.videos.map(vid => {
            return <VideoItem onVideoSelect={this.props.onVideoSelect} key={vid.etag} vid={vid.snippet} video={vid}/>
        });
        return (<div className={"five wide column"}>
            <div className={"ui relaxed divided list"}>
                {videos}
            </div>
        </div>)
    }
}

export default VideoList;