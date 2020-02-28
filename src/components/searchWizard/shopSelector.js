import React, { Component } from 'react';
import {
  Card, Col, Button, Row,
} from 'react-bootstrap';

import Logo from '../../TTHSLogo.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

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
    return (
      <Row>
        { this.state.shops.map((item, index) => (

          <Col key={index} sm={4} className="mx-auto shop-list-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Logo} />
              <Card.Body>
                <Card.Title>{item.shopName}</Card.Title>
                <Card.Text>
                  {item.shopBlurb}
                </Card.Text>
                <Button variant="primary" onClick>SELECT</Button>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row>

    );
  }
}

export default SearchBar;

/*

*/
