import ReactModal from 'react-modal';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export class ImgItem extends Component {
  render() {
    const { picture, stateModal, isClose } = this.props;
    return (
      <>
        <img src={picture.webformatURL} alt={picture.tags} />
        <ReactModal
          isOpen={stateModal}
          onRequestClose={isClose}
          style={customStyles}
        >
          <img src={picture.largeImageURL} alt={picture.id} />
        </ReactModal>
      </>
    );
  }
}
