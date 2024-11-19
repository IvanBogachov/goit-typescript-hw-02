import styles from "./ImageCard.module.css";

const ImageCard = ({
  alt_description,
  urls,
  updateModalStateData,
  openModal,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <img
        className={styles.cardImage}
        src={urls.small}
        alt={alt_description}
        onClick={() => {
          updateModalStateData(urls.regular, alt_description);
          openModal();
        }}
      />
      <p className={styles.cardDescription}>{alt_description}</p>
    </div>
  );
};

export default ImageCard;
