import React, { Component } from 'react';

import SearchBar from './searchBar';
import ShopSelector from './shopSelector';
import PostcodeSelector from './postcodeSelector';

class SearchWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      searchShop: null,
      postcode: null,
      shops: [
        {
          shopName: 'First Shop',
          shopBlurb: 'This is a really great shop',
        },
        {
          shopName: 'Second Shop',
          shopBlurb: 'Another is a really great shop',
        },
        {
          shopName: 'Third Shop',
          shopBlurb: 'Another is a really great shop',
        },
        {
          shopName: 'Fourth Shop',
          shopBlurb: 'Another is a really great shop',
        },
      ],
    };
  }

  selectShop(index) {
    this.setState({ searchShop: index });
  }

  handleShopSelect(shopId) {
    console.log(shopId);
    this.setState({ searchShop: shopId });
  }

  render() {
    let component;

    if (this.state.searchShop === null) {
      component = <ShopSelector handleShopSelect={this.handleShopSelect.bind(this)} shops={this.state.shops} selectShop={this.selectShop.bind(this)} />;
    } else if (this.state.postcode === null) {
      component = <PostcodeSelector />;
    }

    return (
      <div>
        { component }
      </div>
    );
  }
}

export default SearchWizard;
