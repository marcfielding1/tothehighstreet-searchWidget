import React, { Component } from 'react';
import {
  Card, Col, Button, Row,
} from 'react-bootstrap';

import Logo from '../../TTHSLogo.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.shops,
    };
  }

  render() {
    return (
      <div>
        <Row className="align-items-center select-button-row">
          <Button id="allShops" className="select-button" variant="primary" onClick={() => this.props.handleShopSelect('all')}>Search All Shops</Button>
        </Row>

        <Row>
          <p className="mx-auto"> Or select a shop from the list to only search that particular shop</p>
        </Row>
        <Row>
          { this.props.shops.map((item, index) => (

            <Col key={index} sm={4} className="mx-auto shop-list-card">
              <Card className="shop-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Logo} />
                <Card.Body>
                  <Card.Title>{item.shopName}</Card.Title>
                  <Card.Text>
                    {item.shopBlurb}
                  </Card.Text>
                  <Button id="selectShop" className="select-button" variant="primary" onClick={() => this.props.handleShopSelect(index)}>SELECT</Button>
                </Card.Body>
              </Card>
            </Col>

          ))}
        </Row>
      </div>

    );
  }
}

export default SearchBar;

/*

*/
