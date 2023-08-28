import { ImgItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
  };

  modalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { pictures } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <ul>
          {pictures.map(picture => {
            return (
              <li key={picture.id} onClick={this.modalOpen}>
                {
                  <ImgItem
                    picture={picture}
                    stateModal={isModalOpen}
                    isClose={this.closeModal}
                  />
                }
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
