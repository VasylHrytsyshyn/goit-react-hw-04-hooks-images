import { useEffect } from 'react';
import styles from './Modal.module.css'
//рефакторинг проведено
const Modal = ({ imageURL, alt, onClose }) => {
  
  
  
  const handeleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
   
  useEffect(() => {
    const handeleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handeleKeyDown);
    return () => { window.removeEventListener('keydown', handeleKeyDown); }
  }, [onClose]);



  return (
    <div className={styles.Overlay} onClick={handeleBackdropClick}>
      <div className={styles.Modal}>
        <img src={imageURL} alt={alt} />
      </div>
    </div>
  )

};

export default Modal;
