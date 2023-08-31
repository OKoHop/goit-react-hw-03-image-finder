import ReactModal from 'react-modal';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

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
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { picture } = this.props;
    return (
      <>
        <img
          src={picture.webformatURL}
          alt={picture.tags}
          onClick={this.openModal}
        />
        <Modal
          picture={picture}
          isOpen={this.state.isOpen}
          closeModal={this.closeModal}
          style={customStyles}
        />
      </>
    );
  }
}
