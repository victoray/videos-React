import React from 'react';

class VideoDetail extends React.Component {

    render() {
        const selectedVideo = this.props.selectedVideo;
        if (!selectedVideo) {
            return (<div className={"ten wide column"}>
                <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Loading</div>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>)
        }
        return (<div className={"eleven wide column"}>
            <div className="ui embed">
                <iframe width="560" height="315"
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className={"ui container"}>
                <h1>{selectedVideo.snippet.title}</h1>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>)
    }
}

export default VideoDetail;