import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {


    render() {
        const {thumbnails, title, channelTitle, publishedAt, description} = this.props.vid;

        return (
            <div onClick={() => this.props.onVideoSelect(this.props.video)} className="video-item item">
                <img className={"ui image"} src={thumbnails.medium.url}/>
                <div className="content">
                    <div className="header">{title}</div>
                </div>
            </div>)
    }

}

export default VideoItem;