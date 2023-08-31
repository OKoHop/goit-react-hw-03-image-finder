import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const Modal = ({ picture, isOpen, closeModal, style }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={style}
      overlayClassName="Overlay"
    >
      <img src={picture.largeImageURL} alt={picture.id} />
    </ReactModal>
  );
};
