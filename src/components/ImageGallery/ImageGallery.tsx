import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from '../types';
import styles from './ImageGallery.module.css';

const ImageGallery: React.FC<ImageGalleryProps> = ({
  gallery,
  openModal,
  updateModalStateData,
}) => {
  return (
    <ul className={styles.itemsContainer}>
      {gallery.map(({ id, alt_description, urls }) => (
        <li className={styles.cardItem} key={id}>
          <ImageCard
            urls={urls}
            alt_description={alt_description}
            updateModalStateData={updateModalStateData}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
