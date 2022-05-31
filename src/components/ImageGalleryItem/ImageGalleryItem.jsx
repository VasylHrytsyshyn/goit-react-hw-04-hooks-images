import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = (props) => {
    const { largeImageURL, webformatURL, handleClickImg, tags } = props;
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => handleClickImg(largeImageURL, tags)}
    >
      <img src={webformatURL} alt={tags} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    // handleClickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;