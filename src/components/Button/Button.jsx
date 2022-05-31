import styles from './Button.module.css';

const Button = props => {
    return (
        <button
            className={styles.Button}
            type="button"
            onClick={() => props.onClickLoadMore()}
        >
            Load more
        </button>)
};

export default Button;