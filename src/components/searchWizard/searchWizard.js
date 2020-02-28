import React, { Component } from 'react';

import SearchBar from './searchBar';
import ShopSelector from './shopSelector';

class SearchWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      searchShop: null,
      postcode: null,
    };
  }

  render() {
    let component;

    if (this.state.searchShop === null) {
      component = <ShopSelector />;
    }

    return (
      <div>
        { component }
      </div>
    );
  }
}

export default SearchWizard;
