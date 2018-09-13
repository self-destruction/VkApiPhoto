import React, { Component } from 'react';
import PhotoItem from './PhotoItem';
import '../style.css';

// const style = {
//     width: 400,
//     height: 300,
//     backgroundSize: 'cover'
// };
// const config = {
//     viewedImageSize: 0.8,
//     backgroundOpacity: 0.6
// };

class AlbumGroup extends Component {
    render() {
        let photosList = this.props.albumPhotos.map(
            ({ id, photo_130, photo_807, likes }) => {
                let comments = this.props.commentsData.filter(
                    comment => comment.pid === id
                );
                let commentsArr = comments.map(c => <div key={c.pid}>{c.text}</div>);
                return (
                    <PhotoItem
                        key={id}
                        likesCount={likes.count}
                        commentsArr={commentsArr}
                        minPhoto={photo_130}
                        maxPhoto={photo_807}
                    />
                );
            }
        );
        return (
            <div className="album-group">
                <h2>{this.props.title}</h2>
                <div className="album-group__container">{photosList}</div>
            </div>
        );
    }
}

export default AlbumGroup;