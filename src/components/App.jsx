import { Component } from "react";
import { ThreeDots } from 'react-loader-spinner';

import {getPictures} from '../services/api'
import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal'

class App extends Component {
  state = {
    query: '',
    page: 1,
    pictures: [],
    loader: false,
    // loadMore: false,
    loadMore: true,
    showModal: false,
    largeImageURL: '',
    tags: '',
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page, pictures } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ loader: true });
      getPictures(query, page).then(r => {
        // this.setState({ loader: true });
        this.setState(prevState => ({ pictures: [...prevState.pictures, ...r.hits], loader: false}));

        if (r.total === 0) {
          return console.log('Нічого немає');// додати нотифікашку
        }
        //--------------??????
        if (r.total > 12 && (r.total - 12) > pictures.length ) {
          this.setState({loadMore: true})
        }  else { this.setState({ loadMore: false }) };

      })
    }

    // this.setState({ loader: false });
  };

  handlFormSubmit = value => {
    this.setState({ query: value, page: 1, pictures: []});
  };

  onClickLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleClickImg = (largeImageURL, tags) => {
    this.setState({
      largeImageURL,
      tags,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { loader, loadMore, showModal, largeImageURL, tags } = this.state;
    return (
    <>
      <Searchbar onSubmit={this.handlFormSubmit} />
      
      
        
      {this.state.pictures.length > 0 && <ImageGallery pictures={this.state.pictures} handleClickImg={this.handleClickImg} />}

      {loader && <ThreeDots color="#00BFFF" height={80} width={80} />}  

      {loadMore && <Button onClickLoadMore={this.onClickLoadMore} />}

      {showModal && <Modal imageURL={largeImageURL} alt={tags} onClose={ this.closeModal }/>}
        
    </>) 
  };
};

export default App;