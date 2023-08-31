import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { MagnifyingGlass } from 'react-loader-spinner';
import { fetchPictures } from 'Fetch_API';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';

export class App extends Component {
  state = {
    search: '',
    picture: [],
    page: 1,
    isLoading: false,
  };

  searchPic = newPic => {
    const query = `${nanoid()}/${newPic}`;
    if (newPic !== this.state.search) {
      this.setState({
        search: query.slice(query.indexOf('/') + 1, query.length),
        picture: [],
        page: 1,
      });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      const getPicture = await fetchPictures(
        this.state.search,
        this.state.page
      );
      this.setState({
        picture: getPicture,
      });
      this.setState({ isLoading: false });
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
        {this.state.isLoading ? (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        ) : (
          <ImageGallery pictures={this.state.picture} />
        )}

        {this.state.picture.length !== 0 && (
          <BtnLoadMore loadMore={this.nextPage} />
        )}
      </>
    );
  }
}
