import { Component } from 'react';
import styles from './Modal.module.css'

 class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handeleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handeleKeyDown);
  }

  handeleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handeleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const {imageURL, alt } = this.props;
    return (
        <div className={styles.Overlay} onClick = {this.handeleBackdropClick}>
            <div className={styles.Modal}>
                <img src={imageURL} alt={alt} />
            </div>
        </div>
    )
  }
}

export default Modal;
