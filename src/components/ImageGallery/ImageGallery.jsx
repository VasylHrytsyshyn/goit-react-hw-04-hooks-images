import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ pictures, handleClickImg }) => {
    return (
        <ul className={styles.ImageGallery}>
            {pictures.map((picture) => (
                <ImageGalleryItem
                    key={picture.id.toString()}
                    largeImageURL={picture.largeImageURL}
                    webformatURL={picture.webformatURL}
                    tags={picture.tags}
                    handleClickImg={handleClickImg}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
    // handleClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;