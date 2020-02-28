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


  render() {
    let component;

    if (this.state.searchShop === null) {
      component = <ShopSelector shops={this.state.shops} />;
    }

    return (
      <div>
        { component }
      </div>
    );
  }
}

export default SearchWizard;
