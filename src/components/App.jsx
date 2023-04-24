import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyle';
import { Box } from './utils/Box';
import { SearchBar } from './Searchbar/Searchbar';
import { GalleryList } from './GalleryList/GalleryList';
import { toast } from 'react-toastify';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader';
import { fetchData } from 'services/api';

export class App extends Component  {
  initialValues = {
    searchQuery: '',
    page: 1,
    isLoading: false,
    imagesData: [],
    per_page: 12,
    totalHits: null,
  };

  state = this.initialValues;

  handleFormSubmit = ({ searchQuery }) => {
    if (searchQuery.trim() === '') {
      toast.warning('Enter search query');
      return;
    }
    if (searchQuery === this.state.searchQuery && this.state.page === 1) {
      return;
    }
    this.setState({
      ...this.initialValues,
      searchQuery,
    })
  };

  handleLoadMore = () => {
    this.setState(({ page }) => {
      return { page: (page += 1) };
    });
  };

  render() {
    const { imagesData, isLoading, per_page, page, totalHits } = this.state; 
    const loadMoreBtnStatus =
      !imagesData?.length && per_page * page < totalHits; 

    return (
      <Box m="0 auto">
        <SearchBar onSubmit={this.handleFormSubmit} /> 
        <GalleryList imagesData={imagesData} />
        {isLoading
          ? (<Loader />)
          : (loadMoreBtnStatus
            && (<LoadMoreBtn
              onClick={this.handleLoadMore}
              isLoading={isLoading}
            />))}
        <GlobalStyle />
      </Box>
    )
  };
};

