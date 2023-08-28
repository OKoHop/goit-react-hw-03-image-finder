import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { fetchPictures } from 'Fetch_API';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';

export class App extends Component {
  state = {
    search: '',
    picture: [],
    page: 1,
  };

  searchPic = newPic => {
    const query = `${nanoid()}/${newPic}`;
    this.setState({
      search: query.slice(query.indexOf('/') + 1, query.length),
      picture: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      const getPicture = await fetchPictures(
        this.state.search,
        this.state.page
      );
      this.setState(prevState => {
        return {
          picture: getPicture,
        };
      });
    }
  }

  nextPage = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <>
        <SearchBar submitForm={this.searchPic} />
        <ImageGallery pictures={this.state.picture} />
        {this.state.picture.length !== 0 && (
          <BtnLoadMore loadMore={this.nextPage} />
        )}
      </>
    );
  }
}
