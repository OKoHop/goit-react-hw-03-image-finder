import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const Modal = ({ picture, isOpen, isClose, style }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={isClose} style={style}>
      <img src={picture.largeImageURL} alt={picture.id} />
    </ReactModal>
  );
};
