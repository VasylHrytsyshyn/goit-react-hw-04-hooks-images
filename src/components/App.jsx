import { useState, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner';

import { getPictures } from '../services/api';
import Searchbar from "./Searchbar";
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal'

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (query !== '') {
      setLoader(true);
    
      getPictures(query, page).then(r => {
        setPictures(pictures => [...pictures, ...r.hits]);
        setTotal(r.total)
        setLoader(false);
      })
    }
    
  }, [page, query]);

  const handlFormSubmit = value => {
    setQuery(value);
    setPage(1);
    setPictures([]);
  };

  const onClickLoadMore = () => {
    setPage(page => page + 1)
  };

  const handleClickImg = (largeImageURL, tags) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Searchbar onSubmit={handlFormSubmit} />
             
      {pictures.length > 0 && <ImageGallery pictures={pictures} handleClickImg={handleClickImg} />}

      {loader && <ThreeDots color="#00BFFF" height={80} width={80} />}

      { (total > 12 && (total - 12) > pictures.length) && <Button onClickLoadMore={onClickLoadMore} />}

      {showModal && <Modal imageURL={largeImageURL} alt={tags} onClose={closeModal} />}
        
    </>)
};

export default App;