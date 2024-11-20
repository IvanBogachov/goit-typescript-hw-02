import Modal from 'react-modal';
import { ImageModalProps } from '../types';

import styles from './ImageModal.module.css';

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
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
