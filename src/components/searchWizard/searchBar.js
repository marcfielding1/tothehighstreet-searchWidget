import React, { Component } from 'react';
import {
  Container, InputGroup, FormControl, Col, Button,
} from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Col sm={8} className="mx-auto">
        <InputGroup className="mb-2">
          <FormControl
            placeholder="I'm shopping for..."
            aria-label="search"
            aria-describedby="I'm shopping for..."
          />
          <InputGroup.Prepend>
            <Button variant="success">
              Search
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Col>
    );
  }
}

export default SearchBar;
