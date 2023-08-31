import { ImgItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const { pictures } = this.props;
    return (
      <ul>
        {pictures.map(picture => {
          return (
            <li key={picture.id} onClick={this.openModal}>
              <ImgItem picture={picture} />
            </li>
          );
        })}
      </ul>
    );
  }
}
