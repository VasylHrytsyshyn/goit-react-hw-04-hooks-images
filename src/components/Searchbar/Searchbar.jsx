import { Component } from "react";
import styles from './Searchbar.module.css';

class Searchbar extends Component {

    state = {
        inputValue: '',
    };

    handleInputChange = e => {
        const { value } = e.currentTarget;
        this.setState({ inputValue: value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.inputValue.trim()) {
            return
        }
        this.props.onSubmit(this.state.inputValue.trim());
        this.setState({ inputValue: '' });
    };

    render() {
        return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}></span>
                </button>

                <input
                    className={styles.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                />
            </form>
        </header>);
    };
};

export default Searchbar;