import { useState } from "react";
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        const { value } = e.currentTarget;
        setInputValue(value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!inputValue.trim()) {
            return
        }
        onSubmit(inputValue.trim());
        setInputValue('')
    };


    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}></span>
                </button>

                <input
                    className={styles.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleInputChange}
                    value={inputValue}
                />
            </form>
        </header>);
    
};

export default Searchbar;