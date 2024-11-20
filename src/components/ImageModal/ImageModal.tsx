import Modal from 'react-modal';

import styles from './ImageModal.module.css';

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

const ImageModal: React.FC<Props> = ({ modalIsOpen, closeModal, src, alt }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      appElement={document.getElementById('root') as HTMLElement}
    >
      <button onClick={closeModal} className={styles.modalBtn}>
        ❌
      </button>
      <div>
        <img className={styles.modalImg} src={src} alt={alt} />
        <p className={styles.modalText}>{alt}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
